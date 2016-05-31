/**
 * Inspired by @AngularClass
 * https://github.com/AngularClass/angular2-webpack-starter
 */

var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');

var jsonfile = require('jsonfile');

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
const moduleType = 'es2015'; // or in case of problems try 'commonjs'; bundle will be ~35KB larger

function generateMeta(input) {
  var aureliaPackages = input.aurelia;
  var bootstrapPackages = input.bootstrap;
  var excludeFromAureliaBundle = input.excludeFromAureliaBundle;
  var pkg = JSON.parse(fileSystem.readFileSync(root('package.json')));
  var packages = Object.keys(pkg.dependencies || {});
  packages = packages.concat(aureliaPackages.filter(item => packages.indexOf(item) < 0));
  var aliases = {};
  aureliaPackages = [];
  var vendorPackages = [];
  packages.forEach(function (moduleId) {
    var vendorPath = path.resolve(root('node_modules'), moduleId);
    var vendorPkgPath = path.resolve(vendorPath, 'package.json');
    var vendorPkg = JSON.parse(fileSystem.readFileSync(vendorPkgPath, 'utf8'));
    
    if (vendorPkg._npmUser && vendorPkg._npmUser.name === 'aureliaeffect' || aureliaPackages.indexOf(moduleId) >= 0) {
      // enable for es2015 builds:
      aliases[moduleId + '$'] = root('node_modules/'+ moduleId +'/dist/' + moduleType + '/'+ moduleId +'.js');
      aliases[moduleId] = root('node_modules/'+ moduleId +'/dist/' + moduleType);
      
      if (vendorPkg.main) {
        // changing actual `main` paths because of a resolve bug in webpack
        // not really required, but we can do it just in case anyway
        vendorPkg.main = vendorPkg.main.replace('/commonjs/', '/es2015/');
        jsonfile.writeFileSync(vendorPkgPath, vendorPkg, {spaces: 2});
      }
    } else {
      if (vendorPkg.main && bootstrapPackages.indexOf(moduleId) === -1) {
        vendorPackages.push(moduleId);
      }
    }
  });
  Object.keys(aliases).forEach(function(moduleId) {
    if (moduleId.endsWith('$')) return;
    if (bootstrapPackages.indexOf(moduleId) === -1 && excludeFromAureliaBundle.indexOf(moduleId) === -1) {
      aureliaPackages.push(moduleId);
    }
  })
  return { aliases, vendorPackages, aureliaPackages, bootstrapPackages };
}

exports.hasProcessFlag = hasProcessFlag;
exports.root = root;
exports.generateMeta = generateMeta;
