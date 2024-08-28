import fs from "fs/promises";

let file_name = await fs.readFile('file-name.txt');
await fs.appendFile(file_name, "\nWhat are you doing next?\nI am going for lunch.");
let msgs = await fs.readFile(file_name);
console.log(msgs.toString());