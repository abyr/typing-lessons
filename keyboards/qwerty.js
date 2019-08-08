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
    '│~ `│! 1│@ 2│# 3│$ 4│% 5│^ 6│   │& 7│* 8│( 9│) 0│_ -│+ =│ Bkspc │',
    '├───┼───┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───────┤',
    '│Tab│ Q │ W │ E │ R │ T │ Y │   │ U │ I │ O │ P │{ [│} ]│ Enter │',
    '├───┴───┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┼───┐   │',
    '│Cap/Esc│ A │ S │ D │ F │ G │   │ H │ J │ K │ L │: ;│" \'│| \─│   │',
    '├───────┼───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┼───┴───┴───┤',
    '│ Shift │ Z │ X │ C │ V │ B │   │ N │ M │< ,│> .│? /│   Shift   │',
    '├───┬───┼───┼───┼───┴───┴───┴───┴───┴───┴───┼───┴───┼───────────┤',
    '│fn │Ctl│Alt│Cmd│         Space Bar         │  Cmd  │    Alt    │',
    '└───┴───┴───┴───┴───────────────────────────┴───────┴───────────┘'
  ];

  var keyboard = layout.join('\n')
    // Finger 1 Left Hand
    .replace(/% 5/,   f1('% 5'))
    .replace(/ T /,    f1(' T '))
    .replace(/ F /,    f1(' F '))
    .replace(/ V /,    f1(' K '))
    // Finger 1 Right Hand
    .replace(/\* 8/,   f1('* 8'))
    .replace(/ I /,    f1(' I '))
    .replace(/ J /,    f1(' J '))
    .replace(/ M /,    f1(' M '))
  //   // Finger 0 Left Hand
    .replace(/\^ 6/,   f0('^ 6'))
    .replace(/ Y /,    f0(' Y '))
    .replace(/ G /,    f0(' G '))
    .replace(/ B /,    f0(' B '))
  //   // Finger 0 Right Hand
    .replace(/& 7/,   f0('& 7'))
    .replace(/ U /,    f0(' U '))
    .replace(/ H /,    f0(' H '))
    .replace(/ N /,    f0(' N '))
    // Finger 2 Left Hand
    .replace(/\$ 4/,   f2('$ 4'))
    .replace(/ R /,    f2(' R '))
    .replace(/ D /,    f2(' D '))
    .replace(/ C /,    f2(' C '))
    // Finger 2 Right Hand
    .replace(/\( 9/,   f2('( 9'))
    .replace(/ O /,    f2(' O '))
    .replace(/ K /,    f2(' K '))
    .replace(/< ,/,    f2('< ,'))
    // Finger 3 Left Hand
    .replace(/# 3/,   f3('# 3'))
    .replace(/ E /,  f3(' E '))
    .replace(/ S /,    f3(' S '))
    .replace(/ X /,    f3(' X '))
    .replace(/Cmd/,  f3('Cmd'))
    // Finger 3 Right Hand
    .replace(/\) 0/,   f3('} 6'))
    .replace(/ P /,    f3(' P '))
    .replace(/ L /,    f3(' L '))
    .replace(/> ./,    f3('> .'))
    .replace(/ Cmd /,    f3(' Cmd '))
    // Finger 4 Left Hand
    .replace(/@ 2/,   f4('@ 2'))
    .replace(/ W /,   f4(' W '))
    .replace(/ A /,    f4(' A '))
    .replace(/ Z /,    f4(' Z '))
    .replace(/Alt/,    f4('Alt'))
  //   // Finger 4 Right Hand
    .replace(/_ -/,   f4('_ -'))
    .replace(/\{ \[/,  f4('{ ['))
    .replace(/: ;/,    f4(': ;'))
    .replace(/\? \//,    f4('? /'))
  //   // Finger 5 Left Hand
    .replace(/! 1/,     f5('! 1'))
    .replace(/ Q /,     f5(' Q '))
    .replace(/Cap\/Esc/,  f5('Cap\/Esc'))
    .replace(/ Shift /,   f5(' Shift '))
  //   // Finger 5 Right Hand
    .replace(/\+ =/,      f5('+ ='))
    .replace(/\} \]/,     f5('} ]'))
    .replace(/\|\s\\/,     f5("| \\"))
    .replace(/" '/,       f5('" \''))
    .replace(/  Shift  /, f5('  Shift  '))
    .replace(/   Alt   /, f5('   Alt   '))
    .replace(/Ctl/,       f5('Crl'))
    .replace(/Space Bar/, tb('Space Bar'));

  console.log(keyboard);
};

module.exports = { draw };
