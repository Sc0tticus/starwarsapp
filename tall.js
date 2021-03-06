let userName = document.getElementById("nameInput")
const heightInput = document.querySelector("#heightInput")
const submitButton = document.querySelector("#submit")


submitButton.addEventListener('click',() => {
    event.preventDefault()
    getHeight()})

function getHeight() {
    parseInt(heightInput.innerHTML)
    console.log()
    let userHeight = (heightInput.value / 0.394)
    // height now in CM
    fetchCharacters(userHeight)
}

function fetchCharacters(userHeight){
    fetch('http://localhost:3000/characters')
        .then(response => response.json())
        .then(response => selectCharacters(response, userHeight))
        console.log()
}



function selectCharacters(characters, userHeight){
    characters.forEach(character => {
        const userHeightInt = parseInt(userHeight)
        if (userHeightInt < character.height) {
            console.log( userHeight)
            const characterCard = document.createElement('div')
            characterCard.className ='card'
            const characterName = document.createElement('h2')
            characterName.className ='char-name'
            const characterHeight = document.createElement('h4')
            characterHeight.className = 'char-height'
           
            characterName.innerText = `${character.name}`
            characterHeight.innerText =` is ${Math.round((character.height - userHeightInt) * 0.394)} inches taller than you!`


            characterCard.append(characterName, characterHeight)
            document.body.append(characterCard)
        }
    })
}




// fetch("http://localhost/characters/")
//     .then(response => response.json())
//     .then(character => controller(character))

// function controller(character ) {

// }
