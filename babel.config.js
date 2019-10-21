module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "forceAllTransforms": true,
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    ["@babel/plugin-transform-arrow-functions", { "spec": true }]
  ]
}
