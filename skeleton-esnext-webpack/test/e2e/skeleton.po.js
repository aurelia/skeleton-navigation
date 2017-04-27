export class PageObjectSkeleton {
  getCurrentPageTitle() {
    return browser.getTitle();
  }

  async navigateTo(href) {
    const navigatingReady = browser.waitForRouterComplete();
    await element(by.css('a[href="' + href + '"]')).click();
    await navigatingReady;
  }
}
