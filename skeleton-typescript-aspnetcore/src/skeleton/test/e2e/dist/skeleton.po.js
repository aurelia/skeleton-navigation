var PageObject_Skeleton = (function () {
    function PageObject_Skeleton() {
    }
    PageObject_Skeleton.prototype.getCurrentPageTitle = function () {
        return browser.getTitle();
    };
    PageObject_Skeleton.prototype.navigateTo = function (href) {
        element(by.css('a[href="' + href + '"]')).click();
        return browser.waitForRouterComplete();
    };
    return PageObject_Skeleton;
})();
exports.PageObject_Skeleton = PageObject_Skeleton;
