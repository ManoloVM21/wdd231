import { nav } from "./nav.mjs";
import { footer } from "./footer.mjs";
nav();
footer();

/*CARDS*/
async function Cards() {
    try{
        const response = await fetch("data/pasteles.json");
        const data = await response.json();
        const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 2);
        displayCards(shuffled);
    } catch(error){
        console.log(error);
    }
    
}
Cards()
const secpasteles = document.querySelector("#pasteles");
function displayCards(data){
    data.forEach(item => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const button = document.createElement("button");

        img.src = `${item.imagen}`;
        img.setAttribute("alt",`${item.name}`);
        h3.innerHTML = `${item.name}`;
        p.innerHTML = `<strong>Precio:</strong> s/.${item.precio}`;
        button.innerHTML = "Ver Detalles";
        button.addEventListener("click", ()=>{window.open(`productos.html`,"_self")});
        div.setAttribute("class",`cards ${item.name}`);
        div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = `${item.color}`;
        });
        div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "#ffffff";
        });
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(button);
        secpasteles.appendChild(div);
    });
    const verMas = document.createElement("button");
    verMas.innerHTML = "Ver Más";
    verMas.setAttribute("class","verMas");
    verMas.addEventListener("click", ()=>{window.open("productos#pasteles.html","_self")})
    secpasteles.appendChild(verMas);
}

async function Cards2() {
    const response = await fetch("data/postres.json");
    const data = await response.json();
    const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 2);
    displayCards2(shuffled);
}
Cards2()
const secPostres = document.querySelector("#postres");
function displayCards2(data){
    data.forEach(item => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const button = document.createElement("button");

        img.src = `${item.imagen}`;
        img.setAttribute("alt",`${item.name}`);
        h3.innerHTML = `${item.name}`;
        p.innerHTML = `<strong>Precio:</strong> s/.${item.precio}`;
        button.innerHTML = "Ver Detalles";
        button.addEventListener("click", ()=>{window.open(`productos.html`,"_self")});
        div.setAttribute("class",`cards ${item.name}`);
        div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = `${item.color}`;
        });
        div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "#ffffff";
        });
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        div.appendChild(button);
        secPostres.appendChild(div);
    });
    const verMas = document.createElement("button");
    verMas.innerHTML = "Ver Más";
    verMas.setAttribute("class","verMas");
    verMas.addEventListener("click", ()=>{window.open("productos#galletas.html","_self")})
    secPostres.appendChild(verMas);
}
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("transparent");
  }
});

