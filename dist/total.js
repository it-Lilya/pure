Object.defineProperty(exports, '__esModule', {
  value: true,
});
// eslint-disable-next-line no-use-before-define
exports.dataPersons = dataPersons;

// eslint-disable-next-line import/prefer-default-export
function dataPersons(_data) {
  let result = 0;

  if (_data.health > 50) {
    // eslint-disable-next-line no-const-assign, no-unused-vars
    result = 'healthy';
  }

  if (_data.health >= 15 && _data.health < 50) {
    // eslint-disable-next-line no-const-assign
    result = 'wounded';
  }

  if (_data.healht < 15) {
    // eslint-disable-next-line no-const-assign, no-unused-vars
    result = 'critical';
  }

  return result;
}
