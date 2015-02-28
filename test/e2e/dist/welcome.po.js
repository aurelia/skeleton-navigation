"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var PageObject_Welcome = exports.PageObject_Welcome = (function () {
  function PageObject_Welcome() {
    _classCallCheck(this, PageObject_Welcome);
  }

  _prototypeProperties(PageObject_Welcome, null, {
    getGreeting: {
      value: function getGreeting() {
        return element(by.tagName("h2")).getText();
      },
      writable: true,
      configurable: true
    },
    setFirstname: {
      value: function setFirstname(value) {
        return element(by.valueBind("firstName")).clear().sendKeys(value);
      },
      writable: true,
      configurable: true
    },
    setLastname: {
      value: function setLastname(value) {
        return element(by.valueBind("lastName")).clear().sendKeys(value);
      },
      writable: true,
      configurable: true
    },
    getFullname: {
      value: function getFullname() {
        return element(by.css(".help-block")).getText();
      },
      writable: true,
      configurable: true
    },
    pressSubmitButton: {
      value: function pressSubmitButton() {
        return element(by.css("button[type=\"submit\"]")).click();
      },
      writable: true,
      configurable: true
    },
    openAlertDialog: {
      value: function openAlertDialog() {
        var _this = this;

        return browser.wait(function () {
          _this.pressSubmitButton();

          return browser.switchTo().alert().then(
          // use alert.accept instead of alert.dismiss which results in a browser crash
          function (alert) {
            alert.accept();return true;
          }, function () {
            return false;
          });
        });
      },
      writable: true,
      configurable: true
    }
  });

  return PageObject_Welcome;
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});