export function footer(){
    const year = document.querySelector("#currentyear")
const modified = document.querySelector("#lastModified");
const today = new Date(document.lastModified);

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Update: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;

}