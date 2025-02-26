function logC(){console.log("C")}
function logA(){console.log("A")}

function logB(){console.log("B")}
function logD(){console.log("D")}

logA();


setTimeout(
    logD,
    2500
);

setTimeout(
    logB,
    1500
);

setTimeout(
    () => console.log("CIAO"),
    1500
);
setTimeout(
    () => console.log("A"),
    1500
);
setTimeout(
    () => console.log("TUTTI"),
    1500
);


logC();
