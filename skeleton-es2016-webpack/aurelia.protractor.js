/* Aurelia Protractor Plugin */
/* eslint-disable no-var, no-console */
function addValueBindLocator() {
  by.addLocator('valueBind', function(bindingModel, optParentElement) {
    var using = optParentElement || document;
    var matches = using.querySelectorAll('*[value\\.bind="' + bindingModel + '"]');
    var result;

    if (matches.length === 0) {
      result = null;
    } else if (matches.length === 1) {
      result = matches[0];
    } else {
      result = matches;
    }

    return result;
  });
}

function loadAndWaitForAureliaPage(pageUrl) {
  browser.get(pageUrl);
  return browser.executeAsyncScript(
    'var cb = arguments[arguments.length - 1];' +
    'document.addEventListener("aurelia-composed", function (e) {' +
    '  cb("Aurelia App composed")' +
    '}, false);'
  ).then(function(result) {
    console.log(result);
    return result;
  });
}

function waitForRouterComplete() {
  return browser.executeAsyncScript(
    'var cb = arguments[arguments.length - 1];' +
    'document.querySelector("[aurelia-app]")' +
    '.aurelia.subscribeOnce("router:navigation:complete", function() {' +
    '  cb(true)' +
    '});'
  ).then(function(result) {
    return result;
  });
}

/* Plugin hooks */
exports.setup = function(config) {
  // Ignore the default Angular synchronization helpers
  browser.ignoreSynchronization = true;

  // add the aurelia specific valueBind locator
  addValueBindLocator();

  // attach a new way to browser.get a page and wait for Aurelia to complete loading
  browser.loadAndWaitForAureliaPage = loadAndWaitForAureliaPage;

  // wait for router navigations to complete
  browser.waitForRouterComplete = waitForRouterComplete;
};

exports.teardown = function(config) {};
exports.postResults = function(config) {};
