module.exports = (api) => {
  const isTest = api.env('test');
  if (isTest) {
    return {
      "presets": [
        [
          "@babel/preset-env",
          {
            targets: {
              node: 'current',
            },
          },
        ]
      ],
      "plugins": [
        "@babel/plugin-transform-destructuring",
        "@babel/transform-arrow-functions",
        "@babel/plugin-transform-parameters",
        "transform-custom-element-classes",
        "@babel/plugin-syntax-dynamic-import"
      ],
      "env": {
        "test": {
          "plugins": [
            "babel-plugin-dynamic-import-node",
          ]
        }
      }
    }
  }

  return {
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
      "transform-custom-element-classes",
    ]
  }
}
