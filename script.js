function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

let num1 = 0;
let num2 = 0;
let op = "";

function operate(num1, op, num2) {
    switch (op) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            alert("Switch statement not working");
            break;
    }
}


const clear = document.querySelector('.clear');
clear.addEventListener("click", () => {
    populateDisplay("")
}
);

const divideBtn = document.querySelector('.divide');
divideBtn.addEventListener("click", () => {
    populateDisplay("/")
}
);

const seven = document.querySelector('.seven');
seven.addEventListener("click", () => {
    populateDisplay(7);
}
);

const eight = document.querySelector('.eight');
eight.addEventListener("click", () => {
    populateDisplay(8);
}
);

const nine = document.querySelector('.nine');
nine.addEventListener("click", () => {
    populateDisplay(9);
}
);

const multiplyBtn = document.querySelector('.multiply');
multiplyBtn.addEventListener("click", () => {
    populateDisplay("*");
}
);
const four = document.querySelector('.four');
four.addEventListener("click", () => {
    populateDisplay(4);
}
);

const five = document.querySelector('.five');
five.addEventListener("click", () => {
    populateDisplay(5);
}
);

const six = document.querySelector('.six');
six.addEventListener("click", () => {
    populateDisplay(6);
}
);

const subtractBtn = document.querySelector('.subtract');
subtractBtn.addEventListener("click", () => {
    populateDisplay("-");
}
);

const one = document.querySelector('.one');
one.addEventListener("click", () => {
    populateDisplay(1);
}
);

const two = document.querySelector('.two');
two.addEventListener("click", () => {
    populateDisplay(2);
}
);

const three = document.querySelector('.three');
three.addEventListener("click", () => {
    populateDisplay(3);
}
);

const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
    populateDisplay("+");
}
);

const zero = document.querySelector('.zero');
zero.addEventListener("click", () => {
    populateDisplay(0);
}
);

const decimal = document.querySelector('.decimal');
decimal.addEventListener("click", () => {
    populateDisplay(".");
}
);


function populateDisplay(value) {
    const Display = document.querySelector('.Display');
    Display.innerHTML = value;
}