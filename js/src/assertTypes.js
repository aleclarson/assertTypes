var assertType;

assertType = require("assertType");

module.exports = function(obj, types) {
  var key, meta, type;
  assertType(obj, Object);
  assertType(types, Object);
  meta = {
    obj: obj,
    types: types
  };
  for (key in types) {
    type = types[key];
    meta.key = key;
    assertType(obj[key], type, meta);
  }
};

//# sourceMappingURL=../../map/src/assertTypes.map
