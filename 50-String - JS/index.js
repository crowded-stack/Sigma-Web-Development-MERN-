console.log("-------------------Tutorial: Strings--------------------");
console.log();
console.log();


let p_name = 'michel johnson';

console.log(p_name[3]);
p_name[3] = 'c';
console.log(p_name[3]);

let msg = "Let's discuss the idea of terminology \"Hexam\".";
console.log(msg);
msg = 'Do you know about \'Hexam\'?';
console.log(msg);
msg = 'What\'s your p_name? \nWhat\'s your age?';
console.log(msg);

msg = `Hey, how are you?
What's your p_name?
What's your age? 
Do you know about "Hexam"?`;
console.log(msg);


console.log(p_name.toUpperCase());
console.log(p_name.replace('chel', 'cle'));
console.log(p_name.slice(2));
console.log(p_name.slice(2, 4));
console.log(p_name.includes("chel"));
console.log(p_name.endsWith('en'));
console.log(p_name.startsWith('Mi'));

let name_parts = p_name.split(" ");
let c_name = "";
for ( part of name_parts){
    let c_part = part[0].toUpperCase() + part.slice(1);
    c_name = c_name.concat(c_part, " ");
}
console.log(c_name);