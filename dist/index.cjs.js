'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Button = _interopDefault(require('@material-ui/core/Button'));

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World");
}

function CustomButton(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "contained"
  }, props.text));
}

exports.CustomButton = CustomButton;
exports.HelloWorld = HelloWorld;
