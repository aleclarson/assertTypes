
# assertTypes 1.0.0  ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Calls [`assertType`](https://github.com/aleclarson/assertType) on each key-value pair in an `Object`.

```coffee
assertTypes = require "assertTypes"

assertTypes obj,
  foo: Number
  bar: [ Number, String ]
```
