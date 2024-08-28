import fs from "fs";

let file = fs.writeFile("file-name.txt", "msgs", (e, d) => {
    fs.readFile("file-name.txt", (e, d) => {
        fs.writeFile(d, "Hey, how are you?\nI am good.", () => {
            fs.readFile(d, (e, d) => {
                console.log(d.toString());
            });
        });
    });
});