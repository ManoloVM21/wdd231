import { courses } from "./courses.js";
import { createCourses } from "./createCourse.js";

const year = document.querySelector("#currentyear")
const modified = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear();
modified.innerHTML = `Last Update: <span id="currentyear">${new Intl.DateTimeFormat(
    'en-US', {
        dateStyle: 'medium',
        timeStyle: "medium"
    }).format(today)}</span>`;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", ()=>{
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
})

//DYNAMIC LISTS
createCourses(courses);

let cse = document.querySelector("#cse");
let cselist = courses.filter(course => course.subject==="CSE");

cse.addEventListener("click",()=>createCourses(cselist));

let wdd = document.querySelector("#wdd");
let wddlist = courses.filter(course => course.subject==="WDD");

wdd.addEventListener("click",()=>createCourses(wddlist));

let all = document.querySelector("#all");

all.addEventListener("click",()=>createCourses(courses));

