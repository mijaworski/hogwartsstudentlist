const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
})

fetch("./students1991.json")
    .then(function(response) {
        return response.json()
    }).then(function(data) {
        data.forEach(showStudent)
    })

function showStudent(student) {
    console.log()
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".studentname").textContent = student.fullname
        //copy.querySelector(".studenthouse").textContent = student.house

    copy.querySelector("button").addEventListener("click", () => {
        fetch("./students1991.json")
            .then(res => res.json())
            .then(showDetails);
    })

    document.querySelector(".studentlist").appendChild(copy);


}

//fetch("./students1991.json")
//  .then(function(response) {
//    return response.json()
//}).then(function(data) {
//    data.forEach(showDetails)
//})

function showDetails(students) {
    console.log(students)
        //copy.querySelector(".studenthouse").textContent = student.house

    const modal = document.querySelector(".modal-content").content;
    //const copy = template.cloneNode(true);
    //modal.querySelector(".modal-name").textContent = "Welcome on the page which belongs to " + student.fullname;
    //modal.querySelector(".modal-description").textContent = "This student was chosen to represent " + student.house + "'s house.";

    //modal.classList.remove("hide");

    //document.querySelector(`#student.house`).appendChild(copy);
}