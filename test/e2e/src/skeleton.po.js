export class PageObject_Skeleton {

  constructor() {

  }

  getCurrentPageTitle() {
    return browser.getTitle();
  }

  navigateTo(href) {
    var deferred = protractor.promise.defer();
    element(by.css('a[href="' + href + '"]')).click().then( () => {
      browser.sleep(2000);
      deferred.fulfill(true);
    });

    return deferred.promise;
  }
}
