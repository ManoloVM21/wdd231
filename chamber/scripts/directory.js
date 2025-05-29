import { footer } from "./footer.js";
import { navigation } from "./navigation.js";

//HAMBUTTON
navigation();
footer();

//JSON TO CARDS
const cards = document.querySelector("#cards");
async function getCompaniesData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayCompanies(data);
}
getCompaniesData();

const displayCompanies = (companies) =>{
    companies.forEach((company) =>{
        let website = document.createElement('a');
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let address = document.createElement('p');
        name.textContent = `${company.name}`;
        image.setAttribute('src',`${company.image}`);
        image.setAttribute('alt',`${company.name}`);
        image.setAttribute('width',"300");
        image.setAttribute('height', "250");
        image.setAttribute('loading',"lazy");
        website.setAttribute('href',`${company.website}`)
        address.textContent = `${company.address}`;
        website.textContent = `Details`;
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(website);
        cards.appendChild(card);
    })
}

//GRID OR LIST
const gridbutton = document.querySelector("#gridbutton");
const listbutton = document.querySelector("#listbutton")

gridbutton.addEventListener('click', ()=>{
    cards.classList.add("grid"),
    cards.classList.remove("list");
});
listbutton.addEventListener("click",()=>{
    cards.classList.add("list"),
    cards.classList.remove("grid")
})
