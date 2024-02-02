

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
    <button>${project.github}</button>
    </div>`


   })
})

/*box with button*/
document.querySelector('.nose').addEventListener ('click' , function () {
   alert("AaaaaaaaaCHOO!")
}
)

document.querySelector('.menu2 nose').addEventListener ('click' , function () {
    alert("AaaaaaaaaCHOO!")
 })



/*click nose goes to text*/

//  const changeText = document.querySelector('.nose');

//  changeText.addEventListener("click", function() {
//    changeText.textContent = "ACHOOOOOOO!";

//  }) 


//  const changetext = document.querySelector('.menu2 nose');

//  changetext.addEventListener("click", function() {
//    changetext.textContent = "ACHOOOOOOO!";
//  });
 
 

