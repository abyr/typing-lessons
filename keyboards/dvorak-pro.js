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
    '│~ $│% &│[ 7│{ 5│} 3│( 1│= 9│   │* 0│) 2│+ 4│] 6│! 8│` #│ Bkspc │',
    '├───┼───┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───────┤',
    '│Tab│; :│, <│. >│ P │ Y │ F │   │ G │ C │ R │ L │/ ?│@ ^│  \\ |  │',
    '├───┴───┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───────┤',
    '│Cap/Esc│ A │ O │ E │ U │ I │   │ D │ H │ T │ N │ S │- _│ Enter │',
    '├───────┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┴───────┤',
    '│ Shift │\' "│ Q │ J │ K │ X │   │ B │ M │ W │ V │ Z │   Shift   │',
    '├───┬───┼───┼───┼───┴───┴───┴───┴───┴───┴───┼───┴───┼───────────┤',
    '│fn │Ctl│Alt│Cmd│         Space Bar         │  Cmd  │    Alt    │',
    '└───┴───┴───┴───┴───────────────────────────┴───────┴───────────┘'
  ];

  var keyboard = layout.join('\n')
    // Finger 1 Left Hand
    .replace(/\( 1/,   f1('( 1'))
    .replace(/ Y /,    f1(' Y '))
    .replace(/ U /,    f1(' U '))
    .replace(/ K /,    f1(' K '))
    // Finger 1 Right Hand
    .replace(/\) 2/,   f1(') 2'))
    .replace(/ C /,    f1(' C '))
    .replace(/ H /,    f1(' H '))
    .replace(/ M /,    f1(' M '))
    // Finger 0 Left Hand
    .replace(/\= 9/,   f0('= 9'))
    .replace(/ F /,    f0(' F '))
    .replace(/ I /,    f0(' I '))
    .replace(/ X /,    f0(' X '))
    // Finger 0 Right Hand
    .replace(/\* 0/,   f0('* 0'))
    .replace(/ G /,    f0(' G '))
    .replace(/ D /,    f0(' D '))
    .replace(/ B /,    f0(' B '))
    // Finger 2 Left Hand
    .replace(/\} 3/,   f2('} 3'))
    .replace(/ P /,    f2(' P '))
    .replace(/ E /,    f2(' E '))
    .replace(/ J /,    f2(' J '))
    // Finger 2 Right Hand
    .replace(/\+ 4/,   f2('+ 4'))
    .replace(/ R /,    f2(' R '))
    .replace(/ T /,    f2(' T '))
    .replace(/ W /,    f2(' W '))
    // Finger 3 Left Hand
    .replace(/\{ 5/,   f3('{ 5'))
    .replace(/\. \>/,  f3('. >'))
    .replace(/ O /,    f3(' O '))
    .replace(/ Q /,    f3(' Q '))
    .replace(/ Cmd /,  f3(' Cmd '))
    // Finger 3 Right Hand
    .replace(/\] 6/,   f3('} 6'))
    .replace(/ L /,    f3(' L '))
    .replace(/ N /,    f3(' N '))
    .replace(/ V /,    f3(' V '))
    .replace(/Cmd/,    f3('Cmd'))
    // Finger 4 Left Hand
    .replace(/\[ 7/,   f4('[ 7'))
    .replace(/\, </,   f4(', <'))
    .replace(/ A /,    f4(' A '))
    .replace(/' "/,    f4('\' "'))
    .replace(/Alt/,    f4('Alt'))
    // Finger 4 Right Hand
    .replace(/\! 8/,   f4('! 8'))
    .replace(/\/ \?/,  f4('/ ?'))
    .replace(/ S /,    f4(' S '))
    .replace(/ Z /,    f4(' Z '))
    // Finger 5 Left Hand
    .replace(/\% \&/,     f5('% &'))
    .replace(/\; \:/,     f5('\\ :'))
    .replace(/Cap\/Esc/,  f5('Cap\/Esc'))
    .replace(/ Shift /,   f5(' Shift '))
    // Finger 5 Right Hand
    .replace(/\` #/,      f5('` #'))
    .replace(/\@ \^/,     f5('@ ^'))
    .replace(/- _/,       f5('- _'))
    .replace(/  Shift  /, f5('  Shift  '))
    .replace(/   Alt   /, f5('   Alt   '))
    .replace(/Ctl/,       f5('Crl'))
    .replace(/Space Bar/, tb('Space Bar'));

  console.log(keyboard);
};

module.exports = { draw };
