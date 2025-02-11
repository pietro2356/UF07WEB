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