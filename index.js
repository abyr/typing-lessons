const keyboardFactory = require('./keyboard-factory');
const lessons = require('./lessons');
const progress = require('./progress');
const lessonRunner = require('./lesson-runner');
const textGenerator = require('./text-generator');
const programOptions = require('./program-options');

function run() {
  const app = new App(programOptions);
}

function App(options) {
  this.lang = 'en';

  if (options) {
    this.options = Object.assign({}, options);
  } else {
    return this.showHelp();
  }

  if (this.options.keyboard === 'en') {
    this.options.keyboard = 'qwerty';
  }

  if (this.options.help) {
    return this.showHelp();
  }

  if (this.options.lesson) {
    this.lessonId = this.options.lesson;
  }

  this.validate();

  if (this.errors.length) {
    console.error(this.errors.join(';'));
    return;
  }

  this.init();
  this.run();
}

App.prototype.validate = function () {
  this.errors = [];

  if (this.options.keyboard === '1') {
    this.errors.push('Keyboard is not specified. Available keyboards: en(qwerty), dvorak-pro, ru');
  }

  if (this.options.save && !this.options.save.match(/.json/)) {
    this.errors.push('Save file is not JSON file.');
  }
};

App.prototype.init = function () {
  this.progressFile = this.options.save || 'progress.json';

  if (this.options.keyboard === 'ru') {
    this.lang = 'ru';
  }

  progress.setProgressFile(this.progressFile);

  progress.setKeyboardLayout(this.options.keyboard);

  lessons.setKeyboardLayout(this.options.keyboard);
};

App.prototype.run = function () {
  if (this.options.keyboard && this.options.print) {
    this.showKeyboard();
  }

  if (this.options.random) {
    this.startRandomWords();
  }

  if (this.options.list) {
    this.showLessonsList();
  }

  if (this.options.progress) {
    this.showProgress();
  }

  if (this.options.next) {
    this.startNextLesson();

  } else if (this.lessonId) {
    this.startLesson();
  }
};

App.prototype.showSummary = function () {
  if (this.lessonId) {
    this.showLessonSummary();
  } else {
    this.showOverallSummary();
  }
};

App.prototype.showLessonSummary = function () { };

App.prototype.showOverallSummary = function () { };

App.prototype.showProgress = function () {
  progress.show();
};

App.prototype.startRandomWords = function (count = 5) {
  const words = textGenerator.getRandomWords(count, this.lang);
  let lines = ['Lesson 100: ' + count];

  lines.push(words);
  lines.push('');

  lessonRunner.run(lines, {
    onFinish: results => {
      progress.addLessonResults('random', results);
    }
  });
};

App.prototype.startNextLesson = function () {
  lessons.getNextLessonId(progress)
    .then(lessonId => {
      this.lessonId = lessonId;
      this.startLesson();
    })
    .catch(error => {
      console.log('Could not load lesson!');
      console.log(error);
    });
};

App.prototype.startLesson = function () {
  lessons.loadLessonById(this.lessonId)
    .then(lesson => {
      lessonRunner.run(lesson, {
        onFinish: results => {
          progress.addLessonResults(this.lessonId, results);
        }
      });
    })
    .catch(function (error) {
      console.log('Could not load lesson!');
      console.log(error);
    });
};

App.prototype.showHelp = function () {
  console.log(`Usage: node index keyboard=<layout> [print] [lesson=<num>] [next] [list] [progress] [save=<path>] random wpm=<wpm>
Options:
keyboard: <layout name>
  Apply keyboard layout. Available layouts: en (qwerty), dvorak-pro, ru
print
  Print keyboard layout on a screen
lesson: <number>
  Start lesson by it's number
next
  Start next lesson according to the progress. Requires keyboard layout specified
save: <path>
  Specify the file with progress results for all keyboard layouts
progress
  Show progress. Requires keyboard layout specified
list
  Show lessons list. Requires keyboard layout specified
random
  Type random words
  `);
};

App.prototype.showKeyboard = function () {
  const keyboard = keyboardFactory.make(this.options.keyboard);

  keyboard.draw();
};

App.prototype.showLessonsList = function () {
  lessons.showList(this.options.keyboard);
};

run();
