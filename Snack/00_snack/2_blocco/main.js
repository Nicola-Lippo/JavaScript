'use strict'
console.log('sono collegato');
//array 1
const arrayOne = [
    'Mela',
    'Pane',
    'Latte',
    'Carne',
    'Pasta',
];
console.log(arrayOne);
//array 2
const arrayTwo = [
    'Pesce',
    'Yogurt',
    'Cereali',
];
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

