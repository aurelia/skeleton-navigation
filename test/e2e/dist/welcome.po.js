'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PageObject_Welcome = (function () {
  function PageObject_Welcome() {
    _classCallCheck(this, PageObject_Welcome);
  }

  _createClass(PageObject_Welcome, [{
    key: 'getGreeting',
    value: function getGreeting() {
      return element(by.tagName('h2')).getText();
    }
  }, {
    key: 'setFirstname',
    value: function setFirstname(value) {
      return element(by.valueBind('firstName')).clear().sendKeys(value);
    }
  }, {
    key: 'setLastname',
    value: function setLastname(value) {
      return element(by.valueBind('lastName')).clear().sendKeys(value);
    }
  }, {
    key: 'getFullname',
    value: function getFullname() {
      return element(by.css('.help-block')).getText();
    }
  }, {
    key: 'pressSubmitButton',
    value: function pressSubmitButton() {
      return element(by.css('button[type="submit"]')).click();
    }
  }, {
    key: 'openAlertDialog',
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
    }
  }]);

  return PageObject_Welcome;
})();

exports.PageObject_Welcome = PageObject_Welcome;