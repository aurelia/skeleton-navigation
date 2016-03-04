require('babel-core/register');

exports.config = {
  baseUrl: 'http://localhost:3000/',

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  //seleniumAddress: 'http://0.0.0.0:4444',
  specs: ['test/e2e/src/**/*.js'],

  plugins: [{
    path: 'aurelia.protractor.js'
  }],


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },
  onPrepare: function() {
  }
};
