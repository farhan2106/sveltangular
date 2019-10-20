import App from './App.svelte';

import('./App.svelte')
  .then(module => module.default) // using the default export
  .then(x => {
    new App({
      target: document.body,
      props: {
        name: 'world'
      }
    });
  })
  .catch(e => console.error(e));