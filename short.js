let userName = document.getElementById("nameInput")
const heightInput = document.querySelector("#heightInput")
const submitButton = document.querySelector("#submit")


submitButton.addEventListener('click',() => {
    event.preventDefault()
    getHeight()})

function getHeight() {
    parseInt(heightInput.innerHTML)
    let userHeight = (heightInput.value / 0.394)
    //  userheight now in centimeters
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
        if (character.height > userHeight) {
            console.log(userHeight)
            const characterCard = document.createElement('div')
            characterCard.className ='card'
            const characterName = document.createElement('h3')
            characterName.className ='char-name'
            const characterHeight = document.createElement('h4')
            characterHeight.className = 'char-height'

            characterName.innerText = `${character.name}`
            characterHeight.innerText =` is ${Math.round((character.height - userHeight) * 0.394)} inches taller than you!`


            characterCard.append(characterName, characterHeight)
            document.body.append(characterCard)

           
        }
    })
}