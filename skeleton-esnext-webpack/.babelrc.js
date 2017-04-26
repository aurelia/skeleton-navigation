module.exports = {
  "plugins": [
    "transform-decorators",
    "transform-class-properties"
  ],
  "presets": [
    [
      "env", {
        "targets": 
        {
          "browsers": [
            "last 2 versions",
            "not ie <= 11"
          ],
          "uglify": process.env.NODE_ENV === 'production',
        },
        "loose": true,
        "modules": process.env.BABEL_TARGET === 'node' ? 'commonjs' : false,
        "useBuiltIns": 'usage'
      }
    ]
  ]
}
