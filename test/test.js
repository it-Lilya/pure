// eslint-disable-next-line no-unused-vars
import { dataPersons } from '../src/total';

test('dataPersons sort', () => {
  // eslint-disable-next-line no-unused-vars
  const data = { name: 'Маг', health: 90 };

  // eslint-disable-next-line no-unused-vars
  const result = dataPersons(data);
  const expected = 'healthy';
  expect(result).toBe(expected);
});
