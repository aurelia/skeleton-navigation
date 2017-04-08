const {series, crossEnv, concurrent, rimraf} = require('nps-utils')
const {config: {port : E2E_PORT}} = require('./test/protractor.conf')

module.exports = {
  scripts: {
    default: 'nps webpack',
    test: {
      default: 'jest',
      watch: 'jest --watch',
    },
    e2e: {
      default: concurrent({
        webpack: `webpack-dev-server --inline --port=${E2E_PORT}`,
        protractor: 'nps e2e.whenReady',
      }) + ' --kill-others',
      protractor: {
        install: 'webdriver-manager update --standalone',
        default: series(
          'nps e2e.protractor.install',
          'protractor test/protractor.conf.js'
        ),
        debug: series(
          'nps e2e.protractor.install',
          'protractor test/protractor.conf.js --elementExplorer'
        ),
      },
      whenReady: series(
        `wait-on --timeout 120000 http-get://localhost:${E2E_PORT}/index.html`,
        'nps e2e.protractor'
      ),
    },
    webpack: {
      default: 'nps webpack.server',
      build: {
        before: rimraf('dist'),
        default: 'nps webpack.build.production',
        development: {
          default: series(
            'nps webpack.build.before',
            'webpack --progress -d'
          ),
          extractCss: series(
            'nps webpack.build.before',
            'webpack --progress -d --env.extractCss'
          ),
          serve: series.nps(
            'webpack.build.development',
            'serve'
          ),
        },
        production: {
          inlineCss: series(
            'nps webpack.build.before',
            'webpack --progress -p --env.production'
          ),
          default: series(
            'nps webpack.build.before',
            'webpack --progress -p --env.production --env.extractCss'
          ),
          serve: series.nps(
            'webpack.build.production',
            'serve'
          ),
        }
      },
      server: {
        default: 'webpack-dev-server -d --inline --open --env.server',
        extractCss: 'webpack-dev-server -d --inline --open --env.server --env.extractCss',
        hmr: 'webpack-dev-server --hot -d --inline --open --env.server'
      },
    },
    serve: 'http-server dist --cors',
  },
}
