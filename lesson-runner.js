const clc = require('cli-color');
const keypress = require('keypress');

const lessonRunner = {
  run: function (lesson, options) {
    beginLesson(lesson)
      .then(function (stats) {
          options.onFinish(stats);
      })
      .catch(function (err) {
        throw new Error(err);
      });
  }
};

var fail = clc.bgRed.white;
var pass = clc.bgGreen.black;
var white = clc.white;
var title = clc.underline;

function beginLesson (lines) {
  return new Promise((resolve, reject) => {
    console.log('\n' + title(lines[0]));

    lines.shift();

    let cursorLine = 0;
    let currentLine = 0;
    let cursorColumn = 0;
    let lineErrors= 0;
    let trace = '';
    let totalErrors = 0;

    const start = (+ new Date());

    // Load the first line
    nextLine();

    function nextLine () {
      lineErrors = 0;
      cursorColumn = 0;
      trace = '';
      currentLine = lines[cursorLine];
      console.log(white('\n' + currentLine));

      if (cursorLine === lines.length-1) {
        process.stdin.pause();
        lessonComplete();
      }
      cursorLine +=1;
    }

    function lessonComplete () {
      var end = (+ new Date());
      var time = end - start;
      var wordCount = lines.join(' ').split(' ').length - 1;
      var msPerWord = time / wordCount;
      var wpm = (60 * 1000 / msPerWord).toFixed(2);

      const stats = {
        time,
        totalErrors,
        wpm,
      };

      resolve(stats);
    }

    // Begin reading keys
    keypress(process.stdin);

    process.stdin.on('keypress', function (ch, key) {
      if (key && key.hasOwnProperty('name')) {

        // Quit on Ctrl+C
        if (key && key.ctrl && key.name == 'c') {
          process.stdin.pause();
        }

        // Ignore keys
        if (key.name === 'return' || key.name === 'tab') {
          return;
        }

        if (key.name === 'backspace') {
          if (cursorColumn > 0) {
            process.stdout.write(clc.move.left(1));
            process.stdout.write(clc.erase.lineRight);
            cursorColumn -= 1;
            if (trace[cursorColumn] === '0') {
              lineErrors-=1;
            }
            trace = trace.substr(0, trace.length-1);
          }

          return;
        }
      }

      if (ch === currentLine[cursorColumn]) {
        process.stdout.write(pass(ch));
        trace += '1';
      } else {
        process.stdout.write(fail(ch));
        lineErrors += 1;
        totalErrors += 1;
        trace += '0';
      }
      cursorColumn += 1;

      if (cursorColumn === currentLine.length && !lineErrors) {
        nextLine();
      }
    });

    if (typeof process.stdin.setRawMode == 'function') {
      process.stdin.setRawMode(true);
    } else {
      tty.setRawMode(true);
    }

    process.stdin.resume();
  });
}

lessonRunner.beginLesson = beginLesson;

module.exports = lessonRunner;
