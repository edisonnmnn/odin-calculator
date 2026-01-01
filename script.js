// --- Utility functions ---

function containsNonDigits(str) {
    const regex = /\D/;
    return regex.test(str);
}

// Basic Math Operators

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
        return "Division Error";
    }
    return a / b;
}

// operate() to operate an expression with an expression between two numbers
function operate(num1, num2, op) {

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (op == "+") {
        return calculateSum(num1, num2);
    } else if (op == "-") {
        return calculateDiff(num1, num2);
    } else if (op == "×") {
        return calculateProd(num1, num2);
    } else if (op == "÷") {
        return calculateDivision(num1, num2);
    } else {
        return "Invalid operator";
    }
}

// Calculator Error 

function showError () {
    num1 = 0;
    num2 = 0;
    op = "";
    display.value = "";

    alert("Error");
    return;
}

// -- Calculator operations -- 

// Operations will consist of a number, an operator, and another number.
// For example: "3 + 5"
// num1 = 3; op = "+"; num2 = 5
let num1 = 0;
let num2 = 0;
let op = "";


// --- DOM References ---

const calculator = document.querySelector("#calculator");

const display = document.querySelector(".display");
display.focus();

// --- Functions ---

// Creating calculator buttons
function createCalcDigits() {

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
            exp = display.value;
            const value = event.target.textContent;

            // If an operation already exists before the new operator,
            // run operateCalculator() on the expression and store that into num1
            if (containsNonDigits(exp)) {
                let res = operateCalculator(exp);
                display.value = `${res}`;
            }
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
        num1 = 0;
        num2 = 0;
        op = "";
        display.value = "";
    })

    
    // Creating Division button
    const divBtn = document.createElement("button");
    divBtn.classList.add("div-btn");
    divBtn.textContent = "÷";

    divBtn.addEventListener("click", (event) => {
        exp = display.value;
        const value = event.target.textContent;

        // If an operation already exists before the new operator,
        // run operateCalculator() on the expression and store that into num1
        if (containsNonDigits(exp)) {
            let res = operateCalculator(exp);
            display.value = `${res}`;
        }
        display.value += ` ${value} `;
    })

    // Creating Equals button
    const equalsBtn = document.createElement("button");
    equalsBtn.classList.add("equal-btn");
    equalsBtn.textContent = "=";

    equalsBtn.addEventListener("click", () => {
        let exp = display.value;
        let res = operateCalculator(exp);
        display.value = res;
    })

    


    digitLastRow.appendChild(digitZero);
    digitLastRow.appendChild(clearBtn);
    digitLastRow.appendChild(equalsBtn);
    digitLastRow.appendChild(divBtn);
    digitsDiv.appendChild(digitLastRow);
}

// Calculator logic
function operateCalculator(displayStr) {

    // !! Not used for testing
    // Validate calculator state before computing
    /*
    if (op === "" || display.value === "") {
        showError();
    }
    */

    values = displayStr.split(" ");

    // return current display if there are no operations
    if (values.length == 1) {
        return displayStr;
    } 

    num1 = values[0];
    op = values[1];
    num2 = values[2];

    // PRINT TEST
    console.log(`num1: ${num1} \nnum2: ${num2} \nop: ${op}`);

    result = operate(num1, num2, op);
    // If result is dividing 0, alert Error
    if (result == "Division Error") {
        alert("Error: Division by 0");
        num1 = 0;
        num2 = 0;
        op = "";
        display.value = "";
        return;
    }

    // return current number if user inputs consecutive operations
    if (Number.isNaN(result)) {
        return num1;
    }
 
    // Rounding number to 3 decimal places
    let roundedString = result.toFixed(3);

    // Store result in num1 for chaining result with more operations
    num1 = parseFloat(roundedString);

    return num1;
}

// Creating All Calculator Elements
createCalcDigits();

// testing
console.log(operateCalculator("10 + 23"));