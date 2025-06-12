export function nav(){
    const hamButton = document.querySelector("#hambutton");
    const navigation = document.querySelector("#banner");
    const closeButton = document.querySelector("#closeBanner")

    hamButton.addEventListener("click", ()=>{
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
    closeButton.addEventListener("click", ()=>{
        navigation.classList.toggle('open');
    })
    const welcome =document.querySelector("#welcome");
    const name = localStorage.getItem("fname");
    if (name){
        welcome.innerHTML=`Welcome, ${name}!`;
    } else{
        welcome.innerHTML = "Welcome!"
    }
}