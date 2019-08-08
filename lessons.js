const fs = require('fs');
const clc = require('cli-color');
const lessonsPath = '/lessons';
const FNAME_ID_REGEXP = /lesson\-([0-9][0-9][a-z]?).txt/;
let keyboardLayout;

function setKeyboardLayout(name) {
  keyboardLayout = name;
}

function showList () {
  var path = __dirname + lessonsPath + '/' + keyboardLayout;
  var files = fs.readdirSync(path);

  var promises = [];
  files.forEach(function (file, n) {
    var filename = path + '/' + file;
    promises.push(loadLesson(filename));
  });
  Promise.all(promises).then(values => {
    var titles = values.map(lines => {
      var title = lines[0];
      var id = title.split('Lesson ')[1].split(':')[0];
      return title.replace(id, clc.green(id));
    });
    titles.sort();
    titles.forEach(title => { console.log(title);});
  });
}

function loadLessonById(lessonId) {
  const  lessonFile = __dirname + lessonsPath + '/' + keyboardLayout + '/lesson-' + lessonId + '.txt';

  return loadLesson(lessonFile);
}

function loadLesson (filename) {
  return new Promise (function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(data.split('\n'));
    });
  });
}

function getNextLessonId(progress) {
    return new Promise((resolve, reject) => {
        progress.load((err, results) => {
          if (err) {
            reject(err);
            return;
          }

          const stats = results[keyboardLayout];

          if (!stats) {
            resolve('01');
            return;
          }

          const tried = Object.keys(stats);

          const passed = tried.filter(id => {
            const lastResult = stats[id];

            return isPassed(lastResult);
          });

          var path = __dirname + lessonsPath + '/' + keyboardLayout;
          var allFiles = fs.readdirSync(path).map(x => x.match(FNAME_ID_REGEXP)[1]);

          const nextId = allFiles.find(f => passed.indexOf(f) < 0);

          resolve(nextId);
        });
    });
}

function isPassed (stats) {
  return stats && stats.totalErrors < 3;
}

module.exports = { setKeyboardLayout, showList, loadLesson, loadLessonById, getNextLessonId };
