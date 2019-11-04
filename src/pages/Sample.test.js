import path from 'path'
import testHelper from './../../test-helper';

test('component should load', async () => {
  const Sample = await testHelper(path.resolve(__dirname, 'Sample.svelte'))
  new Sample({
    target: document.body
  })
  expect(document.body.innerHTML).toBe('<p>`Sample` page loaded!.</p>');
});