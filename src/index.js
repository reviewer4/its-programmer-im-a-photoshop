/* global document */

import './scss/index.scss';
import Header from './js/Header.js';
import Footer from './js/Footer.js';
import Main from './js/Main_block.js';

const { body } = document;

const header = new Header(document).create();
const main = new Main(document).create();
const footer = new Footer(document).create();
body.append(header, main, footer);
