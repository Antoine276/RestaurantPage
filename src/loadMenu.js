import Img from './fishMenu.png';

export function loadMenu (doc, content) {
    const title = doc.createElement('h1');
    title.textContent = 'Menu';

    const img = doc.createElement('img');
    img.src = Img;

    const container = doc.createElement('div');
    container.classList.add('container');

    container.appendChild(title);
    container.appendChild(img);

    content.appendChild(container);
};