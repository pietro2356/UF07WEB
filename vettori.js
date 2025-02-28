// 2 metodi per creare un array (ovvero un vettore)
//         0  1  2  3  4  --> posizione
let arr = [1, 2, 3, 4, 5, undefined];

/* int arr[] = [34]; */

console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(arr.lenght + "\n");

console.log(arr[45]);

let arr2  = new Array();

for(let i = 0; i < arr.length; i++){
    if(arr[i] === undefined){
        arr[i] = -999;
    }
    console.log(arr[i]);
}

// funzione senza nome, vive solo all'interno del forEach
arr.forEach(() => {});

arr.forEach((val, i,) => {
    console.log("FE val N° " + i + ": ", val);
});

arr.forEach(function(val, i,){
    console.log("FE val N° " + i + ": ", val);
});

/**
 * Stampa il singolo elemento del vettore
 * @param {any} val valore del vettore
 * @param {number} i indice del vettore
 */

function stampa(val, i){
    console.log("FE val N° " + i + ":  ", val);
}
console.log(stampa(val, i));

// callback, cosa sono e come servono
arr.forEach(stampa);
arr2.forEach(stampa);
/*arr.forEach((val, i) => stampa(val, i)); */

/**
 * 
 * @param {number} val valore da elevare
 * @returns valore elevato
 */
function doPow(val){
    return Math.pow(val, 2);
}


// la funzione ".map" agisce direttamente sul vettore
const arrTmp = arr.map((val) => Math.pow(val, 2));
console.log(arrTmp);


function tempUnderTen(val){
    return val < 10;
}

const temp = arrTmp.filter((val) => val <= 15);
console.log(arrTmp);

let a = [1, 2, 4];
let b = a;

console.log(a);
console.log(b);

a[0] = "aivhan";

console.log(a);
console.log(b);

function nome (){}
const tt = () => {}

tt();

arr[20] = null;

console.log(arr);

