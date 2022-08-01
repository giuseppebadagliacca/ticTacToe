let turn = (Math.floor(Math.random() * 2)) + 1;

const gameDOM = {

    DOM: document.getElementById("game"),

    displayTurn() {
        turn % 2 === 0 ? gameDOM.DOM.innerText = "X's goes first" : gameDOM.DOM.innerText = "O's goes first"
    }

};

let oneDOM = document.querySelector(".grid-item-1");
let twoDOM = document.querySelector(".grid-item-2");
let threeDOM = document.querySelector(".grid-item-3");
let fourDOM = document.querySelector(".grid-item-4");
let fiveDOM = document.querySelector(".grid-item-5");
let sixDOM = document.querySelector(".grid-item-6");
let sevenDOM = document.querySelector(".grid-item-7");
let eightDOM = document.querySelector(".grid-item-8");
let nineDOM = document.querySelector(".grid-item-9");

gameDOM.DOM.addEventListener("click", myfunct);

function myfunct(e) {
    if (e.target.innerText === "") {
        e.target.innerText = pickXor0(turn);
        turn++;
        checkForWins();
    }
}

function pickXor0(num) {
    return num % 2 === 0 ? "X" : "O";
}

function checkForWins() {
    if (
        (oneDOM.innerText === "O" && fourDOM.innerText === "O" && sevenDOM.innerText === "O") ||
        (twoDOM.innerText === "O" && fiveDOM.innerText === "O" && eightDOM.innerText === "O") ||
        (threeDOM.innerText === "O" && sixDOM.innerText === "O" && nineDOM.innerText === "O") ||
        (oneDOM.innerText === "O" && twoDOM.innerText === "O" && threeDOM.innerText === "O") ||
        (fourDOM.innerText === "O" && fiveDOM.innerText === "O" && sixDOM.innerText === "O") ||
        (sevenDOM.innerText === "O" && eightDOM.innerText === "O" && nineDOM.innerText === "O") ||
        (oneDOM.innerText === "O" && fiveDOM.innerText === "O" && nineDOM.innerText === "O") ||
        (threeDOM.innerText === "O" && fiveDOM.innerText === "O" && sevenDOM.innerText === "O")
    ) {
        gameDOM.DOM.id = "winning-font"
        gameDOM.DOM.innerText = "0's Won!"
        setTimeout(reload, 5000);
    }
    if (
        (oneDOM.innerText === "X" && fourDOM.innerText === "X" && sevenDOM.innerText === "X") ||
        (twoDOM.innerText === "X" && fiveDOM.innerText === "X" && eightDOM.innerText === "X") ||
        (threeDOM.innerText === "X" && sixDOM.innerText === "X" && nineDOM.innerText === "X") ||
        (oneDOM.innerText === "X" && twoDOM.innerText === "X" && threeDOM.innerText === "X") ||
        (fourDOM.innerText === "X" && fiveDOM.innerText === "X" && sixDOM.innerText === "X") ||
        (sevenDOM.innerText === "X" && eightDOM.innerText === "X" && nineDOM.innerText === "X") ||
        (oneDOM.innerText === "X" && fiveDOM.innerText === "X" && nineDOM.innerText === "X") ||
        (threeDOM.innerText === "X" && fiveDOM.innerText === "X" && sevenDOM.innerText === "X")
    ) {
        gameDOM.DOM.id = "winning-font"
        gameDOM.DOM.innerText = "X's Won!"
        setTimeout(reload, 5000);
    }

}

function reload() {
    location.reload();
}