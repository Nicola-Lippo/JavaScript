'use strict'
console.log('collegato');
//variabili calcolatrice
let firstNumber = '';
let secondNumber = '';
let myOperetor = '';
let total = 0;
//display risultato
const results = document.getElementById('result');
//numeri da 0 - 9
const numbers = document.querySelectorAll('.even');
//operatori(metodo alternativo selezione padre per figlio)
const operators = document.querySelector('.operator')
//event listener a tutti i numeri (0-9): quando si clicca su un numero, concatenarlo al numero visualizzato in alto
for (let i = 0; i < numbers.length; i++) {
    //funzione senza () perchè voglio sia invocata al click
    numbers[i].addEventListener('click', addEventNumbers);
}
//event listener a tutti gli operatori: quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
operators.addEventListener('click', addOperator);
//event listener al pulsante "=": quando si clicca su =, salvare il secondo operando, effetuare il calcolo corretto in base all'operatore selezionato e visualizzare il risultato in alto
const equals = document.getElementById('equals');
equals.addEventListener('click', calculateEquals);

/****
FUNZIONI
****/
function addEventNumbers(event) {
    console.log(event)
    //target tutte le proprietà dell'elemento
    console.log(`ho premuto il bottone ${event.target.innerText}`);
    const currentElement = event.target.innerText;
    if (results.innerText === '0' || total !== 0) {
        results.innerText = currentElement;
        total = 0;
    } else {
        // Altrimenti, aggiungi il numero cliccato al display
        results.innerText += currentElement;
    }
};

function addOperator(event) {
    //resetto tutto con C
    if (event.target.innerText === 'C') {
        firstNumber = '';
        secondNumber = '';
        myOperetor = '';
        total = 0;
        results.innerText = 0;
    } else {
        console.log(`ho premuto l'operatore ${event.target.innerText}`)
        //salvo l'operatore
        const currentElement = event.target.innerText;
        myOperetor = currentElement;
        console.log(currentElement);
        //salvo I numero
        firstNumber = results.innerText;
        console.log(firstNumber);
        //svuto display
        results.innerText = 0;
    }
};

function calculate(num1, num2, op) {
    //calcolo
    switch (op) {
        case '+':
        default:
            console.log('addizione')
            return num1 + num2;
        case '-':
            console.log('sottrazione')
            return num1 - num2;
        case '*':
            console.log('moltiplicazione')
            return num1 * num2;
        case '/':
            console.log('divisione')
            //errore se si prova a dividere per 0
            if (num2 === 0) {
                firstNumber = '';
                secondNumber = '';
                myOperetor = '';
                total = 0;
                return results.innerText = 'error';
            } else {
                return num1 / num2;
            }
    }
};

function calculateEquals() {
    console.log('ho premuto =');
    //salvo II numero
    secondNumber = results.innerText;
    console.log(secondNumber);
    //calcolo / invocazione
    total = calculate(Number(firstNumber), Number(secondNumber), myOperetor);
    //display
    results.innerText = total;
};