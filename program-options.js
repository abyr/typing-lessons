const options = {};

const programArgs = process.argv.slice(2);

programArgs.forEach(function (opt) {
  let [key, value] = opt.split('=');

  options[key] = value || String(1);
});

module.exports = Object.keys(options).length ? options : null;
