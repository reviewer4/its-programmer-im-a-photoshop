const DATA = [
  {
    value: 'ё', shift: 'Ё', valueEn: '`', enShift: '~', keyCode: 192, row: 1,
  },
  {
    value: '1', shift: '!', valueEn: '1', enShift: '!', keyCode: 49, row: 1,
  },
  {
    value: '2', shift: '"', valueEn: '2', enShift: '@', keyCode: 50, row: 1,
  },
  {
    value: '3', shift: '№', valueEn: '3', enShift: '#', keyCode: 51, row: 1,
  },
  {
    value: '4', shift: ';', valueEn: '4', enShift: '$', keyCode: 52, row: 1,
  },
  {
    value: '5', shift: '%', valueEn: '5', enShift: '%', keyCode: 53, row: 1,
  },
  {
    value: '6', shift: ':', valueEn: '6', enShift: '^', keyCode: 54, row: 1,
  },
  {
    value: '7', shift: '?', valueEn: '7', enShift: '&', keyCode: 55, row: 1,
  },
  {
    value: '8', shift: '*', valueEn: '8', enShift: '*', keyCode: 56, row: 1,
  },
  {
    value: '9', shift: '(', valueEn: '9', enShift: '(', keyCode: 57, row: 1,
  },
  {
    value: '0', shift: ')', valueEn: '0', enShift: ')', keyCode: 48, row: 1,
  },
  {
    value: '-', shift: '_', valueEn: '-', enShift: '_', keyCode: 189, row: 1,
  },
  {
    value: '=', shift: '+', valueEn: '=', enShift: '+', keyCode: 187, row: 1,
  },
  {
    value: 'Backspace', keyCode: 8, isSpecial: true, row: 1, class: 'backspace',
  },
  {
    value: 'Tab', keyCode: 9, isSpecial: true, row: 2, class: 'tab',
  },
  {
    value: 'й', shift: 'Й', valueEn: 'q', enShift: 'Q', keyCode: 81, row: 2,
  },
  {
    value: 'ц', shift: 'Ц', valueEn: 'w', enShift: 'W', keyCode: 87, row: 2,
  },
  {
    value: 'у', shift: 'У', valueEn: 'e', enShift: 'E', keyCode: 69, row: 2,
  },
  {
    value: 'к', shift: 'К', valueEn: 'r', enShift: 'R', keyCode: 82, row: 2,
  },
  {
    value: 'е', shift: 'Е', valueEn: 't', enShift: 'T', keyCode: 84, row: 2,
  },
  {
    value: 'н', shift: 'Н', valueEn: 'y', enShift: 'Y', keyCode: 89, row: 2,
  },
  {
    value: 'г', shift: 'Г', valueEn: 'u', enShift: 'U', keyCode: 85, row: 2,
  },
  {
    value: 'ш', shift: 'Ш', valueEn: 'i', enShift: 'I', keyCode: 73, row: 2,
  },
  {
    value: 'щ', shift: 'Щ', valueEn: 'o', enShift: 'O', keyCode: 79, row: 2,
  },
  {
    value: 'з', shift: 'З', valueEn: 'p', enShift: 'P', keyCode: 80, row: 2,
  },
  {
    value: 'х', shift: 'Х', valueEn: '[', enShift: '{', keyCode: 219, row: 2,
  },
  {
    value: 'ъ', shift: 'Ъ', valueEn: ']', enShift: '}', keyCode: 221, row: 2,
  },
  {
    value: '\\', shift: '/', valueEn: '\\', enShift: '|', keyCode: 220, row: 2,
  },
  {
    value: 'Del', keyCode: 46, isSpecial: true, row: 2, class: 'del',
  },
  {
    value: 'Capslock', keyCode: 20, isSpecial: true, row: 3, class: 'capslock',
  },
  {
    value: 'ф', shift: 'Ф', valueEn: 'a', enShift: 'A', keyCode: 65, row: 3,
  },
  {
    value: 'ы', shift: 'Ы', valueEn: 's', enShift: 'S', keyCode: 83, row: 3,
  },
  {
    value: 'в', shift: 'В', valueEn: 'd', enShift: 'D', keyCode: 68, row: 3,
  },
  {
    value: 'а', shift: 'А', valueEn: 'f', enShift: 'F', keyCode: 70, row: 3,
  },
  {
    value: 'п', shift: 'П', valueEn: 'g', enShift: 'G', keyCode: 71, row: 3,
  },
  {
    value: 'р', shift: 'Р', valueEn: 'h', enShift: 'H', keyCode: 72, row: 3,
  },
  {
    value: 'о', shift: 'О', valueEn: 'j', enShift: 'J', keyCode: 74, row: 3,
  },
  {
    value: 'л', shift: 'Л', valueEn: 'k', enShift: 'K', keyCode: 75, row: 3,
  },
  {
    value: 'д', shift: 'Д', valueEn: 'l', enShift: 'L', keyCode: 76, row: 3,
  },
  {
    value: 'ж', shift: 'Ж', valueEn: ';', enShift: ':', keyCode: 186, row: 3,
  },
  {
    value: 'э', shift: 'Э', valueEn: '\'', enShift: '"', keyCode: 222, row: 3,
  },
  {
    value: 'Enter', keyCode: 13, isSpecial: true, row: 3, class: 'enter',
  },
  {
    value: 'Shift', keyCode: 16, isSpecial: true, row: 4, class: 'shift',
  },
  {
    value: 'я', shift: 'Я', valueEn: 'z', enShift: 'Z', keyCode: 90, row: 4,
  },
  {
    value: 'ч', shift: 'Ч', valueEn: 'x', enShift: 'X', keyCode: 88, row: 4,
  },
  {
    value: 'с', shift: 'С', valueEn: 'c', enShift: 'C', keyCode: 67, row: 4,
  },
  {
    value: 'м', shift: 'М', valueEn: 'v', enShift: 'V', keyCode: 86, row: 4,
  },
  {
    value: 'и', shift: 'И', valueEn: 'b', enShift: 'B', keyCode: 66, row: 4,
  },
  {
    value: 'т', shift: 'Т', valueEn: 'n', enShift: 'N', keyCode: 78, row: 4,
  },
  {
    value: 'ь', shift: 'Ь', valueEn: 'm', enShift: 'M', keyCode: 77, row: 4,
  },
  {
    value: 'б', shift: 'Б', valueEn: ',', enShift: '<', keyCode: 188, row: 4,
  },
  {
    value: 'ю', shift: 'Ю', valueEn: '.', enShift: '>', keyCode: 190, row: 4,
  },
  {
    value: '.', shift: ',', valueEn: '/', enShift: '?', keyCode: 191, row: 4,
  },
  {
    value: '↑', keyCode: 38, isSpecial: true, row: 4, class: 'key',
  },
  {
    value: 'Shift', keyCode: 16, isSpecial: true, row: 4, class: 'shift-right',
  },
  {
    value: 'Ctrl', keyCode: 17, isSpecial: true, row: 5, class: 'ctrl',
  },
  {
    value: 'Win', keyCode: 91, isSpecial: true, row: 5, class: 'win',
  },
  {
    value: 'Alt', keyCode: 18, isSpecial: true, row: 5, class: 'alt',
  },
  {
    value: 'Space', keyCode: 32, isSpecial: true, row: 5, class: 'space',
  },
  {
    value: 'Alt', keyCode: 18, isSpecial: true, row: 5, class: 'alt',
  },
  {
    value: '←', keyCode: 37, isSpecial: true, row: 5, class: 'key',
  },
  {
    value: '↓', keyCode: 40, isSpecial: true, row: 5, class: 'key',
  },
  {
    value: '→', keyCode: 39, isSpecial: true, row: 5, class: 'key',
  },
  {
    value: 'Ctrl', keyCode: 8, isSpecial: true, row: 5, class: 'ctrl',
  },
];

export default DATA;
