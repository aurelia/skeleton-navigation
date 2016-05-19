/**
 * This is the entrypoint for the Webpack app.
 * Require any polyfills and polluting runtimes here.
 */

require('ts-helpers');
// required for await-async:
require('regenerator-runtime');
require('bluebird').config({
  // Enable warnings
  warnings: false,
  /*
  // Enable long stack traces
  longStackTraces: true,
  // Enable cancellation
  cancellation: true,
  // Enable monitoring
  monitoring: true
  */
});
require('./src/main');
