let nome = "Pietro";
let eta = 12;


function somma(val1, val2){
    return val1 + val2;
}

function sottrai(val1, val2){
    return val1 - val2;
}

// moltiplica
const moltiplica = (val1, val2) => {
    return val1 * val2;
}
let start = 10;
let end = 12;

const conta = (start, end) => {
    console.log("Start: ", start);
    console.log("End: ", end);

    for(let i = start; i <= end; i++){
        console.log(i);
    }

    console.log("------");
}

let count = start;
while (count <= end) {
    console.log(count);
    count++;
}

conta();


// let res = somma(2, 4);
// console.log("Risultato + :  ", res);

// res = sottrai(2, 4);
// console.log("Risultato - : ", res);

// res = moltiplica(2, 4);
// console.log("Risultato * : ", res);