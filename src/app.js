/**
 * ESERCIZIO 1
 */
function esercizio1(){
    let nome = 'Matteo';
    let cognome = 'Bertotti';
    let matricola = '123456';
    console.log(nome);
    console.log(cognome);
    console.log(matricola);
    console.log(`Sono ${nome} ${cognome} e la mia matricola è ${matricola}`);
}
/**
 * ESERCIZIO 2
 */
function esercizio2a(){
    let nome = 'Matteo';
    let cognome = 'Bertotti';
    let temp = nome;
    nome = cognome;
    cognome = temp;
    console.log(nome); // Bertotti
    console.log(cognome); // Matteo
}

function esercizio2b(){
    let nome = 'Matteo';
    let cognome = 'Bertotti';
    [nome, cognome] = [cognome, nome];
    console.log(nome); // Bertotti
    console.log(cognome); // Matteo
}

/**
 * ESERCIZIO 3
 */
function esercizio3() {
    let matricola = 238734;
    console.log(`Parto come: ${typeof matricola}`);

    let matricolaString = matricola.toString();
    console.log(`Ora sono una stringa ${matricolaString}`);
    console.log(`Stai tranquillo sono di tipo: ${typeof matricolaString}`);

    let matricolaNumber = parseInt(matricolaString, 10);
    console.log(`Ora sono un numero ${matricolaNumber}`);
    console.log(`Stai tranquillo sono di tipo: ${typeof matricolaNumber}`);
}
/**
 * ESERCIZIO 4
 */
function esercizio4() {
    let punteggio = 0;
    punteggio += 13;
    punteggio -= 4;
    punteggio *= 4;
    punteggio /= 2;
    punteggio **= 2;
    console.log(punteggio);
    return punteggio;
}
/**
 * ESERCIZIO 5
 */
function esercizio5() {
    let punteggio = esercizio4();
    if (punteggio > 314) {
        console.log('Ottimo punteggio');
    } else {
        console.log('Buon punteggio');
    }
}