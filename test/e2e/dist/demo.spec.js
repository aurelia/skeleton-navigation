"use strict";

var PageObject_Welcome = require("./welcome.po.js").PageObject_Welcome;
var PageObject_Skeleton = require("./skeleton.po.js").PageObject_Skeleton;


describe("aurelia skeleton app", function () {
  var po_welcome, po_skeleton;

  beforeEach(function () {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();

    browser.get("http://localhost:9000");

    browser.executeAsyncScript("var cb = arguments[arguments.length - 1];" + "document.addEventListener(\"aurelia-composed\", function (e) {" + "  cb(\"Aurelia App composed\")" + "}, false);").then(function (result) {
      console.log(result);
    });
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
    expect(po_welcome.getFullname()).toBe("ROB EISENBERG");
  });

  it("should show alert message when clicking submit button", function () {
    expect(po_welcome.openAlertDialog()).toBe(true);

    // close it again otherwhise your testing browser starts to hang
    /*po_welcome.closeAlert();*/
  });

  iit("should navigate to flickr page", function () {
    po_skeleton.navigateTo("#/flickr");
    expect(po_skeleton.getCurrentPageTitle()).toBe("Flickr | Aurelia");
  });
});