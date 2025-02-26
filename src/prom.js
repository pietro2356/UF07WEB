/**
 * Decide se il razzo vole ao fa boom
 * @param {*} resolve 
 * @param {*} reject 
 */
function myPromManager(resolve, reject) {
  setTimeout(() => {
    let rnd = +Math.random().toFixed(2);
    if (rnd >= 0.7) {
      Promise.resolve("🚀");
    } else {
        Promise.reject("🔥");
    }
  }, 500);
}

/**
 * 
 */
const resolver = () => {};

/**
 * 
 */
const rejecter = () => {};

myPromManager("",3);


const myProm2 = new Promise(myPromManager)
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
    .finally(() => console.log("fine"));

// const logThen = (data) => console.log("La promise dice: ", data);
// const logCatch = (err) => console.error("Errore: ", err);
// const logFinally = () => console.log("Promise completata: ", myProm);

// const myProm = new Promise(myPromManager);

// console.log("INIZIO PROMISE");

// console.log(myProm);

// myProm
//     .then(logThen) // fulfilled
//     .catch(logCatch) // rejected
//     .finally(logFinally) // entrambi

// console.log("FINE PROMISE");
// logThen('🚑');

