import { footer } from "./footer.js";
import { navigation } from "./navigation.js";

navigation();
footer();

const params = new URLSearchParams(window.location.search);
const name = params.get("first");
const lastName = params.get("last");
const orgTitle = params.get("orgTitle");
const email = params.get("email");
const phone = params.get("phone");
const businessName = params.get("businessName");
const membershipLevel = params.get("membership");
const description = params.get("description");

const formInfo = document.querySelector("#formInfo");
formInfo.innerHTML = `We have received the information for ${businessName} with a ${membershipLevel} by ${name} ${lastName} who is the ${orgTitle}. We will send you more details to ${email}.`