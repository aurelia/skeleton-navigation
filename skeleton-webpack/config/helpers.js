/**
 * Inspired by @AngularClass
 * https://github.com/AngularClass/angular2-webpack-starter
 */

const path = require('path');
const fs = require('fs');

// Helper functions
const ROOT = path.resolve(__dirname, '..');
const jsonfile = require('jsonfile');
const del = require('del');

const pkg = JSON.parse(fs.readFileSync(root('package.json')));
const language = (process.env.AURELIA_LANGUAGE || pkg.language || 'javascript').toLowerCase();
const readdir = require('recursive-readdir-sync');
const moduleType = 'es2015'; // in case of weird problems try 'commonjs'; uncompressed bundle will be ~35KB larger

function hasProcessFlag(flag) {
  return process.argv.join('').indexOf(flag) > -1;
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}

function selectLanguage(target) {
  if (!!pkg.language) {
    throw new Error('You have previously selected a language. If you know what you\'re doing, do the change manually in package.json.');
  }
  target = target.toLowerCase();
  if (target != 'typescript' && target != 'javascript') {
    throw new Error('Available languages are: typescript or javascript');
  }
  
  fs.renameSync(root(target + '-src'), root('src'));
  fs.renameSync(root(target + '-test'), root('test'));
  const other = target === 'typescript' ? 'javascript' : 'typescript';
  del.sync([root(other + '-src/**'), root(other + '-test/**')]);
  pkg.language = target;
  jsonfile.writeFileSync(root('package.json'), pkg, {spaces: 2});
  return true;
}

function generateMeta(input) {
  var aureliaPackages = input.aurelia;
  var bootstrapPackages = input.bootstrap;
  var excludeFromAureliaBundle = input.excludeFromAureliaBundle;
  var packages = Object.keys(pkg.dependencies || {});
  packages = packages.concat(aureliaPackages.filter(item => packages.indexOf(item) < 0));
  var aliases = {};
  aureliaPackages = [];
  var vendorPackages = [];
  packages.forEach(function (moduleId) {
    var vendorPath = path.resolve(root('node_modules'), moduleId);
    var vendorPkgPath = path.resolve(vendorPath, 'package.json');
    var vendorPkg = JSON.parse(fs.readFileSync(vendorPkgPath, 'utf8'));
    
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

module.exports.hasProcessFlag = hasProcessFlag;
module.exports.root = root;
module.exports.generateMeta = generateMeta;
module.exports.language = language;
module.exports.selectLanguage = selectLanguage;
module.exports.package = pkg;
