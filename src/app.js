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


/**
 * ESERCIZIO 7
 */
function esercizio7() {
    let voto = document.getElementById('input7').value;
    if (voto < 0 || voto > 32) {
        console.error('Valore non valido. Inserire un numero tra 0 e 32.');
        return;
    }

    let dicitura;
    switch (true) {
        case (voto <= 16):
            dicitura = 'INSUF';
            break;
        case (voto <= 19):
            dicitura = 'DISCRETO';
            break;
        case (voto <= 23):
            dicitura = 'BUONO';
            break;
        case (voto <= 28):
            dicitura = 'DISTINTO';
            break;
        case (voto <= 32):
            dicitura = 'OTTIMO';
            break;
        default:
            dicitura = 'Errore valore maggiore di 32';
            break;
    }
    console.log(`Il voto ${voto} corrisponde a: ${dicitura}`);
}

/**
 * ESERCIZIO 8
 */
function esercizio8() {
    let dicitura = document.getElementById('input8').value.trim();
    let range;
    switch (dicitura.toUpperCase()) {
        case 'INSUF':
            range = '0-16';
            break;
        case 'DISCRETO':
            range = '17-19';
            break;
        case 'BUONO':
            range = '20-23';
            break;
        case 'DISTINTO':
            range = '24-28';
            break;
        case 'OTTIMO':
            range = '29-32';
            break;
        default:
            range = 'Dicitura non valida';
            break;
    }
    let rangeParts = range.split('-');
    if (rangeParts.length === 2) {
        let count = parseInt(rangeParts[1]) - parseInt(rangeParts[0]) + 1;
        console.log(`La dicitura ${dicitura.toUpperCase()} corrisponde al range di voti: ${range} -> ${count} voti`);
    } else {
        console.log(`La dicitura ${dicitura.toUpperCase()} corrisponde al range di voti: ${range}`);
    }
}