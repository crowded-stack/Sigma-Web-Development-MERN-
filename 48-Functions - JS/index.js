console.log("---------------Tutorial: Functions----------------");
console.log();
console.log();



// function printSum (a, b){
//     console.log(a + b);
// }

let a = 3;
let b = 5;
console.log();
console.log(sum());

function sum(a, b) {
    return a + b;
}

function avg(a = 1, b = 1) {
    console.log("normal");
    return (a + b) / 2;
}


let _avg =  (a, b) => {
    console.log("Arrow");
    return (a + b) / 2;
}


console.log(avg(3, 4));

