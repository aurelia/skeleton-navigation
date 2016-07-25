// An example configuration file.
exports.config = {
  allScriptsTimeout: 15000,
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  //seleniumAddress: 'http://0.0.0.0:4444',
  // add proper version number
  seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  specs: ['test/e2e/dist/**/*.js'],

  plugins: [{
    package: 'aurelia-tools/plugins/protractor'
  }],


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
