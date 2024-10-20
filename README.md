Concetti JavaScript

1) Intro
Quando ci viene restituito un dato dall'utente è sempre una stringa, Es. se viene restituito età 18 sarà una stringa da convertire in numero per eseguire eventuali operazioni.
document.getElementById('app') = mostra l'oggetto html
.innerHTML = mostra il suo valore
NB: js non è un linguaggio tipizzato, non dobbiamo definire che tipo di dato conterà la variabile.
NB: usare const se non riassegnamo valore alla variabile

2) Istruzioni condizionali
Operatori relazionari: differenza tra == e ===
== ugualianza
!= diversità
ugualianza di valore e tipo
=== identità
disugualianza di valore e tipo
!== non identità

Operatori logici
- due operatori binari (che richiedono due operandi)
AND &&
restituisce vero se entrambi gli operandi sono veri
OR ||
restituisce vero se almeno uno degli operandi è vero
- un operatore unario (che richiede un operando)
NOT !
cambia il valore di verità dell'operando
NB: .length per saper la lunghezza di una stringa

3) Manipolazione del DOM
javascript può:
- modificare HTML
- reagire ad eventi
- interagire con il browser

DOM (Document Object Model) è una rappresentazione ad albero di dati strutturati insieme di elemnti html che compongono la pagina
NB. javascript è l'unico linguaggio di programmazione a permettere di modificare il DOM
NB: più di 80 selettori per modificare il DOM  https://developer.mozilla.org/en-US/docs/Web/API/Document
typeof: permete di vedere il tipo di dato

NB: Con JS è possibile rimuovere classi indesiderate da framework.
differenza tra innertext e innerhtml e che in html si puo scrivere del codice Es. <p>ciao</p>  


