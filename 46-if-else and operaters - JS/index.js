
console.log("Tutorial 46: If-else & Operators");


console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

let marks = 75;

if (marks > 60){
    var num = 23;
    console.log("Passed!");
}else {
    console.log("Failed");
}
// num = 34;
// console.log(num);


if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80){
    console.log("Grade: B");
} else if (marks >= 70){
    console.log("Grade: C");
}else if (marks >= 60){
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

console.log("------------------------- Operators -------------------------");
console.log();

let num1 = 23; 
let num2 = 22;

console.log("Arithmetic Operators: -------");
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(++num1);
console.log(num1++);
console.log(--num1);
console.log(num1--);

console.log();
console.log();
console.log();
console.log();

console.log("Assignment Operator: -------");
console.log();


num1 += num2;
num1 -= num2;
num1 *= num2;
num1 /= num2;
console.log("Div As: ", num1 , "num2 = ", num2);
num1 **= num2;
console.log("Ex As: ", num1);
num1 %= num2;



console.log();
console.log();
console.log();
console.log();


console.log("Comparison Operator: -------");
console.log();

num = 3;
let numS = "3";

// >
// <
// ==
// <=
// >=
// !==

if (num === numS) {
    console.log("It checks value and type.");
} else {
    
}




console.log();
console.log();
console.log();
console.log();


console.log("Logical Operator: -------");
console.log();

let div = true; 
if (div && num1 > num2) {
    console.log(num1 / num2);
} 

else if (!div || num1 < num2){
    console.log(num1 * num2);
}

else {
    
}



console.log();
console.log();
console.log();
console.log();


console.log("Ternary Operator: -------");
console.log();

console.log(num1 == 0 ? num1+=1 : num1 && num2 == 0 ? num2+=1 : "num = "+num2);
console.log("num1 = ", num1, " num2: ", num2, "  ---   ",  num1 > num2 ? num1/num2 : num1 * num2);




console.log("-----------Questions----------");
console.log();


console.log("Q1: ------");

let age = 23;

if (age >= 10 && age <= 20) {
    console.log("Age between 10-20");
} else {
    console.log("Age is not between 10-20");
}