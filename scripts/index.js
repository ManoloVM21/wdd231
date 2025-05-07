const year = document.querySelector("#currentyear")
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Update: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;

    //DYNAMIC LISTS
let courses=["WDD130","WDD131","WDD231","CSE111","CSE210","CSEPC110"];
let completed = ["WDD130","WDD131","CSE111","CSE210","CSEPC110"];


let cursos ="";

courses.forEach(course => {if(completed.includes(course)){
    cursos+=`<li class="completed">${course}</li>`
}else{cursos+=`<li>${course}</li>`}});

document.querySelector(".curso").innerHTML=cursos;

function createCourses(list){
    let cursos ="";
    list.forEach(course => {if(completed.includes(course)){
        cursos+=`<li class="completed">${course}</li>`
    }else{cursos+=`<li>${course}</li>`}});
    document.querySelector(".curso").innerHTML=cursos;
}

let cse = document.querySelector("#cse");
let cselist = courses.filter(course => course.startsWith("CSE"));

cse.addEventListener("click",()=>createCourses(cselist));

let wdd = document.querySelector("#wdd");
let wddlist = courses.filter(course => course.startsWith("WDD"));

wdd.addEventListener("click",()=>createCourses(wddlist));

let all = document.querySelector("#all");

all.addEventListener("click",()=>createCourses(courses));