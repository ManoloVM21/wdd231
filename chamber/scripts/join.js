import { footer } from "./footer.js";
import { navigation } from "./navigation.js";

navigation();
footer();

/*MODALS*/
const openButton = document.querySelector("#openButton");
const dialog1 = document.querySelector("#nonP");
const dialog2 = document.querySelector("#bronze");
const dialog3 = document.querySelector("#silver");
const dialog4 = document.querySelector("#gold");
const closeButton = document.querySelector("#closeButton");


openButton.addEventListener("click",()=>dialog1.showModal());
closeButton.addEventListener("click",()=>dialog1.close());

openButton1.addEventListener("click",()=>dialog2.showModal());
closeButton1.addEventListener("click",()=>dialog2.close())

openButton2.addEventListener("click",()=>dialog3.showModal());
closeButton2.addEventListener("click",()=>dialog3.close())

openButton3.addEventListener("click",()=>dialog4.showModal());
closeButton3.addEventListener("click",()=>dialog4.close())

const timeStamp = document.querySelector("#timestamp");

const timeMoment = new Date (document.lastModified);
timeStamp.innerHTML =  `Time Stamp: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(timeMoment)}</span>`;
