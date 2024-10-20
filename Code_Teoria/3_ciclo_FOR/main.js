'use strict'
console.log('collegato');

//ciclo for
for (let i = 0; i < 10; i++) {
    //stampo i valori di i
    console.log(i)
};

//stampa nel DOM con ciclo for
const li = document.getElementById('app');

for (let i = 0; i < 10; i++) {
    //elemento d inserire
    const elemento = `<li>${i}</li>`;
    //inserimento
    li.innerHTML += elemento;
};

//append / creare html
const liAppend = document.getElementById('app-2');
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.addEventListener('click', function () {
        console.log(`ho cliccato l'elemnto ${i}`)
    });
    li.append(i);
    liAppend.append(li);
};