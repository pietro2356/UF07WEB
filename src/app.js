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

function esercizio6for(){
    console.log("con for");
    for (let i = 0; i <= 32; i++) {
        let voto = i;
        if (voto >= 31) {
            console.log(`${voto}: 30L`);
        } else {
            console.log(voto);
        }
    }
    
}
function esercizio6while(){
    console.log(`con while`);
    let i = 0;
    while (i <= 32) {
        let voto = i;
        if (voto >= 31) {
            console.log(`${voto}: 30L`);
        } else {
            console.log(voto);
        }
        i++;
    }
}

const VOTI = [0, 1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
function esercizio6voto(){
    for (let i = 0; i < VOTI.length; i++) {
        switch (true) {
            case (VOTI[i] <= 16): console.log(`Insufficiente fai cagare Dio`); break;
            case (VOTI[i] <= 20): console.log(`discreto passato per dio`); break;
            case (VOTI[i] <= 24): console.log(`buono mah potevi fare di più studia coglion`); break;
            case (VOTI[i] <= 28): console.log(`distinto bravo dio ma non ti montare la testa`); break;
            case (VOTI[i] <= 32 ): console.log(`ottimo, sei stato bravissimo a copiare`); break;
        }
    }
    
}

function esercizio7(){
    voto = document.forms["votoDiDio"]["voto"].value;
    if (voto >= 0 && voto <= 32) {
        switch (true) {
            case (voto <= 16): console.log(`Insufficiente fai cagare Dio`); break;
            case (voto <= 20): console.log(`discreto passato per dio`); break;
            case (voto <= 24): console.log(`buono mah potevi fare di più studia coglion`); break;
            case (voto <= 28): console.log(`distinto bravo dio ma non ti montare la testa`); break;
            case (voto <= 32 ): console.log(`ottimo, sei stato bravissimo a copiare`); break;
        }
    }else{
        console.log(`See certo e tu credi che ` + voto + ` sia un voto valido??`);
    }
}

function esercizio8(){
    let parola = document.forms["rangeVotoDiDio"]["parola"].value.trim().toLowerCase(); 
    switch (parola) {
        case "insufficiente": console.log(`Insufficiente: range tra 0-16`); break;
        case "discreto": console.log(`Discreto: range tra 17-20`); break;
        case "buono": console.log(`Buono: range tra 21-24`); break;
        case "distinto": console.log(`Distinto: range tra 25-28`); break;
        case "ottimo": console.log(`Ottimo: range tra 29-32`); break;
        default: console.log(`${voto} non è una parola non valida`);
    }
}