import { displayCourseDetail } from "./displayCourses.js";
export function createCourses(list) {
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