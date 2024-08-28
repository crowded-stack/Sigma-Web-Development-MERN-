console.log("--------------------Exercise 11: Factorial--------------------");
console.log();
console.log();
console.log();



let num = Number.parseInt(prompt("Enter number to find factorial."));
let num_parts = [];
let fact = 1;

for (let i = 0; i < num; i++) {
    num_parts[i] = num - i;
}

fact = num_parts.reduce((a, b) => {
    return a * b;
})

alert(`${num}! = ${fact}`);