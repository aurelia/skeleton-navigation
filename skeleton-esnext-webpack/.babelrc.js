module.exports = {
  "plugins": [
    "transform-decorators-legacy",
    "transform-class-properties"
  ],
  "presets": [
    [
      "env", {
        "targets": process.env.babelTarget === 'node' ? {
          "node": ["current"]
        } : {
          "browsers": [
            "last 2 versions",
            "not ie <= 11"
          ],
          "uglify": process.env.production,
        },
        "loose": true,
        "modules": process.env.babelTarget === 'node' ? 'commonjs' : false,
        "useBuiltIns": true
      }
    ]
  ]
}
