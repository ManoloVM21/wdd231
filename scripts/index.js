import { courses } from "./courses.js";

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

/* DIALOG */
const courseDetails = document.querySelector("#courseDetails");

function displayCourseDetail(course){
    courseDetails.innerHTML = ``;
    courseDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p>${course.credits} credits</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(", ")}</p>
    `
    courseDetails.showModal();
    document.querySelector("#closeModal").addEventListener("click",()=>courseDetails.close());
}

//DYNAMIC LISTS

function createCourses(list) {
    let cursos = document.querySelector(".curso");
    cursos.innerHTML = "";
    let totalCredits = 0;

    list.forEach(course => {
        const { subject, number, completed, credits } = course;
        totalCredits += credits;
        const li = document.createElement("li");
        if(completed){
            li.classList.add("completed");
            li.textContent = `✅${course.subject}${course.number}`;
        } else {
            li.textContent = `${course.subject}${course.number}`;
        }
        li.addEventListener("click",()=>displayCourseDetail(course));
        cursos.appendChild(li);
    });
    
    document.querySelector("#credits").textContent = `The number of credits from the courses below is ${totalCredits}`;
}
createCourses(courses);

let cse = document.querySelector("#cse");
let cselist = courses.filter(course => course.subject==="CSE");

cse.addEventListener("click",()=>createCourses(cselist));

let wdd = document.querySelector("#wdd");
let wddlist = courses.filter(course => course.subject==="WDD");

wdd.addEventListener("click",()=>createCourses(wddlist));

let all = document.querySelector("#all");

all.addEventListener("click",()=>createCourses(courses));

