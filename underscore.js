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
    nativeKeys = Array.keys,
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

}.call(this));
