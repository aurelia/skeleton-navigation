require('aurelia-polyfills');
require('aurelia-pal-browser').initialize();

Error.stackTraceLimit = Infinity;

const srcContext = require.context(
  // directory:
  '../src',
  // recursive:
  true,
  // src file regex:
  /\\.[tj]s$/igm
);

const testContext = require.context(
  // directory:
  './karma-unit',
  // recursive:
  true,
  // test file regex:
  /\.spec\.[tj]s$/igm
);

function requireAllInContext(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAllInContext(srcContext);
requireAllInContext(testContext);
