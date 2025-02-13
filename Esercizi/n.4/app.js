const INSUF = 15;
const SUFFICIENZA = 18;
const DISCRETO = 21;
const BUONO = 24;
const DISTINTO = 27;
const OTTIMO = 30;

let nome = "Tommaso";
let cognome = "Locatelli";
let matricola = "2300";
let punteggio = 0;

window.onload = punto1;

function punto1(){
    console.log("Punto 1:");

    console.log("Nome : "+nome);
    console.log("Cognome : "+cognome);
    console.log("Matricola : "+matricola);

    console.log("Sono "+nome+" "+cognome+" e la mia matricola è : "+matricola);

    punto2();
}
function punto2(){
    console.log("Punto 2:");

    let variabileScambio = " ";
    nome = "Locatelli";
    cognome = "Tommaso";
    console.log("Nome : "+nome);
    console.log("Cognome : "+cognome);

    console.log("Ora scambieremo le variabili usando la variabileScambio");

    variabileScambio = nome;
    nome = cognome;
    cognome = variabileScambio;
    console.log("Nome : "+nome);
    console.log("Cognome : "+cognome);

    console.log("Ora scambieremo le variabili senza usare variabileScambio");

    nome = "Locatelli";
    cognome = "Tommaso";

    nome = cognome+nome;
    cognome = nome.slice(cognome.length-nome.length);
    nome = nome.slice(nome.at(1), (nome.length - cognome.length));

    console.log("Nome : "+nome);
    console.log("Cognome : "+cognome);

    punto3();
}

function punto3(){
    console.log("Punto 3:");

    matricola = 2300;
    console.log("Matricola int:"+matricola);
    console.log("Matricola è un numero intero :"+(Number.isInteger(matricola)));

    matricola = matricola.toString();
    
    console.log("Matricola String:"+matricola);
    console.log("Matricola è un numero intero :"+(Number.isInteger(matricola)));

    matricola = parseInt(matricola);

    console.log("Matricola int:"+matricola);
    console.log("Matricola è un numero intero :"+(Number.isInteger(matricola)));

    matricola = matricola.toString();
    
    punto4();
}

function punto4(){
    console.log("Punto 4:");

    console.log("Punteggio + 13 :"+(punteggio+=13));
    console.log("Punteggio - 4 :"+(punteggio-=4));
    console.log("Punteggio * 4 :"+(punteggio*=4));
    console.log("Punteggio / 2 :"+(punteggio/=2));
    console.log("Punteggio elevato 2 :"+(punteggio**=2));

    punto5();
}

function punto5(){
    console.log("Punto 5");

    if(punteggio>314){console.log("Ottimo punteggio")}
    else {console.log("Buon punteggio")}

    punto6();
}

function punto6(){
    console.log("Punto 6");
    
    console.log("Ciclo for");
    for(let i = 0; i<=32; i++){
        if(i<=INSUF){ console.log("Inferiore : "+i+" INSUF"); }
        else if(i<=SUFFICIENZA){ console.log("Suff. : "+i+" SUFFICIENZA"); }
        else if(i<=DISCRETO){ console.log("Supreiore : "+i+" DISCRETO"); }
        else if(i<=BUONO){ console.log("Supreiore : "+i+" BUONO"); }
        else if(i<=DISTINTO){ console.log("Supreiore : "+i+" DISTINTO"); }
        else if(i<=OTTIMO){ console.log("Supreiore : "+i+" OTTIMO"); }
        else{ console.log("Supreiore : "+i+" OTTIMO E LODE"); }
    }
    console.log("Ciclo while");
    i = 0;
    while(i<=32){
        if(i<=INSUF){ console.log("Inferiore : "+i+" INSUF"); }
        else if(i<=SUFFICIENZA){ console.log("Suff. : "+i+" SUFFICIENZA"); }
        else if(i<=DISCRETO){ console.log("Supreiore : "+i+" DISCRETO"); }
        else if(i<=BUONO){ console.log("Supreiore : "+i+" BUONO"); }
        else if(i<=DISTINTO){ console.log("Supreiore : "+i+" DISTINTO"); }
        else if(i<=OTTIMO){ console.log("Supreiore : "+i+" OTTIMO"); }
        else{ console.log("Supreiore : "+i+" OTTIMO E LODE"); }
        i++;
    }
    punto7();
}

function punto7(){
    console.log("Punto 7");
    
    let voto = null;

    while (voto != "STOP") {
        voto = prompt("Inserisci un voto da 0 a 32:");

        if(voto != "STOP"){voto = parseInt(voto, 10);}

        if (typeof voto !== 'number' || !Number.isInteger(voto) && voto != "STOP") {
            console.log("Errore: Il voto deve essere un numero intero.");
        }
        else if (voto < 0 || voto > 32) {
            console.log("Errore: Il voto deve essere compreso tra 0 e 32.");
        }
        else if (voto <= INSUF) {
            console.log("Inferiore : " + voto + " INSUF");
        } else if (voto <= SUFFICIENZA) {
            console.log("Suff. : " + voto + " SUFFICIENZA");
        } else if (voto <= DISCRETO) {
            console.log("Superiore : " + voto + " DISCRETO");
        } else if (voto <= BUONO) {
            console.log("Superiore : " + voto + " BUONO");
        } else if (voto <= DISTINTO) {
            console.log("Superiore : " + voto + " DISTINTO");
        } else if (voto <= OTTIMO) {
            console.log("Superiore : " + voto + " OTTIMO");
        } else {
            console.log("Superiore : " + voto + " OTTIMO E LODE");
        }
    }
    console.log("Fine ciclo");
    
    punto8();
}
function punto8(){
    console.log("Punto 8");
        
    let voto = null;

    while (voto != "STOP") {
        voto = prompt("Inserisci un voto da INSUFF a OTTIMO E LODE:");

        if (voto != "INSUF" && voto != "SUFFICIENZA" && voto != "DISCRETO" && voto != "BUONO" && voto != "DISTINTO" && voto != "OTTIMO" && voto != "OTTIMO E LODE") {
            console.log("Errore: Il voto deve essere INSUF, SUFFICIENZA, DISCRETO, BUONO, DISTINTO, OTTIMO o OTTIMO E LODE.");
        }
        else if (voto == "INSUF") {
            console.log("INSUF : " + 0 + " - "+INSUF+" range : "+ (INSUF-0));
        } else if (voto == "SUFFICIENZA") {
            console.log("SUFFICIENZA : " + (INSUF+1) + " - "+SUFFICIENZA+" range : "+ (SUFFICIENZA-INSUF));
        } else if (voto == "DISCRETO") {
            console.log("DISCRETO : " + (SUFFICIENZA+1) + " - "+DISCRETO+" range : "+ (DISCRETO-SUFFICIENZA));
        } else if (voto == "BUONO") {
            console.log("BUONO : " + (DISCRETO+1) + " - "+BUONO+" range : "+ (BUONO-DISCRETO));
        } else if (voto == "DISTINTO") {
            console.log("DISTINTO : " + (BUONO+1) + " - "+DISTINTO+" range : "+ (DISTINTO-BUONO));
        } else if (voto == "OTTIMO") {
            console.log("OTTIMO : " + (DISTINTO+1) + " - "+OTTIMO+" range : "+ (OTTIMO-DISTINTO));
        } else {
            console.log("OTTIMO E LODE  : " + (OTTIMO+1) + " - "+ 32+" range : "+ (32-OTTIMO));
        }
    }
    console.log("Fine ciclo");
}