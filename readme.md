## MPWT Parser

A parser for `https://ts.mpwt.gov.kh/xxx` plate number QR Code. The parser will fetch data and parse it as a JSON format.

### Installation

This package is ESM-only!

```
npm install mpwt-parser
```

### Usage

```js
import { parse } from 'mpwt-parser'

const result = await parse("http://ts.mpwt.gov.kh/Q01VHN2B");
```

Result

```jsonc
{
  "plate_no": { "en": "SIEM REAP 3A-2399", "km": "សៀមរាប 3A-2399" },
  "brand": "HYUNDAI COUNTY",
  "type": { "en": "HEAVY BUS", "km": "ដឹកអ្នកដំណើរធុនធំ" },
  "color": { "en": "MILK COLOR", "km": "ទឹកដោះគោ" },
  "engine_no": "D4D***61727",
  "frame_no": "KMJHD1******28960",
  "power": "140",
  "chassis_no": "NIL",
  "axle_no": "2",
  "cylinder_no": "4",
  "cylinder_size": "3907",
  "year_made": "2006"
}
```

---

#### License

`Apache-2.0`
