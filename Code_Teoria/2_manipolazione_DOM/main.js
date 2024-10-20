'use strict'
console.log('collegato');

//salvo dati scansione ricerca per id in una variabile
const uno = document.getElementById('app');
console.log(typeof uno);
//modifica html
uno.innerHTML = 'sono stato modificato';

//selezione per selettore css
//querySelector possiamo fare qualunque tipo di ricerca
const due = document.querySelector('.classe');//solo il primo a cascata viene selezionato
due.innerText = 'classe boolean 126';
console.dir(due);
//classi
console.log(due.classList)

//aggiungere una classe
const tre = document.getElementById('tre');
tre.classList.add('classe');
//rimuovere una classe
tre.classList.remove('eliminare');

//aggiungere style css
const quattro = document.getElementById('quattro');
quattro.style.backgroundColor = 'red';

//value
const cinque = document.querySelector('[type="text"]');
cinque.value = 'cambiamento avvenuto'
console.log(cinque.value);

//append
quattro.append(' aggiunto con append');

//click
const sei = document.getElementById('sei');
//metodo(), passiamo 2 parametri: eventi predefiniti e funzione
sei.addEventListener('click',
    function () {
        console.log('ho premuto col mouse')
    }
);