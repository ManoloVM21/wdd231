const courseDetails = document.querySelector("#courseDetails");

export function displayCourseDetail(course){
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