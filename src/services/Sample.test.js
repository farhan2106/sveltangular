import Sample from './Sample';

test('should be able to add', () => {
  const serviceInstance = Sample()
  expect(serviceInstance.add(1, 1)).toBe(2);
});