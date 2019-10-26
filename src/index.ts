// import 'core-js'
import '@webcomponents/custom-elements';

try {
  import('./App.svelte')
    .then(module => module.default) // using the default export
    .then(App => {
      alert('asdas')
      new App({
        target: document.body,
        props: {
          name: 'world'
        }
      });
    })
  .catch(e => console.error(e.description));
} catch (e) {
  console.error(e.description)
}
