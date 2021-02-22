import React from 'react';
import Button from '@material-ui/core/Button';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello World");
}

function CustomButton(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "contained"
  }, props.text));
}

export { CustomButton, HelloWorld };
