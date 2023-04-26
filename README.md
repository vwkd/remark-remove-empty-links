# README

Remark plugin that removes hyperlinks without URL



## Features

- removes hyperlinks without URL



## Example

```js
import { unified, remarkParse, remarkStringify } from "./deps.ts";
import remarkRemoveEmptyLinks from "./src/main.ts";

const result = (await unified()
  .use(remarkParse)
  .use(remarkRemoveEmptyLinks)
  .use(remarkStringify)
  .process(`[foobar]()`))
  .toString();
console.log(result);
```

Before

```md
[foobar]()
```

After

```md
foobar
```
