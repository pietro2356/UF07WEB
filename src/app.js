let nome = "Dio";
let cognome = "Brando";
let matricola = "123456";
let punteggio = 0;
let sufficienza = 18;

function esercizio1(){
    console.log("nome");
    console.log("cognome");
    console.log("matricola");
    console.log(`Nome: ${nome} Cognome: ${cognome} Matricola: ${matricola}`);
}

function esercizio2(){
    [nome, cognome] = [cognome, nome];
    console.log(`Nome: ${nome} Cognome: ${cognome} Matricola: ${matricola}`);
}

function esercizio3(){
    let matricolaStr = String(matricola);
    console.log(`Matricola come stringa: ${matricolaStr}, Tipo: ${typeof matricolaStr}`);
    let matricolaNum = Number(matricolaStr);
    console.log(`Matricola come numero: ${matricolaNum}, Tipo: ${typeof matricolaNum}`);
}


function esercizio4(){
    punteggio += 13;
    punteggio -= 4;
    punteggio *= 4;
    punteggio /= 2;
    punteggio **= 2;
    console.log(`Punteggio finale: ${punteggio}`);
}

function esercizio5(){
    if (punteggio > 314) {
        console.log("Ottimo Punteggio");
    }else{
        console.log("Buon Punteggio");
    }
}

