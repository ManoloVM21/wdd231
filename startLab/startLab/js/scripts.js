const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButton.addEventListener("click", ()=>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = "One Apple contain 95 calories"
})
openButton1.addEventListener("click", ()=>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = "One Orange contain 45 calories"
})
openButton2.addEventListener("click", ()=>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = "One Bananas contain 105 calories"
})

closeButton.addEventListener("click",()=>{
    dialogBox.close();
})