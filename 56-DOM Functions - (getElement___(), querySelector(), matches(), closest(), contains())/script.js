
let allDivs = document.getElementsByTagName("div");

let sameClassElements = document.getElementsByClassName("box");

let elementById = document.getElementById("box-3");

let firstElementByClassName = document.querySelector(".box");

let elementById2 = document.querySelector("#box-3");

let elementsByClassName = document.querySelectorAll(".box");

let isBox3HasIdSelector = elementsByClassName[2].matches("#box-3");

let isBoxHasSelectorInParents = elementsByClassName[4].closest(".container");
let isBoxHasSelectorInParents2 = elementsByClassName[4].closest(".box");
let isBoxHasSelectorInParents3 = elementsByClassName[4].closest("body");


elementsByClassName.forEach((e, i) => {
    e.style.width = "85px";
    e.style.height = "85px";
    e.style.margin = "12px";
    e.style.border = "2px solid black";
    e.style.display = "flex";
    e.style.alignItems = "center";
    e.style.justifyContent = "center";

    e.style.border = "2px solid black";
    i % 2 == 0 ? e.style.backgroundColor = "red" : e.style.backgroundColor = "green";
})