// V1
let boxes = document.querySelectorAll(".box");


// V2
// let boxes = document.body.children[0].children;
// let boxes = document.getElementsByTagName("div");
// let boxes = document.getElementsByClassName("box");

let colors = {
    1: 'red',
    2: 'green',
    3: 'Yellow',
    4: 'blue',
    5: 'purple',
    6: 'brown',
    7: 'orange',
    8: 'gray'
};

let randomColor = () => {
   return '#' + Math.ceil(Math.random() * Number.parseInt('ffffff', 16)).toString(16);
}

// V1
boxes.forEach(e => {
    let rand_num = Math.floor(Math.random() * 8 + 1);
    e.style.backgroundColor = randomColor();
})

// V2
// for (box of boxes) {
//     let rand_num = Math.floor(Math.random() * 8 + 1);
//     box.style.backgroundColor = colors[rand_num];
// }