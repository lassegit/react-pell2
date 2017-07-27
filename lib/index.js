'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pell = require('pell');

var _pell2 = _interopRequireDefault(_pell);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactPell = function (_Component) {
  _inherits(ReactPell, _Component);

  function ReactPell(props) {
    _classCallCheck(this, ReactPell);

    return _possibleConstructorReturn(this, (ReactPell.__proto__ || Object.getPrototypeOf(ReactPell)).call(this, props));
  }

  _createClass(ReactPell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.editor = _pell2.default.init({
        element: _reactDom2.default.findDOMNode(this),
        onChange: function onChange(html) {
          _this2.props.onChange ? _this2.props.onChange(html) : null;
        },
        styleWithCSS: this.props.styleWithCSS,
        actions: this.props.actions,
        classes: this.props.classes
      });

      if (this.props.content) {
        this.editor.content.innerHTML = this.props.content;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.editor.destroy();
      this.editor = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          style = _props.style;

      var divStyle = _extends({ width: width, height: height }, style);

      return _react2.default.createElement('div', { style: divStyle });
    }
  }]);

  return ReactPell;
}(_react.Component);

exports.default = ReactPell;


ReactPell.propTypes = {
  content: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  styleWithCSS: _propTypes2.default.bool,
  actions: _propTypes2.default.array,
  classes: _propTypes2.default.object,
  style: _propTypes2.default.object,
  width: _propTypes2.default.string,
  height: _propTypes2.default.string
};
module.exports = exports['default'];