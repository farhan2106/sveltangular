// babel-preset
import 'core-js/es';
import 'regenerator-runtime/runtime';

// app stuff
import './assets/styles/main.sass';
import App from './App.svelte'

new App({
  target: document.body,
  props: {
    name: 'world'
  }
});
