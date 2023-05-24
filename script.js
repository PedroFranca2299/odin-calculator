const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let expression = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function () {
        let buttonValue = button.textContent;

        if (buttonValue === '=') {
            const result = evaluateExpression(expression);
            console.log(result);
            if (!isFinite(result)) {
                displayError('Division by zero');
            } else {
                display.textContent = result;
            }
            expression = '';
        } else if(buttonValue === 'C') {
            clearDisplay();
        } else { 
            expression += buttonValue;
            display.textContent += buttonValue;
        }
        // return buttonValue;
    });
});

function evaluateExpression(expr) {
    // expr = expr.replace(/\s+/g, '');

    // // Evaluate parentheses first
    // while (expr.includes('(')) {
    //     expr = expr.replace(/\(([^()]+)\)/g, function(match, innerExpr) {
    //         return evaluateExpression(innerExpr);
    //     });
    // }

    // // Evaluate exponentiation
    // while (expr.includes('^')) {
    //     expr = expr.replace(/(-?\d+(?:\.\d+)?)\^(-?\d+(?:\.\d+)?)/g, function(match, base, exponent) {
    //         return Math.pow(parseFloat(base), parseFloat(exponent));
    //     });
    // }

    while (expr.includes('*') || expr.includes('/')) {
        expr = expr.replace(/(-?\d+(?:\.\d+)?)\s*([\/*])\s*(-?\d+(?:\.\d+)?)/g, function(match, operand1, operator, operand2) {
            if (operator === '*') {
                return parseFloat(operand1) * parseFloat(operand2);
            } else if (operator === '/') {
                return parseFloat(operand1) / parseFloat(operand2);
            }
        });
    }

    // Evaluate addition and subtraction
    while (expr.includes('+') || expr.includes('-')) {
        expr = expr.replace(/(-?\d+(?:\.\d+)?)\s*([\+\-])\s*(-?\d+(?:\.\d+)?)/g, function(match, operand1, operator, operand2) {
            if (operator === '+') {
                return parseFloat(operand1) + parseFloat(operand2);
            } else if (operator === '-') {
                return parseFloat(operand1) - parseFloat(operand2);
            }
        });
    }

    return expr;
}

function displayError(message) {
    display.textContent = 'Error: ' + message;
}

function clearDisplay() {
    display.textContent = '';
    expression = '';
}

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// let operand = parseInt(prompt('Type a positive integer'));

// let operator = prompt('Type a mathematical operator');

// let operandTwo = parseInt(prompt('Type a positive integer'));

// function operate () {
//     if (operator === '+') {
//        return add(operand, operandTwo);
//     }
    
//     if (operator === '-') {
//        return subtract(operand, operandTwo);
//     }
    
//     if (operator === '*') {
//         return multiply(operand, operandTwo);
//     }

//     if (operator === '/') {
//        return divide(operand, operandTwo);
//     }
// }



// operate();
// console.log(operate());

