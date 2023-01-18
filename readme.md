## MPWT Parser

A parser for `https://ts.mpwt.gov.kh/xxx` plate number QR Code. The parser will fetch data and parse it as a JSON format.

### Installation

This package is ESM-only!

```
npm install mpwt-parser
```

### Usage

```js
import { parse } from './index.js'

const result = await parse("http://ts.mpwt.gov.kh/Q01VHN2B");
```

Result

```jsonc
{
  "plate_no": {
    "en": "SIEM REAP 3A-2399",
    "km": "សៀមរាប 3A-2399"
  },
  "brand": {
    "en": "HYUNDAI COUNTY",
    "km": "HYUNDAI COUNTY"
  },
  "type": {
    "en": "HEAVY BUS",
    "km": "ដឹកអ្នកដំណើរធុនធំ"
  },
  "color": {
    "en": "MILK COLOR",
    "km": "ទឹកដោះគោ"
  },
  "engine_no": {
    "en": "D4D***61727",
    "km": "D4D***61727"
  },
  "frame_no": {
    "en": "KMJHD1******28960",
    "km": "KMJHD1******28960"
  },
  "power": {
    "en": "140",
    "km": "140"
  },
  "chassis_no": {
    "en": "NIL",
    "km": "NIL"
  },
  "axle_no": {
    "en": "2",
    "km": "2"
  },
  "cylinder_no": {
    "en": "4",
    "km": "4"
  },
  "cylinder_size": {
    "en": "3907",
    "km": "3907"
  },
  "year_made": {
    "en": "2006",
    "km": "2006"
  }
}
```

---

#### License

`Apache-2.0`