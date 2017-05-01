import {PageObject_Welcome} from './welcome.po';
import {PageObject_Skeleton} from './skeleton.po';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'aurelia-protractor-plugin/protractor';
import {config} from '../protractor.conf';

describe('aurelia skeleton app', function() {
  let poWelcome: PageObject_Welcome;
  let poSkeleton: PageObject_Skeleton;

  beforeEach(async () => {
    poSkeleton = new PageObject_Skeleton();
    poWelcome = new PageObject_Welcome();

    await browser.loadAndWaitForAureliaPage(`http://localhost:${config.port}`);
  });

  it('should load the page and display the initial page title', async () => {
    await expect(poSkeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
  });

  it('should display greeting', async () => {
    await expect(poWelcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App');
  });

  it('should automatically write down the fullname', async () => {
    await poWelcome.setFirstname('John');
    await poWelcome.setLastname('Doe');

    // binding is not synchronous,
    // therefore we should wait some time until the binding is updated
    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        poWelcome.getFullnameElement(), 'JOHN DOE'
      ), 200
    );
  });

  it('should show alert message when clicking submit button', async () => {
    await expect(poWelcome.openAlertDialog()).toBe(true);
  });

  it('should navigate to users page', async () => {
    await poSkeleton.navigateTo('#/users');
    await expect(poSkeleton.getCurrentPageTitle()).toBe('Github Users | Aurelia');
  });
});
