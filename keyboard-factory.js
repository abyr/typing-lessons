const qwerty = require('./keyboards/qwerty');
const dvorakPro = require('./keyboards/dvorak-pro');

function make(keyboardName) {
  switch (keyboardName) {
    case 'qwerty':
      return qwerty;
    case 'dvorak-pro':
      return dvorakPro;
  }

  throw Error(`Keyboard ${keyboardName} is not supported.`);
}

module.exports = { make };
