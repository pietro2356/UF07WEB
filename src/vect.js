//         0  1  2  3  4  5  .. 45
let arr = [1, 2, 3, 4, 5, 2000]; //[0.1, 0.2]
let arr2 = [1, 2, 3, 4, null, undefined];
let arr3 = [1, 2, 3, 4, null, undefined];
let arr4 = [1, 2, 3, 4, null, undefined];
let arr5 = [1, 2, 3, 4, null, undefined];

// int arr[] = [34];

console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(arr.length + "\n");

console.log(arr[10]);

//arr[10] = "Ciao sono all'indice 45";

console.log(arr[10]);
console.log("Length: ", arr.length);



let arr6 = new Array();

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === undefined){
//         arr[i] = -999;
//     }
//     console.log(arr[i]);
// }

/**
 * 
 */
// arr.forEach((val, i, vett) => {
//     console.log("FE val N° " + i + ": ", val);
// });


/**
 * Stampa il singolo elemento del vettore
 * @param {any} val valore del vettore
 * @param {number} i indice del vettore
 */
//               val    indice
function stampa(index, element){
    console.log("Stampa vettore indice N° " + index + ": ", element);
}

stampa({}, [], true);


// arr.forEach(stampa);

/**
 * Restiuisce il valore elevato a 2
 * @param {number} val valore da elevare
 * @returns valore elevato alla 2
 */
function doPow(val){
    return Math.pow(val, 2);
}

console.log(arr);
const arrTmp = arr.map(doPow);
console.log(arrTmp);

function tempUnderTen(val){
    return val < 10;
}

let temp = arrTmp.filter(tempUnderTen);
console.log(temp);

temp[0] = 9999;

console.log(arrTmp);
console.log(temp);


let a = [1,2,4];
let b = a;

console.log(a);
console.log(b);

a[0] = "aivhan";

console.log(a);
console.log(b);






function nome(){}
const tt = () => {}
function ff() {}
const rr = () => {}

tt()
rr()

ff()
arr[20] = null;

// console.log(arr);
