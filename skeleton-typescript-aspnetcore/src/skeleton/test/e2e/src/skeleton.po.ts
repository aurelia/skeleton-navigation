export class PageObject_Skeleton {

  constructor() {

  }

  getCurrentPageTitle() {
    return browser.getTitle();
  }

  navigateTo(href: string) {
    element(by.css('a[href="' + href + '"]')).click();
    return browser.waitForRouterComplete();
  }
}
