let nome = "Dio";
let cognome = "Brando";
let matricola = "123456";

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
    let matricolaStr = string(matricola)
    console.log(`matricola come stringa ${matricolaStr},tipo ${typeof matricolaStr}`);
    let matricolaNum = Number(matricolaStr);
    console.log(`matricola come numero ${matricolaNum},tipo ${typeof matricolaNum}`);
}