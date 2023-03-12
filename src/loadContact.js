export function loadContact (doc, content) {
    const title = doc.createElement('h1');
    title.textContent = 'Contact';

    const container = doc.createElement('div');
    container.classList.add('container');

    container.appendChild(title);
    container.appendChild(Card(doc, 'Bob', 'Manager'));
    container.appendChild(Card(doc, 'Jeremy', 'Senior Chef'));
    container.appendChild(Card(doc, 'Laetitia', 'Trainee'));

    content.appendChild(container);
};

function Card (doc, name, position) {
    const card = doc.createElement('div');
    card.classList.add('card');

    const cardName = doc.createElement('h1');
    cardName.textContent = name;

    const cardPosition = doc.createElement('p');
    cardPosition.textContent = position;

    card.appendChild(cardName);
    card.appendChild(cardPosition);

    return card;
}