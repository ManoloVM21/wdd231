const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) =>{
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let dateBirth = document.createElement('p');
        let placeBirth = document.createElement('p');
        fullName.textContent = `${prophet.name}${prophet.lastname}`;
        dateBirth.textContent = `Birth Date: ${prophet.birthdate}`;
        placeBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute('src',prophet.imageurl);
        portrait.setAttribute('alt',`Protrait of ${prophet.name}${prophet.lastname}`);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width','340');
        portrait.setAttribute('height','440');
        card.appendChild(fullName);
        card.appendChild(dateBirth);
        card.appendChild(placeBirth);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}