import { footer } from "./footer.js";
import { navigation } from "./navigation.js";
navigation();
footer();

/*ITEMS*/
async function getData() {
    const prom = await fetch(`data/items.json`);
    const data = await prom.json();
    Displaycards(data);
}
getData();
const cards = document.querySelector("#cards");
function Displaycards(data){
    data.forEach(item => {
        const section = document.createElement('section');
        const title = document.createElement('h2');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        figure.appendChild(img);
        img.setAttribute('alt',`${item.name}`);
        img.setAttribute('loading','lazy');
        img.setAttribute('width','300');
        img.setAttribute('height','200');
        const address = document.createElement('address');
        const paragraph = document.createElement('p');
        const button = document.createElement('button');
        const link = `${item.wiki}`;
        button.addEventListener("click", ()=>{
            window.open(link,"_blank")
        })
        button.innerHTML = "Learn More";
        title.innerHTML = `${item.name}`;
        img.src = `${item.image}`;
        address.innerHTML = `${item.address}`;
        paragraph.innerHTML = `${item.description}`;
        section.appendChild(title);
        section.appendChild(figure);
        section.appendChild(address);
        section.appendChild(paragraph);
        section.appendChild(button);
        cards.appendChild(section);
    });
};

const message = document.querySelector("#message");
async function getLastday(){
    const lastVisit = "lastVisit";
    const lastdate = await localStorage.getItem(lastVisit);
    const today = Date.now();
    const oneDay = 1000*60*60*24;
    if (!lastdate){
        message.innerHTML = "Welcome! Let us know if you have any questions.";
    } else{
        const previousTime = Number(lastdate);
        const difference = today - previousTime;
        if (difference < oneDay){
            message.innerHTML = "Back so soon! Awesome!"
        } else{
            const days = Math.floor(difference / oneDay);
            const dayText = days === 1 ? "day" : "days";
            message.innerHTML = `You last visited ${days} ${dayText} ago.`;
        }
    }
    localStorage.setItem(lastVisit, today);
}
getLastday();

const dialog = document.querySelector("#dialog");
const closeButton = document.querySelector("#closeButton");
dialog.showModal();
closeButton.addEventListener("click", ()=>dialog.close());