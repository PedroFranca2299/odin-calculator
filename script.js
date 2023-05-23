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

    let currentOperation = '';
    let currentNumber = ''; 

    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i].trim();
        
        if (operators.includes(current)) {
            if (currentOperation === '') {
                currentOperation = current;
            } else {
                result = performOperation(result, currentOperation, currentNumber);
                currentOperation = current;
            }
            currentNumber = '';
    } else {
        currentNumber += current;
    }
    result = performOperation(result, currentOperation, currentNumber);  
    return result;
    }
}

function performOperation(result, operator, number) {
    let num = parseFloat(number);

    switch (operator) {
        case '*':
          result = multiply(parseFloat(result), num);
          break;
        case '/':
          result = divide(parseFloat(result), num);
          break;
        case '+':
          result = add(parseFloat(result), num);
          break;
        case '-':
          result = subtract(parseFloat(result), num);
          break;
        default:
          result = num;
          break;
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

