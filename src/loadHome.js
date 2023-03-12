import Img from './restaurant.jpg';

export function loadHome (doc, content) {
    const title = doc.createElement('h1');
    title.textContent = 'Restaurant La Berezina';

    const img = doc.createElement('img');
    img.src = Img;

    const paragraph = doc.createElement('p');
    paragraph.textContent = "Le restaurant La Berezina est un magnifique cadre pour manger des poissons en regardant des poissons. Si vous ressemblez à un thon c'est encore mieux !";
    paragraph.classList.add('main');

    const container = doc.createElement('div');
    container.classList.add('container');

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(paragraph);

    content.appendChild(container);
};