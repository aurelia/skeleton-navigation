// this file will be used by default by babel@7 once it is released
module.exports = {
  "plugins": [
    "transform-decorators-legacy",
    "transform-class-properties"
  ],
  "presets": [
    [
      "env", {
        "targets": process.env.BABEL_TARGET === 'node' ? {
          "node": process.env.IN_PROTRACTOR ? '6' : 'current'
        } : {
          "browsers": [
            "last 2 versions",
            "not ie <= 11"
          ],
          "uglify": process.env.NODE_ENV === 'production',
        },
        "loose": true,
        "modules": process.env.BABEL_TARGET === 'node' ? 'commonjs' : false,
        "useBuiltIns": true
      }
    ]
  ]
}
