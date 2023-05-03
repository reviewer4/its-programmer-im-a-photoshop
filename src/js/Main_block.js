import KeyboardComponent from './components/Keyboard.js';

export default class Main {
  constructor(document) {
    this.document = document;
  }

  create() {
    const main = this.document.createElement('main');
    main.classList.add('main');

    const keyboard = new KeyboardComponent(this.document, main);
    keyboard.init();
    return main;
  }
}
