let nome="Emmanuele";
let cognome="Grassi";
let matricola=239734;
let punteggio=0;

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
    
    return punteggio;
}
function esercizio5(){
    if (punteggio>314){
        console.log("Ottimo punteggio");
    }else{
        console.log("Buon punteggio");
    }
}
function esercizio6(){
    const SUFFICENZA=18; 
    //costante SUFFICENZA solo per stampare i voti >=18

    //Ciclo for
    console.log("Ciclo for");

    for (let voto=0;voto<=32;voto++){
        if (voto>=SUFFICENZA){
            if(voto>30){
                    console.log("30L");
            }else{
                console.log(voto);
            }
        }
    }   

    //Ciclo while
    console.log("Ciclo while");
    let voto = 0;

    while (voto <= 32) { 
       if (voto >= SUFFICENZA) { 
           if (voto > 30) {
              console.log("30L");
            } else {
               console.log(voto);
           }
       }
      voto++;
    }

    //Significato voti
    console.log("Significato voti:");
    for (let voto=0;voto<=32;voto++){
        switch(true){
            case (voto<17):
                console.log(`${voto}: INSUF`);
                break;
            case (17<=voto && voto<=19):
                console.log(`${voto}: Discreto`);
                break;
            case (20<=voto && voto<=24):
                console.log(`${voto}: Buono`);
                break;
            case (25<=voto && voto<=28):
                console.log(`${voto}: Distinto`);
                break;
            case (28<=voto):
                console.log(`${voto}: Ottimo`);
                break;
        }
    }
}
function esercizio7(){}
function esercizio8(){}