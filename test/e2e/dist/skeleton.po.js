"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var PageObject_Skeleton = exports.PageObject_Skeleton = (function () {
  function PageObject_Skeleton() {
    _classCallCheck(this, PageObject_Skeleton);
  }

  _prototypeProperties(PageObject_Skeleton, null, {
    getCurrentPageTitle: {
      value: function getCurrentPageTitle() {
        return browser.getTitle();
      },
      writable: true,
      configurable: true
    },
    navigateTo: {
      value: function navigateTo(href) {
        element(by.css("a[href=\"" + href + "\"]")).click();
        return browser.waitForHttpDone();
      },
      writable: true,
      configurable: true
    }
  });

  return PageObject_Skeleton;
})();

Object.defineProperty(exports, "__esModule", {
  value: true
});