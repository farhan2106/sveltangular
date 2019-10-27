module.exports = {
  // "exclude": [ 'node_modules/**' ],
  // "include": [ 'node_modules/svelte/**' ],
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
    "@babel/transform-async-to-generator",
    "@babel/transform-arrow-functions",
    "@babel/transform-modules-commonjs",
    "@babel/plugin-transform-parameters"
  ],
}
