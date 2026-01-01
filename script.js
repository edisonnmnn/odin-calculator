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
        return "Invalid operator";
    }
}


// --- DOM References ---

const calculator = document.querySelector("#calculator");


// --- Functions ---

// Creating calculator buttons
function createCalcDigits() {

    // Calculator Display
    const display = document.querySelector(".display");
    display.textContent = "test";
    display.focus();

    const digitsDiv = document.querySelector(".digits-div");
    // Creating calculator digit buttons (1-9)
    for (let i = 0; i <= 2; i ++) {
        const digitRow = document.createElement("div");
        digitRow.classList.add("digit-row");
        for (let j = 1; j <= 3; j++) {
            const digit = document.createElement("button");
            digit.classList.add("digit");
            digit.textContent = `${(j + 3*i)}`;

            // Button Clicked
            digit.addEventListener("click", (event) => {
                const value = event.target.textContent;
                display.value += value;
            })

            digitRow.appendChild(digit);
        }
        const operator = document.createElement("button");
        operator.classList.add("operator");
        // operator.textContent = "op";
        if (i == 0) {
            operator.textContent = "+";
        } else if (i == 1) {
            operator.textContent = "-";
        } else {
            operator.textContent = "×";
        }

        operator.addEventListener("click", (event) => {
            const value = event.target.textContent;
            display.value += ` ${value} `;
        })

        digitRow.appendChild(operator);
        digitsDiv.appendChild(digitRow);
    }

    // Creating calculator digit button 0
    const digitLastRow = document.createElement("div");
    digitLastRow.classList.add("digit-last-row");
    
    const digitZero = document.createElement("button");
    digitZero.classList.add("digit");
    digitZero.textContent = "0";

    digitZero.addEventListener("click", (event) => {
        const value = event.target.textContent;
        display.value += value;
    })

    // Creating Clear button
    const clearBtn = document.createElement("button");
    clearBtn.classList.add("clear-btn");
    clearBtn.textContent = "clear";

    clearBtn.addEventListener("click", () => {
        display.value = "";
    })

    // Creating Equals button
    const equalsBtn = document.createElement("button");
    equalsBtn.classList.add("equal-btn");
    equalsBtn.textContent = "=";

    // TODO: Equals button should display the correct calculator operation
    // Write 

    // Creating Division button
    const divBtn = document.createElement("button");
    divBtn.classList.add("div-btn");
    divBtn.textContent = "÷";

    divBtn.addEventListener("click", (event) => {
        const value = event.target.textContent;
        display.value += ` ${value} `;
    })
    


    digitLastRow.appendChild(digitZero);
    digitLastRow.appendChild(clearBtn);
    digitLastRow.appendChild(equalsBtn);
    digitLastRow.appendChild(divBtn);
    digitsDiv.appendChild(digitLastRow);

}

// Creating calculator button (0
// Create calculator display
// Create clear button
// (have these two be in the same row)


// testing
console.log(operate(1, 3, "/"));
console.log(operate(1, 0, "/"));
createCalcDigits();

