"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppStoreButton = function AppStoreButton(props) {

  var imgUrl = "http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg";
  var aStyle = {
    display: 'inline-block',
    overflow: 'hidden',
    background: 'url(' + imgUrl + ') no-repeat',
    width: undefined.props.width || 165,
    height: undefined.props.height || 40
  };

  return;
  _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("a", {
      style: aStyle,
      href: undefined.props.url
    })
  );
};

exports.default = AppStoreButton;
//# sourceMappingURL=AppStoreButton.js.map