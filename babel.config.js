module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-destructuring",
    "@babel/transform-arrow-functions",
    "@babel/plugin-transform-parameters",
    "@babel/plugin-syntax-dynamic-import",
    "transform-custom-element-classes"
  ],
}
