import 'aurelia-polyfills';
import 'aurelia-loader-nodejs';
import {Options} from 'aurelia-loader-nodejs';
import {PLATFORM, DOM} from 'aurelia-pal';
import {initialize} from 'aurelia-pal-nodejs';
initialize();
Options.relativeToDir = __dirname;
process.on('unhandledRejection', function(reason, p) {
  console.log('Possibly unhandled Rejection at: Promise ', p, ' reason: ', reason);
});
const g = (global as any);
g.window = g.self = PLATFORM.global;
g.document = PLATFORM.global.document;
g.Element = DOM.Element;
g.SVGElement = DOM.SVGElement;
g.HTMLElement = {};
g.requestAnimationFrame = PLATFORM.requestAnimationFrame;
g.location = PLATFORM.location;
g.System = {
  import(module: string) {
    return Promise.resolve(require(module));
  }
}
