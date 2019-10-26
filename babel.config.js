module.exports = {
  "exclude": [ 'node_modules/@babel/**', 'node_modules/core-js/**' ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "11"
        },
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    "@babel/transform-async-to-generator",
    "@babel/transform-arrow-functions",
    "@babel/transform-modules-commonjs"
  ],
}
