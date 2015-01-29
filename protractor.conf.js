// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  //seleniumAddress: 'http://0.0.0.0:4444',
  // add proper version number
  seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
  specs: ['specs/e2e/dist/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
