import {PageObjectWelcome} from './welcome.po';
import {PageObjectSkeleton} from './skeleton.po';
import {config} from '../protractor.conf';

describe('aurelia skeleton app', function() {
  let poWelcome;
  let poSkeleton;

  beforeEach(async () => {
    poSkeleton = new PageObjectSkeleton();
    poWelcome = new PageObjectWelcome();

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
