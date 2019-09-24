const clc = require('cli-color');

function draw () {

  var f0 = clc;
  var f1 = clc.red;
  var f2 = clc.yellow;
  var f3 = clc.green;
  var f4 = clc.cyan;
  var f5 = clc.magenta;
  var tb = clc;

  var layout = [
    // 'MacBook Pro Split Key Layout',
    '┌───┬───┬───┬───┬───┬───┬───┐   ┌───┬───┬───┬───┬───┬───┬───────┐',
    '│~ `│! 1│" 2│№ 3│% 4│: 5│, 6│   │. 7│; 8│( 9│) 0│_ -│+ =│ Bkspc │',
    '├───┼───┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───────┤',
    '│Tab│ Й │ Ц │ У │ К │ Е │ Н │   │ Г │ Ш │ Щ │ З │ Х │ Ъ │ Enter │',
    '├───┴───┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───┐   │',
    '│Cap/Esc│ Ф │ Ы │ В │ А │ П │   │ Р │ О │ Л │ Д │ Ж │ Э │ Ё │   │',
    '├───────┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┴───┴───┤',
    '│ Shift │ Я │ Ч │ С │ М │ И │   │ Т │ Ь │ Б │ Ю │? /│   Shift   │',
    '├───┬───┼───┼───┼───┴───┴───┴───┴───┴───┴───┼───┴───┼───────────┤',
    '│fn │Ctl│Alt│Cmd│         Space Bar         │  Cmd  │    Alt    │',
    '└───┴───┴───┴───┴───────────────────────────┴───────┴───────────┘'
  ];

  var keyboard = layout.join('\n')
    // Finger 1 Left Hand
    .replace(/: 5/,   f1(': 5'))
    .replace(/ Е /,    f1(' Е '))
    .replace(/ А /,    f1(' А '))
    .replace(/ М /,    f1(' М '))
    // Finger 1 Right Hand
    .replace(/; 8/,   f1('; 8'))
    .replace(/ Ш /,    f1(' Ш '))
    .replace(/ О /,    f1(' О '))
    .replace(/ Ь /,    f1(' Ь '))
  //   // Finger 0 Left Hand
    .replace(/, 6/,   f0(', 6'))
    .replace(/ Н /,    f0(' Н '))
    .replace(/ П /,    f0(' П '))
    .replace(/ И /,    f0(' И '))
  //   // Finger 0 Right Hand
    .replace(/\. 7/,   f0('. 7'))
    .replace(/ Г /,    f0(' Г '))
    .replace(/ Р /,    f0(' Р '))
    .replace(/ Т /,    f0(' Т '))
    // Finger 2 Left Hand
    .replace(/% 4/,   f2('% 4'))
    .replace(/ К /,    f2(' К '))
    .replace(/ В /,    f2(' В '))
    .replace(/ С /,    f2(' С '))
    // Finger 2 Right Hand
    .replace(/\( 9/,   f2('( 9'))
    .replace(/ Щ /,    f2(' Щ '))
    .replace(/ Л /,    f2(' Л '))
    .replace(/ Б /,    f2(' Б '))
    // Finger 3 Left Hand
    .replace(/№ 3/,   f3('№ 3'))
    .replace(/ У /,    f3(' У '))
    .replace(/ Ы /,    f3(' Ы '))
    .replace(/ Ч /,    f3(' Ч '))
    .replace(/Cmd/,  f3('Cmd'))
    // Finger 3 Right Hand
    .replace(/\) 0/,   f3(') 0'))
    .replace(/ З /,    f3(' З '))
    .replace(/ Д /,    f3(' Д '))
    .replace(/ Ю /,    f3(' Ю '))
    .replace(/ Cmd /,    f3(' Cmd '))
    // Finger 4 Left Hand
    .replace(/" 2/,   f4('" 2'))
    .replace(/ Ц /,   f4(' Ц '))
    .replace(/ Ф /,    f4(' Ф '))
    .replace(/ Я /,    f4(' Я '))
    .replace(/Alt/,    f4('Alt'))
  //   // Finger 4 Right Hand
    .replace(/_ -/,   f4('_ -'))
    .replace(/ Х /,  f4(' Х '))
    .replace(/ Ж /,    f4(' Ж '))
    .replace(/\? \//,    f4('? /'))
  //   // Finger 5 Left Hand
    .replace(/! 1/,     f5('! 1'))
    .replace(/ Й /,     f5(' Й '))
    .replace(/Cap\/Esc/,  f5('Cap\/Esc'))
    .replace(/ Shift /,   f5(' Shift '))
  //   // Finger 5 Right Hand
    .replace(/\+ =/,      f5('+ ='))
    .replace(/ Ъ /,     f5(' Ъ '))
    .replace(/ Э /,     f5(" Э "))
    .replace(/ Ё /,       f5(' Ё '))
    .replace(/  Shift  /, f5('  Shift  '))
    .replace(/   Alt   /, f5('   Alt   '))
    .replace(/Ctl/,       f5('Crl'))
    .replace(/Space Bar/, tb('Space Bar'));

  console.log(keyboard);
};

module.exports = { draw };
