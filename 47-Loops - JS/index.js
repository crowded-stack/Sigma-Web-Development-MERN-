console.log("--------------Tutorial: Loops---------------");
console.log();
console.log();
console.log();
console.log();


console.log("For Loop --------");
console.log();

let num = 2;
for (let i = 0; i <= 10; i++){
    console.log(num, " * ", i, " = ", num * i);
}



console.log();
console.log();
console.log();
console.log();


console.log("For-in Loop --------");
console.log();

let address = {
    house: '135',
    street: '3',
    town: 'Model Town',
    city: 'Sialkot'
}

let person = {
    name: "Ali",
    age: 34,
    gender: 'Male',
    address: address
}

for (key in person) {
    console.log(key, ": ", person[key]);
}



console.log();
console.log();
console.log();
console.log();


console.log("For-of Loop --------");
console.log();

let persons = [person, person]

for (person of persons){
    console.log(person);
}

let name = "Hamza Ali";
for (alpha of name){
    console.log(alpha);
}



console.log();
console.log();
console.log();
console.log();


console.log("While Loop --------");
console.log();

let s = "afafdakfdskiadfksfkiie";
let i = 0;
while (s[i] != 'i'){
    console.log(s[i]);
    i++;
}




console.log();
console.log();
console.log();
console.log();


console.log("Do-while Loop --------");
console.log();

let j = 0;
do {
    console.log(j);
    j++;
}while (j < 10);

