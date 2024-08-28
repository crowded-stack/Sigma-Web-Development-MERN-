

// Questions #1: The Double Trouble: You are tasked with writing a function 
// that doubles each element in an array. However, there's
//  a catch: if the array contains consecutive duplicate elements, 
//  only double one of them.

const double = (nums) => {
    return nums.map((e, i, arr) => {
        return i > 0 && arr[i-1] == e ? e : (e*2);
    })

}

// console.log(double([1,2,2,3]));



// Question #3: The Mirror Mirror: Imagine you have a string, and you need to create a
//  new string that is a mirror image of the original. Write a function that
//   appends the reversed version of the original string to itself.

const reverse_append = (string) => {
    let new_string = '';
    for (let i = string.length-1; i >= 0; i--) {
        new_string += string[i];
    }
    
    return string + new_string;
}

// console.log(reverse_append("fluctuate"));


// Question #4: The Password Validator: You are building a password validation 
// feature. Create a function that checks if a given password meets 
// the following criteria: at least 8 characters long, contains both
//  uppercase and lowercase letters, and includes at least one digit.

const validate_password = (password) => {
    return password.length >= 8 && containsUppercase(password)  && containsNumber(password);

}

function containsUppercase(string) {
    return string != string.toLowerCase();
}

function containsNumber(string) {
    for (const ch of string) {
        if (!isNaN(ch)) {
            return true;
        }
    }
    return false;
}

// console.log(validate_password('Fluctuate12'));



// Question #5: The Sum Selector: You are working on a function that should sum all
//  numbers in an array until it encounters a negative number.
//   Write a function that performs this summation.

const sum_positives = (nums) => {
    let sum = 0;
    for (const num of nums) {
        if (num < 0){
            break;
        }
        sum += num;
    }
    return sum;
}

console.log(sum_positives([2, 1, 5, 2, 3, -2, 3, 1]));