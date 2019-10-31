import Navbar from './Navbar.svelte';

test('component should load', () => {
  new Navbar({
    target: document.body
  })
  expect(document.body.innerHTML).toBe('<p>`Navbar` component loaded!.</p>');
});
