
# assertTypes v2.0.1 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Calls [`assertType`](https://github.com/aleclarson/assertType) on each key-value pair in an `Object`.

Does **not** support nested types.

```coffee
const assertTypes = require('assertTypes');

const types = {
  foo: Number,
  bar: String,
};

assertTypes(obj, types);
```
