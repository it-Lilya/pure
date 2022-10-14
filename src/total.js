export function dataPersons() {
  const data = {
    name: 'Маг',
    health: 90,
  };
  let result = 0;
  if (data.health >= 50) {
    result = 'healthy';
  }
  if (data.health >= 15 && data.health < 50) {
    result = 'wounded';
  }
  if (data.health < 15) {
    result = 'critical';
  }
  return result;
}
