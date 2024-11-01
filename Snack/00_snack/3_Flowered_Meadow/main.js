'use strict'
console.log('on');
//play button
const play = document.getElementById('start');
play.addEventListener('click', playGame);
/*-------------------------------------------------------------------*/
//funzione inizia a giocare
function playGame() {
    console.log('start the game');
    //level
    const level = document.getElementById('level').value;
    //cell
    const cell = selectLevel(level)
    //grid
    const grid = document.getElementById('grid')
    //svuoto griglia
    grid.innerText = '';
    createGrid(grid, cell);
    gameLogic(grid, cell);
}
//funzione seleziona il livello
function selectLevel(selectedLevel) {
    //SWITCH
    switch (selectedLevel) {
        case 'easy':
        default:
            console.log('hai selezionato opzione easy');
            return 100;
        case 'normal':
            console.log('hai scelto opzione normal');
            return 81;
        case 'pro':
            console.log('hai scelto opzione pro');
            return 49;
    }
}
//funzione randomica per generare numeri
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//funzione per creare le bombe
function bombsGenerator(bombsNumbers, maxCell) {
    //array di bombe
    const bombs = [];
    //logica bombe
    while (bombs.length < bombsNumbers) {
        //funzione per generare bombe
        const generateBombs = getRndInteger(1, maxCell)
        //push nell'array il numero se non è già presente
        if (!bombs.includes(generateBombs)) {
            bombs.push(generateBombs);
        }
    }
    return bombs;
}
//funzione logica di gioco
function gameLogic(gridGame, xCell) {
    //variabile start/and gioco
    let play = true;
    //elementi vittoria
    const score = [];
    //bombe random pc
    const maxBombs = 16;
    const bombs = bombsGenerator(maxBombs, xCell);
    console.log(bombs);
    //utente seleziona una casella
    console.log(gridGame);
    gridGame.addEventListener('click', function (event) {
        console.log(event);
        const currentElement = event.target;
        //conversione valore numerico
        const currentElementNumber = parseInt(currentElement.innerText)
        //stop game
        if (!play) return;
        //evito di inserire 2 volte lo stesso numero
        if (score.includes(currentElementNumber)) return;


        if (bombs.includes(currentElementNumber)) {
            currentElement.classList.add('cell-bombs');
            console.log('hai perso');
            play = false;
        } else {
            console.log(`hai selezionato la casella ${currentElement.innerText}`);
            currentElement.classList.add('cell-click');
            score.push(currentElementNumber);
            console.log(score);
        }
        //vittoria
        if (score.length === xCell - maxBombs) {
            console.log('hai vinto');
            play = false;
        }
    })
}
//funzione per creare la griglia di gioco
function createGrid(xGrid, xCell) {
    //calcolo radice quadrata
    const cols = Math.sqrt(xCell);
    for (let i = 1; i <= xCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        cell.classList.add(`cell-${cols}`);
        cell.innerText = i;
        xGrid.append(cell);
    }
}

