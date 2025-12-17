// --- Utility functions ---


// Math Operators 

function calculateSum(a, b) {
    return a + b;
}

function calculateDiff(a, b) {
    return a - b;
}

function calculateProd(a, b) {
    return a * b;
}

function calculateDivision(a, b) {
    if (b == 0) {
        return "Division by 0";
    }
    return a / b;
}

// Calculator operations

// Operations will consist of a number, an operator, and another number.
// For example: "3 + 5"
// num1 = 3; op = "+"; num2 = 5
let num1 = 0;
let num2 = 0;
let op = "";

function operate(num1, num2, op) {
    if (op == "+") {
        return calculateSum(num1, num2);
    } else if (op == "-") {
        return calculateDiff(num1, num2);
    } else if (op == "*") {
        return calculateProd(num1, num2);
    } else if (op == "/") {
        return calculateDivision(num1, num2);
    } else {
        return "invalid operator";
    }
}


// --- DOM References ---

const calculator = document.querySelector("#calculator");


// --- Functions ---

// Creating calculator buttons
function createCalcDigits() {
    const digitsDiv = document.querySelector(".digits-div");

    // Creating calculator digit buttons (1-9)
    for (let i = 0; i <= 2; i ++) {
        const digitRow = document.createElement("digit-row");
        digitRow.classList.add("digit-row");
        for (let j = 1; j <= 3; j++) {
            const digit = document.createElement("button");
            digit.classList.add("digit");
            digit.textContent = `${(j + 3*i)}`;
            digitRow.appendChild(digit);
        }

        digitsDiv.appendChild(digitRow);
    }

    // Creating calculator digit button 0
    const digitZeroRow = document.createElement("digit-zero");
    digitZeroRow.classList.add("digit-zero-row");
    
    const digitZero = document.createElement("button");
    digitZero.classList.add("digit");
    digitZero.textContent = "0";

    digitZeroRow.appendChild(digitZero);
    digitsDiv.appendChild(digitZeroRow);



}

// Creating calculator button (0
// Create calculator display
// Create clear button
// (have these two be in the same row)


// testing
console.log(operate(1, 3, "/"));
console.log(operate(1, 0, "/"));
createCalcDigits();