console.log("------------------Tutrial: Arrays-------------------");
console.log();
console.log();
console.log();


let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);

arr[3] = 34;

console.log(arr.length);

console.log(arr.toString());

let temp_arr = arr.join(" ");
console.log(temp_arr);

arr.push(343);
console.log(arr);

let poped = arr.pop();
console.log(poped, arr);

let shifted = arr.shift();
console.log(shifted, arr);

arr.unshift(123);
console.log(arr);

arr.splice(2, 2, 65, 34, 74);
console.log(arr);

console.log(arr.slice(3, 7));

arr.forEach(e => {
    console.log(e);
})

arr.forEach((e, i, arr) => {
    console.log(e, i, arr);
})

let map_arr = arr.map(e => {
    return e * 2;
})
console.log(map_arr);

let fil_arr = arr.filter(e => {
    return e % 2 == 0;
})
console.log(fil_arr);

let avg = arr.reduce((a, b, arr) => {
    return (a + b);
})
console.log(avg/arr.length);