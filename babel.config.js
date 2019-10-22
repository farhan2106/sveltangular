module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "ie": "11"
        },
        "forceAllTransforms": true,
        "useBuiltIns": "usage",
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
