let userName = document.getElementById("nameInput")
const heightInput = document.querySelector("#heightInput")
const submitButton = document.querySelector("#submit")


submitButton.addEventListener('click',() => {
    event.preventDefault()
    getHeight()})

function getHeight() {
    let userHeight = parseInt(heightInput.innerHTML)
    console.log(heightInput.value)

}





// fetch("http://localhost/characters/")
//     .then(response => response.json())
//     .then(character => controller(character))

// function controller(character ) {

// }
