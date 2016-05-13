
assertType = require "assertType"

module.exports = (obj, types) ->

  assertType obj, Object
  assertType types, Object

  meta = { obj, types }

  for key, type of types

    meta.key = key

    assertType obj[key], type, meta

  return
