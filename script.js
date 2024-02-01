

/*this selects where i want the data to be displayed*/

const projectTarget = document.querySelector('.portfolio')


fetch ('projects.json').then(function (response) {
    return response.json()

}).then (function (data) {
   console.log(data)

   data.projects.forEach(function (project) {
    console.log(project)

    projectTarget.innerHTML += `<div class="items">
    <h3>${project.name}</h3>
    <img src='${project.img}'/>
    <p>${project.desc}</p>
    </div>`


   })
})

