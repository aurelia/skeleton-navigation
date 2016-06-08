/**
 * Adapted from: https://github.com/chentsulin/electron-react-boilerplate/blob/master/package.js
 */

/* eslint strict: 0, no-shadow: 0, no-unused-vars: 0, no-console: 0 */
'use strict';

require('babel-polyfill');
const os = require('os');
const webpack = require('webpack');
const packager = require('electron-packager');
const del = require('del');
const exec = require('child_process').exec;
const argv = require('minimist')(process.argv.slice(2));
const pkg = require('../package.json');
const deps = Object.keys(pkg.dependencies);
const devDeps = Object.keys(pkg.devDependencies);
const appName = argv.name || argv.n || pkg.productName;
const shouldUseAsar = argv.asar || argv.a || false;
const shouldBuildAll = argv.all || false;

const getDependencies = require('flat-npm-dependencies');
const localModules = require('installed-local-npm-modules');
const _ = require('lodash');
const path = require('path');
let electronCfg;

function filter(keep, allLocalModules) {
  let promises = [];
  for (let external of keep) {
    promises.push(getDependencies(path.resolve('node_modules', external)).catch(()=>{}));
  }
  return Promise.all(promises)
    .then(depsOfDeps => 
      _.uniq(_.flatten(depsOfDeps)).concat(keep))
    .then(needToKeep => 
      _.without(allLocalModules, ...(needToKeep.filter(keep => keep !== undefined))).map(name => `/node_modules/${name}($|/)`))
}

localModules().then(allLocalModules => {
  // NOTE: we have to require it later because it sets ENV which influences visible packages! 
  electronCfg = require('./webpack.electron').default;
  return filter(electronCfg.externals, allLocalModules);
}).catch(console.error.bind(console)).then(stuffToFilter => {
const cfg = require('./webpack.electron-renderer.production').default;

const DEFAULT_OPTS = {
  dir: './',
  name: appName,
  asar: shouldUseAsar,
  ignore: [
    '^/test($|/)',
    '^/styles($|/)',
    '^/tools($|/)',
    '^/release($|/)',
    '^/config($|/)',
    '^/custom_typings($|/)',
    '^/typings($|/)',
    '^/\.awcache($|/)',
    '^/src($|/)',
    '^/index\.js$',
    '^/index\.html$',
    '^/wallaby\.js$',
    '^/typings\.json$',
    '^/tsconfig.*\.json$',
  ].concat(stuffToFilter)
};

const icon = argv.icon || argv.i;

if (icon) {
  DEFAULT_OPTS.icon = icon;
}

const version = argv.version || argv.v;

if (version) {
  DEFAULT_OPTS.version = version;
  startPack();
} else {
  // use the same version as the currently-installed electron-prebuilt
  exec('npm list electron-prebuilt --dev', (err, stdout) => {
    if (err) {
      DEFAULT_OPTS.version = '1.2.1';
    } else {
      DEFAULT_OPTS.version = stdout.split('electron-prebuilt@')[1].replace(/\s/g, '');
    }

    startPack();
  });
}


function build(cfg) {
  return new Promise((resolve, reject) => {
    webpack(cfg, (err, stats) => {
      if (err) return reject(err);
      resolve(stats);
    });
  });
}

function startPack() {
  console.log('start pack...');
  del('dist')
    .then(() => build(electronCfg))
    .then(() => build(cfg))
    .then(() => del('release'))
    .then(paths => {
      if (shouldBuildAll) {
        // build for all platforms
        const archs = ['ia32', 'x64'];
        const platforms = ['linux', 'win32', 'darwin'];

        platforms.forEach(plat => {
          archs.forEach(arch => {
            pack(plat, arch, log(plat, arch));
          });
        });
      } else {
        // build for current platform only
        pack(os.platform(), os.arch(), log(os.platform(), os.arch()));
      }
    })
    .catch(err => {
      console.error(err);
    });
}

function pack(plat, arch, cb) {
  // there is no darwin ia32 electron
  if (plat === 'darwin' && arch === 'ia32') return;

  const iconObj = {
    icon: DEFAULT_OPTS.icon + (() => {
      let extension = '.png';
      if (plat === 'darwin') {
        extension = '.icns';
      } else if (plat === 'win32') {
        extension = '.ico';
      }
      return extension;
    })()
  };

  const opts = Object.assign({}, DEFAULT_OPTS, iconObj, {
    platform: plat,
    arch,
    prune: true,
    'app-version': pkg.version || DEFAULT_OPTS.version,
    out: `release/${plat}-${arch}`
  });

  packager(opts, cb);
}


function log(plat, arch) {
  return (err, filepath) => {
    if (err) return console.error(err);
    console.log(`${plat}-${arch} finished!`);
  };
}

});
