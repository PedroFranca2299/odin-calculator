function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let operand = parseInt(prompt('Type a positive integer'));

let operator = prompt('Type a mathematical operator');

let operandTwo = parseInt(prompt('Type a positive integer'));

function operate () {
    if (operator === '+') {
       return add(operand, operandTwo);
    }
    
    if (operator === '-') {
       return subtract(operand, operandTwo);
    }
    
    if (operator === '*') {
        return multiply(operand, operandTwo);
    }

    if (operator === '/') {
       return divide(operand, operandTwo);
    }
}

operate();
console.log(operate());

