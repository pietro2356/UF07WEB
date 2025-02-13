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