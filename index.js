let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let 


scoreH = 0
scoreG = 0

let plusOne = 1
let plusTwo = 2
let plusThree = 3

//Add score to home team

function addOneHome() {
    scoreH += plusOne
    scoreHome.textContent = scoreH
}

function addTwoHome() {
    scoreH += plusTwo
    scoreHome.textContent = scoreH
}

function addThreeHome() {
    scoreH += plusThree
    scoreHome.textContent = scoreH
}

//Add score to guest team

function addOneGuest() {
    scoreG += plusOne
    scoreGuest.textContent = scoreG
}

function addTwoGuest() {
    scoreG += plusTwo
    scoreGuest.textContent = scoreG
}

function addThreeGuest() {
    scoreG += plusThree
    scoreGuest.textContent = scoreG
}

//Reset scores

function resetHome() {
    scoreH = 0
    scoreHome.textContent = scoreG
}

function resetGuest() {
    scoreG = 0
    scoreGuest.textContent = scoreG
}