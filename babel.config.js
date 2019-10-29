module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3 /* Somehow it doesn't use browserlist query */
      }
    ]
  ],
  "plugins": [
    "@babel/transform-async-to-generator",
    "@babel/transform-arrow-functions",
    "@babel/transform-modules-commonjs",
    "@babel/plugin-transform-parameters"
  ],
}
