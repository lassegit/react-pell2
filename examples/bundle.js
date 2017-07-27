/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ({

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(50);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(58);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _pell = __webpack_require__(185);\n\nvar _pell2 = _interopRequireDefault(_pell);\n\nvar _propTypes = __webpack_require__(186);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\n__webpack_require__(188);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nif (typeof window !== 'undefined' && window.document && window.document.createElement) {\n  window.pell = _pell2.default; // Expose Pell globally\n}\n\nvar ReactPell = function (_Component) {\n  _inherits(ReactPell, _Component);\n\n  function ReactPell(props) {\n    _classCallCheck(this, ReactPell);\n\n    return _possibleConstructorReturn(this, (ReactPell.__proto__ || Object.getPrototypeOf(ReactPell)).call(this, props));\n  }\n\n  _createClass(ReactPell, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.editor = _pell2.default.init({\n        element: _reactDom2.default.findDOMNode(this),\n        onChange: function onChange(html) {\n          return _this2.props.onChange(html);\n        },\n        styleWithCSS: this.props.styleWithCSS,\n        actions: this.props.actions,\n        classes: this.props.classes\n      });\n\n      this.editor.content.innerHTML = this.props.content;\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      this.editor.destroy();\n      this.editor = null;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var style = this.props.style;\n\n      return _react2.default.createElement('div', { style: style });\n    }\n  }]);\n\n  return ReactPell;\n}(_react.Component);\n\nexports.default = ReactPell;\n\n\nReactPell.propTypes = {\n  content: _propTypes2.default.string,\n  onChange: _propTypes2.default.func.isRequired,\n  styleWithCSS: _propTypes2.default.bool,\n  actions: _propTypes2.default.array,\n  classes: _propTypes2.default.object,\n  style: _propTypes2.default.object\n};\n\nReactPell.defaultProps = {\n  content: '',\n  styleWithCSS: false,\n  actions: ['bold', 'italic', 'underline', 'strikethrough', 'heading1', 'heading2', 'olist', 'ulist', 'quote', 'code', 'line'],\n  classes: {\n    actionbar: 'pell-actionbar',\n    button: 'pell-button',\n    content: 'pell-content'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9pbmRleC5qcz8xZmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBwZWxsIGZyb20gJ3BlbGwnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pZiAoXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5kb2N1bWVudCAmJlxuICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkge1xuICB3aW5kb3cucGVsbCA9IHBlbGw7IC8vIEV4cG9zZSBQZWxsIGdsb2JhbGx5XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0UGVsbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5lZGl0b3IgPSBwZWxsLmluaXQoe1xuICAgICAgZWxlbWVudDogUmVhY3RET00uZmluZERPTU5vZGUodGhpcyksXG4gICAgICBvbkNoYW5nZTogaHRtbCA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGh0bWwpLFxuICAgICAgc3R5bGVXaXRoQ1NTOiB0aGlzLnByb3BzLnN0eWxlV2l0aENTUyxcbiAgICAgIGFjdGlvbnM6IHRoaXMucHJvcHMuYWN0aW9ucyxcbiAgICAgIGNsYXNzZXM6IHRoaXMucHJvcHMuY2xhc3NlcyxcbiAgICB9KTtcblxuICAgIHRoaXMuZWRpdG9yLmNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5wcm9wcy5jb250ZW50O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpO1xuICAgIHRoaXMuZWRpdG9yID0gbnVsbDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0eWxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZX0gLz47XG4gIH1cbn1cblxuUmVhY3RQZWxsLnByb3BUeXBlcyA9IHtcbiAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN0eWxlV2l0aENTUzogUHJvcFR5cGVzLmJvb2wsXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5SZWFjdFBlbGwuZGVmYXVsdFByb3BzID0ge1xuICBjb250ZW50OiAnJyxcbiAgc3R5bGVXaXRoQ1NTOiBmYWxzZSxcbiAgYWN0aW9uczogW1xuICAgICdib2xkJyxcbiAgICAnaXRhbGljJyxcbiAgICAndW5kZXJsaW5lJyxcbiAgICAnc3RyaWtldGhyb3VnaCcsXG4gICAgJ2hlYWRpbmcxJyxcbiAgICAnaGVhZGluZzInLFxuICAgICdvbGlzdCcsXG4gICAgJ3VsaXN0JyxcbiAgICAncXVvdGUnLFxuICAgICdjb2RlJyxcbiAgICAnbGluZScsXG4gIF0sXG4gIGNsYXNzZXM6IHtcbiAgICBhY3Rpb25iYXI6ICdwZWxsLWFjdGlvbmJhcicsXG4gICAgYnV0dG9uOiAncGVsbC1idXR0b24nLFxuICAgIGNvbnRlbnQ6ICdwZWxsLWNvbnRlbnQnLFxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBekJBO0FBQ0E7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFoQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///184\n");

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/lasse/Sites/react-pell2/node_modules/pell/dist/pell.min.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg1LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///185\n");

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/lasse/Sites/react-pell2/node_modules/prop-types/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg2LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///186\n");

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/lasse/Sites/react-pell2/node_modules/css-loader/lib/css-base.js'\\n    at runLoaders (/Users/lasse/Sites/react-pell2/node_modules/webpack/lib/NormalModule.js:194:19)\\n    at /Users/lasse/Sites/react-pell2/node_modules/loader-runner/lib/LoaderRunner.js:364:11\\n    at /Users/lasse/Sites/react-pell2/node_modules/loader-runner/lib/LoaderRunner.js:200:19\\n    at /Users/lasse/Sites/react-pell2/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14\\n    at _combinedTickCallback (internal/process/next_tick.js:95:7)\\n    at process._tickCallback (internal/process/next_tick.js:161:9)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg4LmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///188\n");

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/lasse/Sites/react-pell2/node_modules/react/react.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///50\n");

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/lasse/Sites/react-pell2/node_modules/react-dom/index.js'\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTguanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///58\n");

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(50);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(58);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _index = __webpack_require__(184);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar style = {\n  color: '#000',\n  background: '#f2f2f2',\n  borderRadius: '5px',\n  boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',\n  height: '250px'\n};\n\nvar classes = {\n  actionbar: 'custom-action-bar',\n  button: 'custom-button',\n  content: 'custom-content'\n};\n\nvar actions = [{\n  name: 'custom',\n  icon: '<b><u><i>C</i></u></b>',\n  title: 'Custom Action',\n  result: function result() {\n    return console.log('YOLO');\n  }\n}];\n\nfunction change(html) {\n  console.log('html from parent:', html);\n}\n\n_reactDom2.default.render(_react2.default.createElement(\n  'div',\n  null,\n  _react2.default.createElement(\n    'p',\n    null,\n    'You rendered the ReactPell editor:'\n  ),\n  _react2.default.createElement(_index2.default, {\n    content: '<b><u><i>Initial content!</i></u></b>',\n    onChange: change\n    // actions={actions}\n    // classes={classes}\n    , style: style\n  })\n), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXhhbXBsZXMvaW5kZXguanM/YzkwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0UGVsbCBmcm9tICcuLi9zcmMvaW5kZXgnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgY29sb3I6ICcjMDAwJyxcbiAgYmFja2dyb3VuZDogJyNmMmYyZjInLFxuICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICBib3hTaGFkb3c6ICcwIDJweCAzcHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpLCAwIDAgMCAxcHggcmdiYSgxMCwgMTAsIDEwLCAwLjEpJyxcbiAgaGVpZ2h0OiAnMjUwcHgnLFxufTtcblxuY29uc3QgY2xhc3NlcyA9IHtcbiAgYWN0aW9uYmFyOiAnY3VzdG9tLWFjdGlvbi1iYXInLFxuICBidXR0b246ICdjdXN0b20tYnV0dG9uJyxcbiAgY29udGVudDogJ2N1c3RvbS1jb250ZW50Jyxcbn07XG5cbmNvbnN0IGFjdGlvbnMgPSBbe1xuICBuYW1lOiAnY3VzdG9tJyxcbiAgaWNvbjogJzxiPjx1PjxpPkM8L2k+PC91PjwvYj4nLFxuICB0aXRsZTogJ0N1c3RvbSBBY3Rpb24nLFxuICByZXN1bHQ6ICgpID0+IGNvbnNvbGUubG9nKCdZT0xPJylcbn1dO1xuXG5mdW5jdGlvbiBjaGFuZ2UoaHRtbCkge1xuICBjb25zb2xlLmxvZygnaHRtbCBmcm9tIHBhcmVudDonLCBodG1sKVxufVxuXG5SZWFjdERvbS5yZW5kZXIoXG4gIDxkaXY+XG4gICAgPHA+WW91IHJlbmRlcmVkIHRoZSBSZWFjdFBlbGwgZWRpdG9yOjwvcD5cbiAgICA8UmVhY3RQZWxsXG4gICAgICBjb250ZW50PVwiPGI+PHU+PGk+SW5pdGlhbCBjb250ZW50ITwvaT48L3U+PC9iPlwiXG4gICAgICBvbkNoYW5nZT17Y2hhbmdlfVxuICAgICAgLy8gYWN0aW9ucz17YWN0aW9uc31cbiAgICAgIC8vIGNsYXNzZXM9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgLz5cbiAgPC9kaXY+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBleGFtcGxlcy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///84\n");

/***/ })

/******/ });