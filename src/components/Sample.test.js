import Sample from './Sample.svelte';

test('component should load', () => {
  new Sample({
    target: document.body
  })
  expect(document.body.innerHTML).toBe('<p>`Sample` component loaded!.</p>');
});
