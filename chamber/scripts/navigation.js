export function navigation(){
    const nav = document.querySelector("#animateme");
    const hambbutton = document.querySelector("#hamburger");

    hambbutton.addEventListener('click',()=>{
        nav.classList.toggle('open');
        hambbutton.classList.toggle('open');

    });}