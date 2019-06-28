"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spongepoop = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('index.js');

Number.prototype.round = function () {
  return Math.round(this);
};

Number.prototype.pad = function () {
  var before = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var n = this.toFixed(after);
  var a = n.split('.')[0];
  var b = a.substr(0, before - a.length) + n;
  return b;
};

module.exports.mathinessVersion = function () {
  return '0.0.1';
};

module.exports.random = function (n) {
  return Math.floor(Math.random() * n);
};

var BigNumber =
/*#__PURE__*/
function () {
  function BigNumber() {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, BigNumber);

    this.value = n.toString();
  }

  _createClass(BigNumber, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(n) {
      this.value = n.toString();
    }
  }, {
    key: "value",
    value: function value() {
      return this.value;
    }
  }]);

  return BigNumber;
}();

global.BigNumber = BigNumber;
module.exports.ZZZZZZ = '>>> HELLO <<<';
/**
* Adds two numbers and returns the result in poop emoji.
* @param {Number} a First number
* @param {Number} b Second number
*/

var spongepoop = function spongepoop(a, b) {
  return '💩'.repeat(a + b);
};

exports.spongepoop = spongepoop;