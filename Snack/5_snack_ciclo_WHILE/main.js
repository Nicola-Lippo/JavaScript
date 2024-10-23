'use strict'
console.log('collegato');
//array lista spesa
const list = [
    'Pane',
    'Uova',
    'Pasta',
    'Riso',
    'Olio',
    'Pomodori',
    'Formaggio',
    'Mela',
    'Banana',
    'Carne di pollo',
    'Pesce',
    'Yogurt',
    'Cereali',
    'Latte',
    'Patate'
];

//cilo while console
let i = 0;
while (i < list.length) {
    console.log(list[i]); // Stampa l'elemento corrente
    i++;                  // Incrementa 'i' dopo la stampa
};

//cilo while HTML
let x = 0;
const app = document.getElementById('app');
while (x < list.length) {
    const li = document.createElement('li')
    li.append(list[x]);
    app.append(li);
    x++;
};
