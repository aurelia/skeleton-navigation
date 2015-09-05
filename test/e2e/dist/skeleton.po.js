'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PageObject_Skeleton = (function () {
  function PageObject_Skeleton() {
    _classCallCheck(this, PageObject_Skeleton);
  }

  _createClass(PageObject_Skeleton, [{
    key: 'getCurrentPageTitle',
    value: function getCurrentPageTitle() {
      return browser.getTitle();
    }
  }, {
    key: 'navigateTo',
    value: function navigateTo(href) {
      element(by.css('a[href="' + href + '"]')).click();
      return browser.waitForRouterComplete();
    }
  }]);

  return PageObject_Skeleton;
})();

exports.PageObject_Skeleton = PageObject_Skeleton;