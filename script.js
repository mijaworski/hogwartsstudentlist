const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
})

fetch("students1991.json")
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        data.forEach(showStudent)
    })

function showStudent(student) {
    console.log(student)
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".studentname").textContent = student.fullname

    copy.querySelector("button").addEventListener("click", () => {

        modal.querySelector(".modal-name").textContent = "Welcome on the page which belongs to " + student.fullname;
        modal.querySelector(".modal-description").textContent = "This student was chosen to represent " + student.house + "'s house.";

        modal.classList.remove("hide");


    })
    document.querySelector(".studentlist").appendChild(copy);


}

//function showDetails(details) {
//  console.log()

//const modal = document.querySelector(".modal-content").content;
//const template = document.querySelector("model-content").content;
//const copy = modal.cloneNode(true);
//modal.querySelector(".modal-name").textContent = "Welcome on the page which belongs to " + details.fullname;
//modal.querySelector(".modal-description").textContent = "This student was chosen to represent " + details.house + "'s house.";

//    modal.classList.remove("hide");
//}