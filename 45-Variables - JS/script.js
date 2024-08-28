

var a;
let b;
const c = 12;
a = 23;

console.log('a = ',a);
console.log('b = ', b);
console.log('c = ', c);

const url = "";
let profile = "p global";
{
    var a = 35;
    // console.log("url ",url);
    console.log("profile ", profile);
    // let profile = "p scoped";
    console.log("profile ", profile);
    const url = "";
    console.log("url se ",url);
}

console.log(a);


let _a = 34;
// let &f = 22; special chars can't be used in variable names except $
// let f&a = 11;
let a$b = 's';

console.log(typeof a$b);
console.log('adf ', b + a$b);


// Data types 

let name = "Ali";
let age = 23;
let cgpa = 3.50;
let rank = null;
let is_married = true;
let salary = BigInt(12000);

console.log(typeof name, typeof age, typeof cgpa, typeof rank, typeof is_married, typeof salary);


let employee = {
    "job title": "Android Developer",
    name: "",
    cgpa: 2.3
}

console.log(employee);
employee.name = name;
employee.age = age;
employee.cgpa = cgpa;
console.log(employee);
console.log("CGPA: ", employee['cgpa']);