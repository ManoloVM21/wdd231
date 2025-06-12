import { nav } from "./nav.mjs";
import { footer } from "./footer.mjs";
nav();
footer();

const info = new URLSearchParams(window.location.search);

document.querySelector("#thankyou").innerHTML = `Thank You, ${info.get('fname')}!`;
document.querySelector("#info").innerHTML = `Your Phone Number is '${info.get("phone")}' and your Email is '${info.get("email")}'`;