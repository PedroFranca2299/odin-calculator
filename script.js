const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
let expression = '';

buttons.forEach(function(button) {
    button.addEventListener('click', function () {
        let buttonValue = button.textContent;

        if (buttonValue === '=') {
            display.textContent = evaluateExpression(expression);
            expression = '';
        } else {
            expression += buttonValue;
            display.textContent += buttonValue;
        }
        // return buttonValue;
    });
});

function evaluateExpression(expr) {
    const operators = ['+', '-', '*', '/'];
    let result = '';
    let numbers = expr.split(/(\+|\-|\*|\/)/);

    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i].trim();
        
        if (operators.includes(current)) {
            result += current;
        } else if (i === 0) {
            result = current;
        } else {
            let operator = result.slice(-1);
            let previous = parseFloat(result.slice(0, -1));
            let currentNum = parseFloat(current);

            switch (operator) {
                case '+':
                  result = add(previous, currentNum);
                  break;
                case '-':
                  result = subtract(previous, currentNum);
                  break;
                case '*':
                  result = multiply(previous, currentNum);
                  break;
                case '/':
                  result = divide(previous, currentNum);
                  break;
                default:
                  break;
            }
        }
    }
    return result;
}
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

