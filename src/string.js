let nome = "ATGGTTATTGGAA";

console.log(nome.length);
let nomeArr = nome.split("");
let arr = Array.from(nome);

let lower = arr.map((e) => e.toString().toLowerCase())

// ARR -> MAP -> FILTRATO -> CONTA
let count = arr
    .map(e => e.toString().toLowerCase())
    .filter(e => e === 'g')
    .length;

let mapped = arr.map(e => e.toString().toLowerCase());
let filtered = mapped.filter(e => e === 'g');
let cc = filtered.length;

console.log(count);

arr.push("AATTGGGTTAAA1".split(""));
console.log(arr);
arr = arr.flat();
console.log(arr);

console.log(arr.pop());
console.log(arr);


let c = 0;
arr.forEach(el => {
    let t = el.toLowerCase();
    if(t === 'g') c++;
});

console.log(c);

