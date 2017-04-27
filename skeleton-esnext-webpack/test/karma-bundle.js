require('babel-polyfill');
require('aurelia-polyfills');
require('aurelia-pal-browser').initialize();
require('babel-polyfill');

Error.stackTraceLimit = Infinity;

const srcContext = require.context(
  // directory:
  '../src',
  // recursive:
  true,
  // tests in /src folder regex:
  /\.spec\.[tj]s$/igm
);

const testContext = require.context(
  // directory:
  './karma-unit',
  // recursive:
  true,
  // tests in ./karma-unit folder regex:
  /\.spec\.[tj]s$/igm
);

function requireAllInContext(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAllInContext(srcContext);
requireAllInContext(testContext);
