fetch("./students1991.json")
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
    copy.querySelector(".studenthouse").textContent = student.house

    document.querySelector(".studentlist").appendChild(copy);

}