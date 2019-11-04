module.exports = function (plop) {
  plop.setGenerator('components', {
    description: 'invidual ui component',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'component name please'
    }],
    actions: [{
      type: 'add',
      path: 'src/components/{{name}}.svelte',
      templateFile: '_templates/components.hbs'
    }, {
      type: 'add',
      path: 'src/components/{{name}}.test.js',
      templateFile: '_templates/components_test.hbs'
    }]
  });

  plop.setGenerator('pages', {
    description: 'encapsulating many ui components for display in a route',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'page name please'
    }],
    actions: [{
      type: 'add',
      path: 'src/pages/{{name}}.svelte',
      templateFile: '_templates/pages.hbs'
    }, {
      type: 'add',
      path: 'src/pages/{{name}}.test.js',
      templateFile: '_templates/pages_test.hbs'
    }]
  });

  plop.setGenerator('services', {
    description: 'service is a broad category encompassing any value, function, or feature that an app needs.',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'service name please'
    }],
    actions: [{
      type: 'add',
      path: 'src/services/{{name}}.ts',
      templateFile: '_templates/services.hbs'
    }, {
      type: 'add',
      path: 'src/services/{{name}}.test.js',
      templateFile: '_templates/services_test.hbs'
    }]
  });
};