"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppStoreButton = function (_React$Component) {
  _inherits(AppStoreButton, _React$Component);

  function AppStoreButton() {
    _classCallCheck(this, AppStoreButton);

    return _possibleConstructorReturn(this, (AppStoreButton.__proto__ || Object.getPrototypeOf(AppStoreButton)).apply(this, arguments));
  }

  _createClass(AppStoreButton, [{
    key: "render",
    value: function render() {
      var imgUrl = "http://linkmaker.itunes.apple.com/images/badges/en-us/badge_appstore-lrg.svg";
      var aStyle = {
        display: 'inline-block',
        overflow: 'hidden',
        background: 'url(' + imgUrl + ') no-repeat',
        width: this.props.width || 165,
        height: this.props.height || 40
      };

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("a", {
          style: aStyle,
          href: this.props.url
        })
      );
    }
  }]);

  return AppStoreButton;
}(_react2.default.Component);

exports.default = AppStoreButton;
//# sourceMappingURL=AppStoreButton.js.map