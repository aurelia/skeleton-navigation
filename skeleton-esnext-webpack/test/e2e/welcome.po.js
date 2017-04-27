export class PageObjectWelcome {
  getGreeting() {
    return element(by.tagName('h2')).getText();
  }

  getFirstnameElement() {
    return element(by.valueBind('firstName'));
  }

  setFirstname(value) {
    const firstName = this.getFirstnameElement();
    return firstName.clear().then(() => firstName.sendKeys(value));
  }

  getLastnameElement() {
    return element(by.valueBind('lastName'));
  }

  setLastname(value) {
    const lastName = this.getLastnameElement();
    return lastName.clear().then(() => lastName.sendKeys(value));
  }

  getFullnameElement() {
    return element(by.css('.help-block'));
  }

  getFullname() {
    return this.getFullnameElement().getText();
  }

  pressSubmitButton() {
    return element(by.css('button[type="submit"]')).click();
  }

  async openAlertDialog() {
    await this.pressSubmitButton();

    await browser.wait(ExpectedConditions.alertIsPresent(), 5000);

    try {
      await browser.switchTo().alert().accept();
      return true;
    } catch (e) {
      return false;
    }
  }
}
