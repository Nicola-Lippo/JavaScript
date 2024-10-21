'use strict'
console.log('collegato');

//DADI
//user
const numberUser = Math.ceil(Math.random() * 6);
console.log(`numero giocatore ${numberUser}`);
//pc
const numberPc = Math.ceil(Math.random() * 6);
console.log(`numero pc ${numberPc}`);
//condizioni
if (numberUser > numberPc) {
    console.log(`ha vinto il giocatore col numero ${numberUser}`);
} else if (numberUser < numberPc) {
    console.log(`ha vinto il pc col numero ${numberPc}`);
} else {
    console.log(`paregio coi numeri ${numberPc} e ${numberUser}`);
};

//EMAIL
//prevengo il comportamento di default del form
const email = document.getElementById('email');
email.addEventListener('submit', function (event) {
    event.preventDefault();
});
//bottoni
const check = document.getElementById('check');
check.addEventListener('click', function () {
    console.log('premuto il bottone invia');
    //variabile d'accesso
    let canAcces = false;
    //array email consentite
    const fakeEmails = [
        'marco.rossi@esempio.it',
        'luca.bianchi@esempio.it',
        'giorgia.verdi@esempio.it'
    ];
    //input
    const userEmail = document.getElementById('useremail');
    console.log(userEmail.value);
    for (let i = 0; i < fakeEmails.length; i++) {
        if (fakeEmails[i] === userEmail.value) {
            canAcces = true;
        }
    };
    if (canAcces === true) {
        console.log(`Utente registrato con email ${userEmail.value}`);
    } else {
        console.log(`Utente non registrato con email ${userEmail.value}`);
    };
});








