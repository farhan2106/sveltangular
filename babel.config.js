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
    "transform-custom-element-classes"
  ],
}
