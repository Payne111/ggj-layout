'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var R1CN = function (_Component) {
  _inherits(R1CN, _Component);

  function R1CN() {
    _classCallCheck(this, R1CN);

    return _possibleConstructorReturn(this, (R1CN.__proto__ || Object.getPrototypeOf(R1CN)).apply(this, arguments));
  }

  _createClass(R1CN, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          antd = _props.antd,
          className = _props.className,
          style = _props.style;

      antd = Object.assign({}, antd, {
        className: className,
        style: style
      });
      var len = children.length;
      return _react2.default.createElement(
        _antd.Row,
        { gutter: 24 },
        typeof children === 'string' ? children : len > 1 ? children.map(function (child, i) {
          return _react2.default.createElement(
            _antd.Col,
            _extends({ key: i, span: child.props.col || parseInt(24 / len) }, antd),
            child
          );
        }) : children
      );
    }
  }]);

  return R1CN;
}(_react.Component);

R1CN.propTypes = {
  children: _propTypes2.default.any.isRequired,
  antd: _propTypes2.default.object,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

exports.default = R1CN;