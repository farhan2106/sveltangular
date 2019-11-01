module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3 /* Somehow it doesn't use browserlist query */
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-destructuring",
    "@babel/transform-async-to-generator",
    "@babel/transform-arrow-functions",
    "@babel/plugin-transform-parameters",
    "transform-custom-element-classes",
    // "transform-es2015-classes"
  ],
}
