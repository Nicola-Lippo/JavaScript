'use strict'
console.log('collegato');

//prevengo il comportamento di default del form
const ticketForm = document.getElementById('ticketform')
ticketForm.addEventListener('submit', function (event) {
    event.preventDefault();
});

//bottone di start
const generateButton = document.getElementById('start');
generateButton.addEventListener('click', function () {
    console.log('form inviato')

    //INPUT
    const userName = document.getElementById('nameid');
    console.log(userName.value);
    const userKm = document.getElementById('kmid');
    console.log(userKm.value);
    const userAge = document.getElementById('ageid');
    console.log(userAge.value);

    //variabile prezzo al km
    const kmPrice = 0.31;
    //variabili sconstistica
    const under = 20;
    const over = 40;

    //calcolo prezzo del biglietto
    let price = userKm.value * kmPrice;
    console.log(`il prezzo è ${price.toFixed(2)}`);
    // scontistica
    if (userAge.value === 'under') {
        price -= (price / 100) * under;
        console.log(`il tuo prezzo scontato è ${price.toFixed(2)}`);
    } else if (userAge.value === 'over') {
        price -= (price / 100) * over;
        console.log(`il tuo prezzo scontato è ${price.toFixed(2)}`);
    };

    //rimozine classe .hover
    const hover = document.getElementById('hover');
    hover.classList.remove('hover');

    //OUTPUT
    const nameOut = document.getElementById('nameout');
    nameOut.innerText = userName.value;
    const saleOut = document.getElementById('saleout');
    saleOut.innerText = userAge.value;
    const ticketOut = document.getElementById('ticketout');
    ticketOut.innerText = Math.ceil(Math.random() * 20);
    const cpOut = document.getElementById('cpout');
    cpOut.innerText = Math.ceil(Math.random() * 9999);
    const priceOut = document.getElementById('priceout');
    priceOut.innerText = price.toFixed(2);

});

//bottone reset
const reset = document.getElementById('reset')
reset.addEventListener('click', function () {

    //aggiunta classe .hover
    const hover = document.getElementById('hover');
    hover.classList.add('hover');

    //svuoto i campi input
    const userName = document.getElementById('nameid');
    userName.value = '';
    const userKm = document.getElementById('kmid');
    userKm.value = '';
    const userAge = document.getElementById('ageid');
    userAge.value = 'standard';


});