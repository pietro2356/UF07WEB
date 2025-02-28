let nome = "ATGGTTAATGGATAT";

console.log(nome.length);
let nomeArr = nome.split(""); // funzione legata ai valori di tipo stringa
let arr = Array.from(nome); // come la funzione .split ma non legata al tipo dei valori

console.log(Array.isArray(nomeArr)); // unica funzione che permette di controllare se effettivamente un array è un vettore (e non un oggetto come dire la funzione typeof)

console.log(nomeArr.filter((val) => val === 'e').length);

arr.map((e) => e.toString().toLowerCase());


// ARR -> MAP -> FILTRATO -> CONTA
let count = arr
    .map(e => e.toString().toLowerCase())
    .filter(e => e === 'g')
    .length;

let mapped = arr.map(e => e.toString().toLowerCase());
let filtere = mapped.filter(e => e === 'g');
let cc = filtere.length;

console.log(count);

arr.push("FUAIFDKS1".split("")); // aggiunge l'elemento che noi passiamo (stringa, booleano, numero)
console.log(arr);
arr = arr.flat();
console.log(arr);

let c = 0;
arr.forEach(el => {
    let t = el.toLowerCase();
    if(t === 'g') c++;
});

console.log(c);