export default class Header {
  constructor(document) {
    this.document = document;
  }

  create() {
    const title = this.document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Virtual-keyboard';

    const header = this.document.createElement('header');
    header.classList.add('header');
    header.appendChild(title);

    return header;
  }
}
