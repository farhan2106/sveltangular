import Sample from './Sample.compiled.svelte'

test('component should load', () => {
  new Sample({
    target: document.body
  })
  expect(document.body.innerHTML).toBe('<p>`Sample` page loaded!.</p>');
});