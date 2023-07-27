let player = {
    name : "per",
    chips : 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " $"+ player.chips

function startGame(){
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards:"
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i]+" "
    }
    
    sumEl.textContent ="Sum:"+ sum;
    if(sum <= 20){
    message = "want to draw a card?"
    }else if(sum === 21){
        message = "jackpot"
        hasBlackJack = true
    }else{
        message = "you lost"
        isAlive = false
    }
    messageEl.textContent = message
    
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let thirdcard = getRandomCard()
        cards.push(thirdcard)
        console.log(cards)
        sum += thirdcard;
        renderGame()
    }
}

function getRandomCard(){
    let number = Math.random()
    number *= 13
    number = Math.floor(number)+1
    return number;
}