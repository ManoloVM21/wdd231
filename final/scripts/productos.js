import { nav } from "./nav.mjs";
nav();
import { footer } from "./footer.mjs";
footer();
async function Cards() {
    try{
        const response = await fetch("data/pasteles.json");
        const data = await response.json();
        displayCards(data);
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
        const description = document.createElement("p");
        const button = document.createElement("button");

        img.src = `${item.imagen}`;
        img.setAttribute("alt",`${item.name}`);
        img.setAttribute("loading","lazy");
        h3.innerHTML = `${item.name}`;
        description.innerHTML = `${item.description}`;
        button.innerHTML = "Ver Detalles";
        button.addEventListener("click", ()=>{dialog.showModal()});
        div.setAttribute("class",`cards ${item.name}`);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(description);
        div.appendChild(button);
        secpasteles.appendChild(div);
        div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = `${item.color}`;
        });
        div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "#ffffff";
        });

        const dialog = document.createElement("dialog");
        const dH2 = document.createElement("h2");
        dH2.style.backgroundColor = `${item.color}`;
        const price = document.createElement("p");
        const dDescription = document.createElement("p");
        const dNutrition = document.createElement("p");
        const dButton = document.createElement("button");
        dButton.innerHTML = "X";
        dH2.innerHTML=`${item.name}`;
        price.innerHTML = `<strong>Precio:</strong> s/.${item.precio}`;
        dDescription.innerHTML = `<strong>Description: </strong>${item.description}`;
        dNutrition.innerHTML = `<strong>Nutritional Value: </strong>${item.nutritional}`;
        dialog.appendChild(dH2);
        dialog.appendChild(dButton);
        dialog.appendChild(price);
        dialog.appendChild(dDescription);
        dialog.appendChild(dNutrition);
        secpasteles.appendChild(dialog);
        div.addEventListener("click",()=>{dialog.showModal()});
        dButton.addEventListener("click",()=>{dialog.close()});
    });
    
}

async function Cards2() {
    try{
        const response = await fetch("data/postres.json");
        const data = await response.json();
        displayCards2(data);
    } catch(error){
        console.log(error);
    }
    
}
Cards2()
const secpostres = document.querySelector("#galletas");
function displayCards2(data){
    data.forEach(item => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const description = document.createElement("p");
        const button = document.createElement("button");

        img.src = `${item.imagen}`;
        img.setAttribute("alt",`${item.name}`);
        img.setAttribute("loading","lazy");
        h3.innerHTML = `${item.name}`;
        description.innerHTML = `${item.description}`;
        button.innerHTML = "Ver Detalles";
        button.addEventListener("click", ()=>{dialog.showModal()});
        div.setAttribute("class",`cards ${item.name}`);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(description);
        div.appendChild(button);
        secpostres.appendChild(div);
        div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = `${item.color}`;
        });
        div.addEventListener("mouseleave", () => {
        div.style.backgroundColor = "#ffffff";
        });

        const dialog = document.createElement("dialog");
        const dH2 = document.createElement("h2");
        dH2.style.backgroundColor = `${item.color}`;
        const price = document.createElement("p");
        const dDescription = document.createElement("p");
        const dNutrition = document.createElement("p");
        const dButton = document.createElement("button");
        dButton.innerHTML = "X";
        dH2.innerHTML=`${item.name}`;
        price.innerHTML = `<strong>Precio:</strong> s/.${item.precio}`;
        dDescription.innerHTML = `${item.description}`;
        dNutrition.innerHTML = `${item.nutritional}`;
        dialog.appendChild(dH2);
        dialog.appendChild(dButton);
        dialog.appendChild(price);
        dialog.appendChild(dDescription);
        dialog.appendChild(dNutrition);
        secpostres.appendChild(dialog);
        div.addEventListener("click",()=>{dialog.showModal()});
        dButton.addEventListener("click",()=>{dialog.close()});
    });
    
}