const fs = require('fs');
const clc = require('cli-color');
const level = require('./level');

const RESULTS_FILE_NAME = 'progress.json';

let filePath = RESULTS_FILE_NAME;

let keyboardLayout;

function setKeyboardLayout(name) {
  keyboardLayout = name;
}

function show() {
  load((err, results) => {
    if (err) {
      console.error(err);
    } else {
      Object.entries(results[keyboardLayout] || []).sort().forEach(item => {
        const lvl = level.getLevel(item[1]);

        console.log(item[0],
                    lvl.ratio > 0.8 ? clc.green(lvl.title) :
                      lvl.ratio < 0.4 ? clc.red(lvl.title) :
                        lvl.title);
      });
    }

  });
}

function setProgressFile(path) {
  filePath = path;
}

function getProgressFile() {
  return filePath;
}

function load(done) {
  const progressFile = getProgressFile();

  fs.readFile(progressFile, "utf8", (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return  done(null, {});
      } else {
        return done(err);
      }
    }

    data = data.replace(/(\r\n|\n|\r)/gm, "");

    if (!data) {
        done(null, {});
        return;
    }

    try {
      const results = JSON.parse(data);

      done(null, results || {});
    } catch (err) {
      done(err);
    }
  });
}

function addLessonResults (lessonId, newResults) {
    load((err, results) => {
      if (err) {
        console.error(err);
        return;
      }
      const stats = results;

      if (!stats[keyboardLayout]) {
        stats[keyboardLayout] = {};
      }

      const lastResult = stats[keyboardLayout][lessonId] || {
        time: 0,
        totalErrors: 0,
        wpm: 0
      };

      const errorsRegression = newResults.totalErrors > lastResult.totalErrors;
      const speedRegression = newResults.wpm < lastResult.wpm;

      const current_stats = newResults;

      const current_level = level.getLevel(current_stats);

      showLessonResult(current_level, current_stats, lastResult);

      stats[keyboardLayout][lessonId] = current_stats;

      save(stats, (err) => {
        err && console.error(err);
      });
    });
}

function showLessonResult (current_level, current_stats, lastResult) {

    var fail = clc.bgRed.white;
    var pass = clc.bgGreen.black;
    var complete = clc.green.underline;
    var white = clc.white;
    var green = clc.green;
    var red = clc.red;
    var title = clc.underline;

  const errorsRegression = current_stats.totalErrors > lastResult.totalErrors;
  const speedRegression = current_stats.wpm < lastResult.wpm;

  console.log('Level:', current_level.title);

  console.log(white('Total errors:', current_stats.totalErrors));
  console.log('Last result:', lastResult.totalErrors, errorsRegression ? red('Regression') : green('Success'));

  console.log(white('Words Per Minute: ' + current_stats.wpm));
  console.log('Last result:', lastResult.wpm, speedRegression ? red('Regression') : green('Success'));
}

function save(results, done) {
  const progressFile = getProgressFile();

  const json = JSON.stringify(results);

  fs.writeFile(progressFile, json, (err) => {
    if (err) return done(err);

    console.log('Progress saved to ', progressFile);
    done();
  });
}

module.exports = { setKeyboardLayout, save, load, setProgressFile, getProgressFile, show, addLessonResults };
