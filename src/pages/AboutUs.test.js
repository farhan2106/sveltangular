import AboutUs from './AboutUs.svelte';

test('adds 1 + 2 to equal 3', () => {
  new AboutUs({
    target: document.body
  })
  expect(document.body.innerHTML).toBe('<h1>About Us</h1>');
});