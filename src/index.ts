// babel-preset
import 'core-js';
// import 'regenerator-runtime/runtime';

// needed for ie 11
import '@webcomponents/custom-elements'; 

// app stuff
import './assets/styles/main.sass';
import App from './App.svelte'

// import('./App.svelte')
//   .then(module => module.default) // using the default export
//   .then(App => {
//     new App({
//       target: document.body,
//       props: {
//         name: 'world'
//       }
//     });
//   })
//   .catch(e => console.error(e.description));

new App({
  target: document.body,
  props: {
    name: 'world'
  }
});
