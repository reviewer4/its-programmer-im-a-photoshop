export default class Footer {
  constructor(document) {
    this.document = document;
  }

  create() {
    const p = this.document.createElement('p');
    p.classList.add('copyright');

    const span = this.document.createElement('span');
    span.textContent = '© 2023';

    const link = this.document.createElement('a');
    link.classList.add('copyright-link');
    link.href = 'https://github.com/anthony-th';
    link.textContent = 'Anthony-th.';

    const textNode = this.document.createTextNode('All rights reserved.');

    p.appendChild(span);
    p.appendChild(link);
    p.appendChild(textNode);

    const footer = this.document.createElement('footer');
    footer.classList.add('footer');
    footer.appendChild(p);

    return footer;
  }
}
