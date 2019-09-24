# Typng lessons

Keyboard layouts supported:
- [X] dvorak programmers (https://github.com/F1LT3R/dvorak-programmers-tutorial)
- [X] qwerty
- [ ] йцукен (russian-qwerty)

# Usage

```
node index keyboard=<layout> [print] [lesson=<num>] [next] [list] [progress] [save=<path>] random
```

# Progress

Progress is calculated as a summary of accuracy ratio and typing speed.

Accuracy ratio is based on misprints made during a lesson.

Typing speed as based on words per minute according to average typing speed.

Average typing speed is taken as 44 words per minute.

# Options

`keyboard: <layout-name>`

Apply keyboard layout. Available layouts: qwerty, dvorak-pro

`print`

Print keyboard layout on a screen

`lesson: <number>`

Start lesson by it's number

`next`

Start next lesson according to the progress. Requires keyboard layout specified

`save: <path>`

Specify the file with progress results for all keyboard layouts

`progress`

Show progress. Requires keyboard layout specified

`list`

Show lessons list. Requires keyboard layout specified

`random`

Type random words

# Links

https://github.com/F1LT3R/dvorak-programmers-tutorial
