'use strict';

var _welcomePoJs = require('./welcome.po.js');

var _skeletonPoJs = require('./skeleton.po.js');

describe('aurelia skeleton app', function () {
  var po_welcome, po_skeleton;

  beforeEach(function () {
    po_skeleton = new _skeletonPoJs.PageObject_Skeleton();
    po_welcome = new _welcomePoJs.PageObject_Welcome();

    browser.loadAndWaitForAureliaPage("http://localhost:9000");
  });

  it('should load the page and display the initial page title', function () {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
  });

  it('should display greeting', function () {
    expect(po_welcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App!');
  });

  it('should automatically write down the fullname', function () {
    po_welcome.setFirstname('Rob');
    po_welcome.setLastname('Eisenberg');

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
    browser.sleep(200);
    expect(po_welcome.getFullname()).toBe('ROB EISENBERG');
  });

  it('should show alert message when clicking submit button', function () {
    expect(po_welcome.openAlertDialog()).toBe(true);
  });

  it('should navigate to users page', function () {
    po_skeleton.navigateTo('#/users');
    expect(po_skeleton.getCurrentPageTitle()).toBe('Github Users | Aurelia');
  });
});