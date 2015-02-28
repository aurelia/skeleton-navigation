"use strict";

var PageObject_Welcome = require("./welcome.po.js").PageObject_Welcome;

var PageObject_Skeleton = require("./skeleton.po.js").PageObject_Skeleton;

describe("aurelia skeleton app", function () {
  var po_welcome, po_skeleton;

  beforeEach(function () {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();

    browser.loadAndWaitForAureliaPage("http://localhost:9000");
  });

  it("should load the page and display the initial page title", function () {
    expect(po_skeleton.getCurrentPageTitle()).toBe("Welcome | Aurelia");
  });

  it("should display greeting", function () {
    expect(po_welcome.getGreeting()).toBe("Welcome to the Aurelia Navigation App!");
  });

  it("should automatically write down the fullname", function () {
    po_welcome.setFirstname("Rob");
    po_welcome.setLastname("Eisenberg");

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
    browser.sleep(200);
    expect(po_welcome.getFullname()).toBe("ROB EISENBERG");
  });

  it("should show alert message when clicking submit button", function () {
    expect(po_welcome.openAlertDialog()).toBe(true);
  });

  it("should navigate to flickr page", function () {
    po_skeleton.navigateTo("#/flickr");
    expect(po_skeleton.getCurrentPageTitle()).toBe("Flickr | Aurelia");
  });
});