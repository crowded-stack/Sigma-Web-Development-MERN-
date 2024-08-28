

function print_table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);        
    }
}

// (function main() {
//     print_table(5);
// })()

// (function () {
//     print_table(8);
// })();


(() => {
    console.log(num);
    var num;
    print_table(3);
})();

num = 23;

let nums = [1, 2, 3, 4, 5];
let [a, b, ...rest] = nums;

console.log(`Avg. = ${sum(...nums)/3}`);
console.log("nums ", ...nums);
const print_array = (...numbs) => {
    console.log("numbers", numbs);
}

print_array(...nums)

function sum(num1, num2, num3) {
    return num1+num2+num3;
}

let person = {
    name: 'Ali',
    age: 23,
    gender: 'Male',
    phone: '03214455654'
};
let {name, phone} = person;




