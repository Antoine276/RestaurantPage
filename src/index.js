import './style.css';
import './generatedStyle.css';

import { reset } from './reset.js';
import { loadHome } from './loadHome.js';
import { loadMenu } from './loadMenu.js';
import { loadContact } from './loadContact.js';

const content = document.getElementById('content');

const homeBtn    = document.getElementById('home-button');
const menuBtn    = document.getElementById('menu-button');
const contactBtn = document.getElementById('contact-button');

/* // Another way, don't know which is better \\
function resetAndLoad (loadFct) {
    reset(content);
    loadFct(document, content);
}

homeBtn.addEventListener('click', () => resetAndLoad(loadHome));
menuBtn.addEventListener('click', () => resetAndLoad(loadMenu));
contactBtn.addEventListener('click', () => resetAndLoad(loadContact));
*/

function resetAndLoad (loadFct, loadDocument, loadContent) {
    reset(loadContent);
    loadFct(loadDocument, loadContent);
}

homeBtn.addEventListener('click', () => resetAndLoad(loadHome, document, content));
menuBtn.addEventListener('click', () => resetAndLoad(loadMenu, document, content));
contactBtn.addEventListener('click', () => resetAndLoad(loadContact, document, content));

loadHome(document, content);