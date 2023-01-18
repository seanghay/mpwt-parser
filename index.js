import snakecaseKeys from 'snakecase-keys'
import jsdom from 'jsdom'
import axios from "axios";
import { CookieJar } from 'tough-cookie'
import { HttpCookieAgent, HttpsCookieAgent } from 'http-cookie-agent/http'

function createCookieAgents() {
  const jar = new CookieJar();
  return {
    httpAgent: new HttpCookieAgent({ cookies: { jar } }),
    httpsAgent: new HttpsCookieAgent({ cookies: { jar } }),
  }
}

/** 
 * @typedef {{en: string, km: string}} LocalePair
 * @typedef {{
 *  plate_no: LocalePair,
 *  brand: LocalePair,
 *  type: LocalePair,
 *  color: LocalePair,
 *  engine_no: LocalePair,
 *  frame_no: LocalePair,
 *  power: LocalePair,
 *  chassis_no: LocalePair,
 *  axle_no: LocalePair,
 *  cylinder_no: LocalePair,
 *  cylinder_size: LocalePair,
 *  year_made: LocalePair,
 * }} ParseResult
 * @param {string} url 
 * @returns {Promise<ParseResult>}
 */
export async function parse(url) {
  const client = axios.create(createCookieAgents());
  const { data: html } = await client.get(url, {
    responseType: 'text'
  });

  const dom = new jsdom.JSDOM(html);
  const doc = dom.window.document;

  function createEntries(language) {
    const rows = doc.querySelectorAll(`#${language} table tr`);
    const root = [];
    for (const row of rows) {
      const columns = row.querySelectorAll('td');
      const entries = [];
      for (const col of columns) {
        entries.push(col.textContent.trim())
      };
      root.push(entries);
    }

    return root;
  }

  const englishEntries = createEntries("english")
  const khmerEntries = createEntries("khmer")
  const merged = englishEntries.map(([key, value], index) => {
    return [key, { en: value, km: khmerEntries[index][1] }]
  })

  return snakecaseKeys(Object.fromEntries(merged));
}
