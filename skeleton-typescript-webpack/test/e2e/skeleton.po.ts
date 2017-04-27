import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';

export class PageObject_Skeleton {
  getCurrentPageTitle() {
    return browser.getTitle();
  }

  async navigateTo(href) {
    const navigatingReady = browser.waitForRouterComplete();
    await element(by.css('a[href="' + href + '"]')).click();
    await navigatingReady;
  }
}
