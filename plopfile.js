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
      path: 'src/{{name}}.js',
      templateFile: '_templates/controller.hbs'
    }]
  });
};