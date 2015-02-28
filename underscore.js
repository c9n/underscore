//     Wow!!!
//     This is not that underscore.
//     C9N
//     2015 - 1970
//     -_-!

(function() {

  // Baseline
  // --------

  var root = this;

  var previousUnderscore = root._;

  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  var
    push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ArrayProto.toString,
    hasOwnProperty = ArrayProto.hasOwnProperty;

  var
    nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeBind = FuncProto.bind,
    nativeCreate = Object.create;

  var Ctor = function(){};

  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;

  } else {
    root._ = _;
  }

  _.VERSION = 'NIL';

  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;

    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }

    return function() {
      return func.apply(context, arguments);
    };
  };

  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var isArrayLike = function(collection) {
    var length = collection != null && collection.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

}.call(this));
