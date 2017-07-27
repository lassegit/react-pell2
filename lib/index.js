'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pell = require('pell');

var _pell2 = _interopRequireDefault(_pell);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== 'undefined' && window.document && window.document.createElement) {
  window.pell = _pell2.default; // Expose Pell globally
}

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
        element: this.editor,
        onChange: function onChange(html) {
          return _this2.props.onChange(html);
        },
        styleWithCSS: this.props.styleWithCSS,
        actions: this.props.actions,
        classes: this.props.classes
      });

      this.editor.content.innerHTML = this.props.content;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.editor.destroy();
      this.editor = null;
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      return this.editor.content.innerHTML;
    }
  }, {
    key: 'getText',
    value: function getText() {
      return this.editor.content.innerText;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var style = this.props.style;

      return _react2.default.createElement('div', { ref: function ref(e) {
          return _this3.editor = e;
        }, style: style });
    }
  }]);

  return ReactPell;
}(_react.Component);

exports.default = ReactPell;


ReactPell.propTypes = {
  content: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  styleWithCSS: _propTypes2.default.bool,
  actions: _propTypes2.default.array,
  classes: _propTypes2.default.object,
  style: _propTypes2.default.object
};

ReactPell.defaultProps = {
  content: '',
  styleWithCSS: false,
  actions: ['bold', 'italic', 'underline', 'strikethrough', 'heading1', 'heading2', 'olist', 'ulist', 'quote', 'code', 'line'],
  classes: {
    actionbar: 'pell-actionbar',
    button: 'pell-button',
    content: 'pell-content'
  }
};
module.exports = exports['default'];