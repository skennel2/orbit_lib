"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lunaRocket = require("luna-rocket");

var _keycode = _interopRequireDefault(require("keycode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TestComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(TestComponent, _Component);

  function TestComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TestComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TestComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleKeyDown = function (index, event) {
      var refs = _this.state.refs;

      switch ((0, _keycode["default"])(event)) {
        case 'right':
          refs[(index + 1) % refs.length].focus();
          break;

        case 'left':
          if (index === 0) {
            refs[refs.length - 1].focus();
            break;
          }

          refs[index - 1].focus();
          break;
      }
    };

    _this.handleTouchTap = function () {
      console.log('버튼이 클릭되었습니다.');
    };

    return _this;
  }

  _createClass(TestComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.refs.focus1.focus();
      this.setState({
        refs: [this.refs.focus1, this.refs.focus2, this.refs.focus3, this.refs.focus4]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(_lunaRocket.LUXButton, {
        ref: "focus1",
        label: "Focus1",
        onKeyDown: this.handleKeyDown.bind(this, 0),
        onTouchTap: this.handleTouchTap
      }), " ", _react["default"].createElement(_lunaRocket.LUXButton, {
        ref: "focus2",
        label: "Focus2",
        blue: true,
        onKeyDown: this.handleKeyDown.bind(this, 1)
      }), " ", _react["default"].createElement(_lunaRocket.LUXButton, {
        ref: "focus3",
        label: "Focus3 (Link)",
        href: "http://google.com",
        onKeyDown: this.handleKeyDown.bind(this, 2)
      }), " ", _react["default"].createElement(_lunaRocket.LUXButton, {
        ref: "focus4",
        label: "Focus4",
        disabled: true,
        onKeyDown: this.handleKeyDown.bind(this, 3)
      }));
    }
  }]);

  return TestComponent;
}(_react.Component);

exports["default"] = TestComponent;