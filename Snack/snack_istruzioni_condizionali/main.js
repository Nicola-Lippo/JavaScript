'use strict'
console.log('collegato');

//km da percorrere
const kmUser = Number(prompt('quanti km devi percorrere ?'));
console.log(kmUser);

//età passeggero
const ageUser = Number(prompt('quanti anni hai ?'));
console.log(ageUser);

//variabile prezzo al km
const kmPrice = 0.31;
//variabili età
const ageUnder = 18;
const ageOver = 65;
//variabili sconstistica
const under = 20;
const over = 40;

//calcolo prezzo del biglietto
const price = kmUser * kmPrice;
console.log(`il prezzo è ${price.toFixed(2)}`);
// scontistica
let salePrice = 0;
if (ageUser < ageUnder) {
    const saleUnder = (price / 100) * under;
    console.log(`essendo un under 18 hai diritto a sconto ${saleUnder.toFixed(2)}`);
    salePrice = price - saleUnder;
    console.log(`il tuo prezzo scontato è ${salePrice.toFixed(2)}`);
} else if (ageUser >= ageOver) {
    const saleOver = (price / 100) * over;
    console.log(`essendo un over 65 hai diritto a sconto ${saleOver.toFixed(2)}`);
    salePrice = price - saleOver;
    console.log(`il tuo prezzo scontato è ${salePrice.toFixed(2)}`);
};
