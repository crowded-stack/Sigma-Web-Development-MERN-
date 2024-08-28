console.log("Setup Node Project");

var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b = slugify('some * $ string', '_') 
console.log(b);