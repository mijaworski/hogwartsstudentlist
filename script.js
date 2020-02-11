const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    if (event.target == modal) {
        modal.classList.add("hide");
    }
});

fetch("students1991.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        data.forEach(showStudent);
    });

function showStudent(student) {
    console.log(student);
    const template = document.querySelector("template").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".studentname").textContent = student.fullname;

    copy.querySelector("button").addEventListener("click", () => {
        if (student.house === "Hufflepuff") {
            modal.classList.add("theme1");
        } else if (student.house === "Gryffindor") {
            modal.classList.add("theme2");
        } else if (student.house === "Ravenclaw") {
            modal.classList.add("theme3");
        } else if (student.house === "Slytherin") {
            modal.classList.add("theme4");
        }

        modal.querySelector(".modal-name").textContent = "Welcome on the page which belongs to " + student.fullname;
        modal.querySelector(".modal-description").textContent = "This student was chosen to represent " + student.house + "'s house.";

        modal.classList.remove("hide");
    });

    document.querySelector("#houses").addEventListener("change", changeTheme);

    document.querySelector(".studentlist").appendChild(copy);
}

function changeTheme() {
    const theme = this.value;
    console.log(theme);

    document.querySelector("#modalito").dataset.theme = theme;
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