/**
 * Inspired by @AngularClass
 * https://github.com/AngularClass/angular2-webpack-starter
 */

var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');

console.log('root directory:', root() + '\n');

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

const fileSystem = require('fs');
const readdir = require('recursive-readdir-sync');

function generateMeta() {
  var pkg = JSON.parse(fileSystem.readFileSync(root('package.json')));
  var packages = Object.keys(pkg.dependencies || {});
  // console.log(vendorPackages);
  var aliases = {
    'aurelia-bootstrapper-webpack': root('node_modules/aurelia-bootstrapper-webpack/dist/es2015/aurelia-bootstrapper-webpack.js'),
    'aurelia-binding': root('node_modules/aurelia-binding/dist/es2015/aurelia-binding.js'),
    'aurelia-dependency-injection': root('node_modules/aurelia-dependency-injection/dist/es2015/aurelia-dependency-injection.js'),
    'aurelia-event-aggregator': root('node_modules/aurelia-event-aggregator/dist/es2015/aurelia-event-aggregator.js'),
    'aurelia-fetch-client': root('node_modules/aurelia-fetch-client/dist/es2015/aurelia-fetch-client.js'),
    'aurelia-framework': root('node_modules/aurelia-framework/dist/es2015/aurelia-framework.js'),
    'aurelia-history': root('node_modules/aurelia-history/dist/es2015/aurelia-history.js'),
    'aurelia-history-browser': root('node_modules/aurelia-history-browser/dist/es2015/aurelia-history-browser.js'),
    'aurelia-loader': root('node_modules/aurelia-loader/dist/es2015/aurelia-loader.js'),
    'aurelia-loader-webpack': root('node_modules/aurelia-loader-webpack/dist/es2015/aurelia-loader-webpack.js'),
    'aurelia-logging': root('node_modules/aurelia-logging/dist/es2015/aurelia-logging.js'),
    'aurelia-logging-console': root('node_modules/aurelia-logging-console/dist/es2015/aurelia-logging-console.js'),
    'aurelia-metadata': root('node_modules/aurelia-metadata/dist/es2015/aurelia-metadata.js'),
    'aurelia-pal': root('node_modules/aurelia-pal/dist/es2015/aurelia-pal.js'),
    'aurelia-pal-browser': root('node_modules/aurelia-pal-browser/dist/es2015/aurelia-pal-browser.js'),
    'aurelia-path': root('node_modules/aurelia-path/dist/es2015/aurelia-path.js'),
    'aurelia-polyfills': root('node_modules/aurelia-polyfills/dist/es2015/aurelia-polyfills.js'),
    'aurelia-route-recognizer': root('node_modules/aurelia-route-recognizer/dist/es2015/aurelia-route-recognizer.js'),
    'aurelia-router': root('node_modules/aurelia-router/dist/es2015/aurelia-router.js'),
    'aurelia-task-queue': root('node_modules/aurelia-task-queue/dist/es2015/aurelia-task-queue.js'),
    'aurelia-templating': root('node_modules/aurelia-templating/dist/es2015/aurelia-templating.js'),
    'aurelia-templating-binding': root('node_modules/aurelia-templating-binding/dist/es2015/aurelia-templating-binding.js'),
  };
  var aureliaPackages = [];
  var vendorPackages = [];
  var customAurelia = ['aurelia-templating-router', 'aurelia-templating-resources'];
  packages.forEach(function (moduleId) {
    var vendorPath = path.resolve(root('node_modules'), moduleId);
    var vendorPkgPath = path.resolve(vendorPath, 'package.json');
    var vendorPkg = JSON.parse(fileSystem.readFileSync(vendorPkgPath, 'utf8'));
    
    if (vendorPkg._npmUser && vendorPkg._npmUser.name === 'aureliaeffect') {   
      aliases[moduleId] = root('node_modules/'+ moduleId +'/dist/es2015/'+ moduleId +'.js');
    } else {
      if (vendorPkg.main) {
        vendorPackages.push(moduleId);
      }
    }
  });
  Object.keys(aliases).forEach(function(moduleId) {
    // TODO: for some strange reason 'aurelia-templating-router/router-view' 
    // has to be in te same chunk as /src
    if (moduleId !== 'aurelia-templating-router') {
      aureliaPackages.push(moduleId);
    }
  })
  customAurelia.forEach(moduleId => {
    var vendorPath = path.resolve(root('node_modules'), moduleId, 'dist' , 'es2015');
    readdir(vendorPath).forEach(fileName => {
      var name = path.basename(fileName, '.js');
      if (fileName.endsWith('.d.ts') || name === moduleId) return;
      var package = moduleId + '/' + name;
      aliases[package] = root('node_modules/'+ moduleId +'/dist/es2015/'+ name +'.js')
      if (moduleId === 'aurelia-templating-router' && name !== 'router-view') {
        aliases[moduleId + '-' + name] = root('node_modules/'+ moduleId +'/dist/es2015/'+ name +'.js')
        aureliaPackages.push(moduleId + '-' + name);
      }
    })
  });
  return { aliases, vendorPackages, aureliaPackages };
}

exports.hasProcessFlag = hasProcessFlag;
exports.root = root;
exports.generateMeta = generateMeta;
