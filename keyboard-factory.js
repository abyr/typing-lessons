const qwerty = require('./keyboards/qwerty');
const russianQwerty = require('./keyboards/russian-qwerty');
const dvorakPro = require('./keyboards/dvorak-pro');

function make(keyboardName) {
  switch (keyboardName) {
    case 'en':
    case 'qwerty':
      return qwerty;
    case 'ru':
    case 'russian-qwerty':
        return russianQwerty;
    case 'dvorak-pro':
      return dvorakPro;
  }

  throw Error(`Keyboard ${keyboardName} is not supported.`);
}

module.exports = { make };
