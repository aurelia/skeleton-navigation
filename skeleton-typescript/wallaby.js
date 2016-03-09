module.exports = function (wallaby) {

  return {
    files: [

      {pattern: 'jspm_packages/system.js', instrument: false},
      {pattern: 'config.js', instrument: false},

      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'test/unit/setup.ts', load: false}
    ],

    tests: [
      {pattern: 'test/unit/**/*.spec.ts', load: false}
    ],


    middleware: (app, express) => {
      app.use('/jspm_packages', express.static(require('path').join(__dirname, 'jspm_packages')));
    },

    bootstrap: function (wallaby) {
      wallaby.delayStart();

      System.config({
        paths: {
          "*": "*"
        }
      });

      var promises = [];
      for (var i = 0, len = wallaby.tests.length; i < len; i++) {
        promises.push(System['import'](wallaby.tests[i].replace(/\.js$/, '')));
      }

      System.import('test/unit/setup')
        .then(function () {
          return Promise.all(promises);
        })
        .then(function () {
          wallaby.start();
        }).catch(function (e) {setTimeout(function () { throw e; }, 0); });
    },

    debug: false
  };
};
