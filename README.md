# i18n lightweight

[![Build Status](https://travis-ci.org/davidnguyen179/i18n-lite.svg?branch=master)](https://travis-ci.org/davidnguyen179/i18n-lite) [![codecov](https://codecov.io/gh/davidnguyen179/i18n-lite/branch/master/graph/badge.svg)](https://codecov.io/gh/davidnguyen179/i18n-lite)

<hr/>

This component is the wrapped library of [intl-messageformat](https://github.com/yahoo/intl-messageformat).

## Usage

```bash
my-app
├── components/
    └── abc/
        └──locale/
            └──locale.en.json
            └──locale.vi.json
            └──index.js
        └──index.js
├── App.js
```

Create json locale files

**components/abc/locale/locale.en.json**

```json
{
  "greeting": "Hi {someone}. My name is {name}"
}
```

**components/abc/locale/locale.vi.json**

```json
{
  "greeting": "Chào {someone}. Tên mình là {name}"
}
```

**components/abc/locale/index.js**

```ts
import { getI18n } from 'i18n-lite';

export const i18n = getI18n({
  messages: locale => require(`./locale.${locale}.json`)
});
```

**components/abc/index.js**
```js
import { i18n } from './locale';

const { greeting } = i18n.messages();
const content = greeting({ someone: 'John', name: 'David' });

// Vietnamese: Chào John. Tên mình là David
// English: Hi John. My name is David
```

**my-app/App.js**

```js
import { setGlobalLocale } from 'i18n-lite';

setGlobalLocale({ locale: 'vi' });
```
