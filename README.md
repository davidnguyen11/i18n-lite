# i18n lightweight

[![Build Status](https://travis-ci.org/davidnguyen179/i18n-lite.svg?branch=master)](https://travis-ci.org/davidnguyen179/i18n-lite) [![codecov](https://codecov.io/gh/davidnguyen179/i18n-lite/branch/master/graph/badge.svg)](https://codecov.io/gh/davidnguyen179/i18n-lite)

<hr/>

This component is the wrapped library of [intl-messageformat](https://github.com/yahoo/intl-messageformat).

## Usage

```bash
component/
├── locale/
    └── locale.en.json
    └── locale.vi.json
    └── index.js
├── App.js
```

Create json locale files

**locale.en.json**

```json
{
  "greeting": "Hi {someone}. My name is {name}"
}
```

**locale.vi.json**

```json
{
  "greeting": "Chào {someone}. Tên mình là {name}"
}
```

**index.js**

```ts
import { getI18n } from 'i18n-lite';

export const i18n = getI18n({
  messages: locale => require(`./locale.${locale}.json`)
});
```

**App.js**

```ts
import { setGlobalLocale } from 'i18n-lite';
import { i18n } from './locale';

setGlobalLocale({ locale: 'vi' });
const { greeting } = i18n.messages();
const content = greeting({ someone: 'John', name: 'David' });
```