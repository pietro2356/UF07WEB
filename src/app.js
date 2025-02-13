let nome="Emmanuele";
let cognome="Grassi";
let matricola=239734;

function esercizio1(){
    console.log(nome);
    console.log(cognome);
    console.log(matricola);
    console.log(`Sono ${nome} ${cognome} e la mia matricola è ${matricola}`);
}

function esercizio2(){
    console.log("Con 3 variabili:");
    //scambio nome e cognome con 3 variabili
    console.log(`Nome:${nome}`);
    console.log(`Cognome:${cognome}`);
    let cambio="";

    cambio=cognome; 
    cognome=nome;
    nome=cambio;

    console.log(`Nome:${nome}`);
    console.log(`Cognome:${cognome}`);

    console.log("Con 2 variabili: (ripristino valori)");
    //scambio nome e cognome con 2 variabili
    [nome,cognome]=[cognome,nome];
    console.log(`Nome:${nome}`);
    console.log(`Cognome:${cognome}`);
}

function esercizio3(){
    console.log(`La variabile matricola all'inizio è di tipo ${typeof matricola}`);
    matricola=String(matricola);
    console.log(`Ora la variabile matricola è di tipo ${typeof matricola}`);
    matricola=Number(matricola);
    console.log(`Alla fine la variabile matricola è di tipo ${typeof matricola}`);
}
function esercizio4(){
    let punteggio=0;
    console.log(`Punteggio: ${punteggio}`);
    punteggio+=13;
    console.log(`Punteggio: ${punteggio}`);
    punteggio-=4;
    console.log(`Punteggio: ${punteggio}`);
    punteggio*=4;
    console.log(`Punteggio: ${punteggio}`);
    punteggio/=2;
    console.log(`Punteggio: ${punteggio}`);
    punteggio**=2
    console.log(`Punteggio: ${punteggio}`);     
}
function esercizio5(){}
function esercizio6(){}
function esercizio7(){}
function esercizio8(){}