
var assertType = require('assertType');

function assertTypes(obj, types) {
  assertType(obj, Object);
  assertType(types, Object);
  for (var key in types) {
    assertType(
      obj[key],
      types[key],
      key
    );
  }
}

module.exports = assertTypes;
