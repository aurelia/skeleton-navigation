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
          ]
        },
        "loose": true,
        "modules": process.env.babelTarget === 'node' ? 'commonjs' : false,
        "whitelist": [
          "transform-es2015-literals",
          "transform-es2015-template-literals"
        ],
        "useBuiltIns": true
      }
    ]
  ]
}
