'use strict'
console.log('sono collegato');
//array 1
const arrayOne = ['Mela', 'Pane', 'Latte', 'Carne', 'Pasta'];
console.log(arrayOne);
//array 2
const arrayTwo = ['Pesce', 'Yogurt', 'Cereali'];
console.log(arrayTwo);
//variabile per ciclo while
let x = arrayTwo.length
//ciclo while
while (arrayTwo.length < arrayOne.length) {
    arrayTwo.push('Biscotti', 'Panna');
    x++;
};
//consol.log dopo il ciclo
console.log(arrayTwo);
console.log('---------------------------------------------------------------');
//SNACK A
const inputA = ['input1', 'input2', 'input3', 'input4', 'input5'];
//funzione
function contaElementi(array) {
    const len = array.length;
    //return
    return len;
};
//invocazione
const snackA = contaElementi(inputA);
console.log(snackA);
console.log('---------------------------------------------------------------');
//SNACK B
const inputB = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
//elemento trovaindice numerico
const indexB = '';
//funzione
function trovaIndice(array, index) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === index) {
            return i
        }
    }
    return - 1;
};
//invocazione
const snackB = trovaIndice(inputB, indexB);
console.log(snackB);
console.log('---------------------------------------------------------------');
//SNACK C
const inputC = ['Mela', 'Pane', 'Latte', 'Carne', 'Pasta'];
//funzione
function stampa(array) {
    //.join(','): Questo metodo trasforma l'array in una stringa 
    return array.join(',');
}
//invocazione
const snackC = stampa(inputC);
console.log(snackC);
console.log('---------------------------------------------------------------');
//SNACK D
const inputD = ['input1', 'input2', 'input3', 'input4', 'input5'];
console.log(inputD);
//funzione
function rimuoviDallaCoda(array) {
    //Il primo parametro (0) definisce la posizione in cui devono essere aggiunti/rimossi i nuovi elementi.
    //Il secondo parametro (array.length - 1) definisce quanti elementi devono essere rimossi .
    const remove = array.slice(0, array.length - 1);
    return remove;
};
//invocazione
const snackD = rimuoviDallaCoda(inputD);
console.log(snackD);
console.log('---------------------------------------------------------------');
//SNACK E
const inputE = ['input1', 'input2', 'input3', 'input4', 'input5'];
console.log(inputE);
//funzione
function rimuoviDallaTesta(array) {
    const remove = array.slice(1);
    return remove;
};
//invocazione
const snackE = rimuoviDallaTesta(inputE);
console.log(snackE);
console.log('---------------------------------------------------------------');
//SNACK F
const inputF = ['Pesce', 'Yogurt', 'Cereali'];
//elemento da aggiungere
const indexF = 'Uova';
console.log(inputF);
//funzione
function inserisciInTesta(array, index) {
    array.unshift(index);  // Aggiunge l'elemento in testa
    return array;
};
//invocazione
const snackF = inserisciInTesta(inputF, indexF);
console.log(snackF);

