let turn = (Math.floor(Math.random() * 2)) + 1;
let h2DOM = document.querySelector("#display");
let h1DOM = document.querySelector("h1");

const timeline = gsap.timeline();
timeline
.fromTo('h1', {xPercent: -200, opacity: 0}, {xPercent: 0,opacity: 1})
.fromTo('#display', {xPercent: +200, opacity: 0}, {xPercent: 0,opacity: 1})
.fromTo('#game', {yPercent: +200, opacity: 0}, {yPercent: 0,opacity: 1, duration: 4, visibility:"visible"})




const gameDOM = {

    DOM: document.getElementById("game"),

    displayTurn() {
        turn % 2 === 0 ? h2Display("X's go first") : h2Display("O's go first"); 
    }

};

gameDOM.displayTurn();

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
        finalDisplay("0's Win!")
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
        finalDisplay("X's Win!")
    }

    if(oneDOM.innerText !== "" && twoDOM.innerText !== "" && threeDOM.innerText !== "" && fourDOM.innerText !== "" && fiveDOM.innerText !== "" && sixDOM.innerText !== "" &&sevenDOM.innerText !== "" && eightDOM.innerText !== "" && nineDOM.innerText !== "" ){
        finalDisplay("Try Again!")
    }
}

function h2Display(msg){
    h2DOM.innerText = msg;
    setTimeout(clear, 3000);
}

function clear(){
    gsap.to('#display', {scale: 0, duration: 4,})
    
}

function finalDisplay(msg){
    h1DOM.innerText = "";
    gameDOM.DOM.id = "winning-font"
    gameDOM.DOM.innerHTML = `
    <h1>${msg}</h1>
    <button onclick="playAgain()">Play Again</button>
    `;
    gsap.fromTo('h1',{
        scale: 0, 
        x: -1000, 
        y: 1000, 
        rotation:90}, 
        {rotation: 0,
            x: 0,
            y:0,
            scale: 1.75, 
            duration: 1.75, 
            ease: 'bounce'});

    gsap.fromTo('button',
        {opacity: 0, 
        x: 1000,
        y: -1000,
        rotation: -180},
        
        {opacity: 1, 
            x: 0,
            y: 0,
            scale: 2,
            rotation:0, 
            duration:1.75,
            ease: 'bounce',
        });
}

function playAgain(){location.reload()}