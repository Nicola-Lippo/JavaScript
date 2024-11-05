'use strict'
console.log('collegato');
//array
const myArrayTeams = [
    {
        name: 'Wayne Barnett',
        job: 'Fouder e CEO',
        src: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroli',
        job: 'Chief Editor',
        src: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        job: 'Manager',
        src: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        job: 'Media Menager',
        src: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scot Estrada',
        job: 'Developer',
        src: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramon',
        job: 'Grafica',
        src: 'barbara-ramos-graphic-designer.jpg',
    },
];

//stampa dei dati in console
for (let i = 0; i < myArrayTeams.length; i++) {
    //salvo in una variabile l'oggetto corrente
    const currentTeam = myArrayTeams[i];
    console.log(`il nome è ${currentTeam.name}`);
    console.log(`il lavoro svolto è ${currentTeam.job}`);
    console.log(`la foto identificativa sarà ${currentTeam.img}`);
    console.log('-----------------------------------------');
}

//stampa dati su DOM
const cardContainer = document.getElementById('card-container');
for (let i = 0; i < myArrayTeams.length; i++) {
    //salvo in una variabile l'oggetto corrente
    const currentTeam = myArrayTeams[i];
    //contenitore per le card
    const card = document.createElement('div');
    card.classList.add('card');
    //IMG
    const imgElement = document.createElement('img');
    // Imposta il percorso dell'immagine.
    imgElement.src = `img/${currentTeam.src}`;
    // Imposta un testo alternativo per l'immagine, se desiderato
    imgElement.alt = currentTeam.name || 'Image';
    card.append(imgElement);
    //NAME
    const name = document.createElement('h3');
    name.append(currentTeam.name);
    card.append(name);
    //JOB
    const job = document.createElement('div');
    job.append(currentTeam.job);
    card.append(job);
    //stampo tutto
    cardContainer.append(card);
}