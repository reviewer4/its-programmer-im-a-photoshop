import DATA from './Key_data.js';

export default class KeyboardComponent {
  constructor(document, keyboardContainer, textarea) {
    this.document = document;
    this.keyboardContainer = keyboardContainer;
    this.textarea = textarea;
  }

  init() {
    const textarea = this.document.createElement('textarea');
    textarea.classList.add('textarea');
    textarea.setAttribute('autofocus', '');
    const keyboard = this.document.createElement('div');
    keyboard.classList.add('keyboard-container');
    const rows = DATA.reduce((accumulator, currentValue) => {
      const rowNumber = currentValue.row || 0;
      if (!accumulator[rowNumber]) {
        accumulator[rowNumber] = [];
      }
      accumulator[rowNumber].push(currentValue);
      return accumulator;
    }, []);

    rows.forEach((row) => {
      const rowDiv = this.document.createElement('div');
      rowDiv.classList.add('row');
      row.forEach((key) => {
        const button = this.document.createElement('button');
        button.classList.add('key');
        button.setAttribute('data-key-code', key.keyCode);
        button.innerHTML = key.value === 'Win' ? '' : key.value;
        if (key.isSpecial) {
          button.setAttribute('class', key.class);
        }
        button.addEventListener('click', (e) => {
          e.preventDefault();
          if (key.isSpecial) {
            switch (key.keyCode) {
              case 8:
                textarea.value = textarea.value.slice(0, -1);
                break;
              default:
            }
          } else {
            textarea.value += key.value;
          }
        });
        rowDiv.appendChild(button);
      });
      keyboard.appendChild(rowDiv);
    });
    this.document.onclick = () => {
      textarea.focus();
    };
    this.keyboardContainer.appendChild(textarea);
    this.keyboardContainer.appendChild(keyboard);
    return keyboard;
  }
}
