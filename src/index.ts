// needed for ie 11
import '@webcomponents/custom-elements'; 

// app stuff
import './assets/styles/main.sass';
import App from './App.svelte'

new App({
  target: document.body,
  props: {
    name: 'User'
  }
});
