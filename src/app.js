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
/**
 * ESERCIZIO 6
 */
function esercizio6() {
    const SUFFICIENZA = 18;
    let output = '';
    for (let i = SUFFICIENZA; i <= 32; i++) {
        if (i === 31 || i === 32) {
            output += '30L\n';
        } else {
            output += i + '\n';
        }
    }
    console.log('Con for: \n'+output);

    output = '';
    let i = SUFFICIENZA;
    while (i <= 32) {
        if (i === 31 || i === 32) {
            output += '30L\n';
        } else {
            output += i + '\n';
        }
        i++;
    }
    console.log('Con while: \n'+output);

    const INSUF = 'INSUF';
    const DISCRETO = 'DISCRETO';
    const BUONO = 'BUONO';
    const DISTINTO = 'DISTINTO';
    const OTTIMO = 'OTTIMO';

    output = '';
    for (let i = 0; i <= 32; i++) {
        switch (true) {
            case (i <= 16):
                output += `${i}: INSUF \n`;
                break;
            case (i <= 19):
                output += `${i}: DISCRETO \n`;
                break;
            case (i <= 23):
                output += `${i}: BUONO \n`;
                break;
            case (i <= 28):
                output += `${i}: DISTINTO \n`;
                break;
            case (i <= 32):
                output += `${i}: OTTIMO \n`;
                break;
            default:
                console.error('Errore valore maggiore di 32');
                break;
        }
    }
    console.log('DICITURE: \n' + output);
}
