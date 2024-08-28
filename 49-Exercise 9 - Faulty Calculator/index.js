console.log("--------------Exercise 9: Faulty Calculator--------------");
console.log();
console.log();
console.log();
console.log();

let rand_nums = [];

for (let index = 0; index < 2; index++) {
    rand_nums.push(Math.floor(Math.random() * 10) + 1);
}

for (let i = 0; i < 10; i++) {
    console.log("Entery two numbers and operation (+, -, *, /).");
    let num1 = 3;
    let num2 = 4;
    let op = '+';
    let result = 0;
    let right_term = rand_nums.pop();

    if ( right_term != i){
        switch (op) {
            case '+':
                result = num1 * num2;
                break;
            case '-':
                result = num1 / num2;
                break;
            case '*':
                result = num1 ** num2;
                break;
            case '/':
                result = num1 % num2;
                break;
            default:
                console.log("N/A");
        }
        rand_nums.push(right_term)
    }else {
        switch (op) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                console.log("N/A");
        }
    }
    console.log("Result: ",result);
}




