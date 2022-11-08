// Model

let selectedChar = '';
let health = 0;
let charIMG = '';
let bowserHealth = 300;
let playerTurn = true;
let chanceForShroom = 0;
let chanceForBowserShroom = 0;
let choiceMade = false;

// View
function view() {
    if (selectedChar == '') {
        document.getElementById('app').innerHTML = /*HTML*/ `
            <h1>Select Character</h1>
            <div class="selectChar">
                <img src="IMG/mario.png" class="char" onclick="selectedChar='Mario', view()"/>
                <img src="IMG/luigi.png" class="char" onclick="selectedChar='Luigi', view()"/>
                <img src="IMG/peach.png" class="char" onclick="selectedChar='Peach', view()"/>
                <img src="IMG/yoshi.png" class="char" onclick="selectedChar='Yoshi', view()"/>
                </div>`
    }
    if (selectedChar != '') {
        chosenCharStats(selectedChar)
        document.getElementById('app').innerHTML = /*HTML*/ `
            <h1>${selectedChar} VS Bowser!</h1>
            <div class="combatBox">
            <div id="playerBox">
            <img src='${charIMG}' height="400px"/>
            <div class="statsBox"> HP: ${health}</div>
            </div>
            <div id="playerBox">
            <img src='IMG/bowser.png' height="400px"/>
            <div class="statsBox"> HP: ${bowserHealth}</div>
            </div>
            </div>
            <div class="button" onclick="attack()">Attack!</div>
            `
    }
}




// Controller

function chosenCharStats(character) {
    if (choiceMade == false) {
        choiceMade = !choiceMade
        if (character == 'Mario') {
            return health = 200, charIMG = "IMG/mario.png";
        }
        if (character == 'Luigi') {
            return health = 140, charIMG = "IMG/luigi.png";
        }
        if (character == 'Peach') {
            return health = 100, charIMG = "IMG/peach.png";
        }
        if (character == 'Yoshi') {
            return health = 80, charIMG = "IMG/yoshi.png";
        }
    }

}

function attack() {
    if (playerTurn == true) {
        playerTurn = !playerTurn;
        bowserHealth -= (Math.floor(Math.random() * 6) + 7)
        if (bowserHealth <= 0) {
            youWin();
        }
        else { view() }
    }
    else if (playerTurn == false) {
        playerTurn = !playerTurn;
        health -= (Math.floor(Math.random() * 6) + 8);
        if (health <= 0) {
            youLose();
        }
        else { view() }
    }

}
function youLose() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>You Lose!</h1>
    `
}
function youWin() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <h1>You Win!</h1>
    `
}