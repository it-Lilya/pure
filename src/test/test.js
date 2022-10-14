import { dataPersons } from '../total';

test('dataPersons sort', () => {
  const result = dataPersons();
  const expected = 'healthy';
  expect(result).toBe(expected);
});
