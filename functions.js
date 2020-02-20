let result = 0;
let screen = '';
let lastOperator = '+';
let lastResult = 0;

document.querySelectorAll('.btn').forEach(btn => {btn.addEventListener('click', calculator)});

function calculator() {
        let input = this.textContent;
        let screenValue = document.querySelector('.screen');

        if (input === "=") {
            getResult(screenValue.textContent, input);
            screenValue.textContent = '';
            lastOperator = '+';
            lastResult = 0;
        }
        else if (input === "+" || input === "-" || input === "*" || input === "/") {
            screen = screenValue.textContent;
            getResult(screenValue.textContent, input);
            screenValue.textContent = '';
        }
        else if (input === ".") {
            screen = screenValue.textContent;
            if (screen[screen.length - 1] === "+" || screen[screen.length - 1] === "-" || screen[screen.length - 1] === "*" || screen[screen.length - 1] === "/" || !screen[screen.length - 1]) {
                screen += '0' + input;
                screenValue.textContent = screen;
            }
            else if (screen[screen.length - 1] === ".") {

            }
            else {
                screenValue.textContent += input;
            }

        }
        else if (input === "C") {
            screen = screenValue.textContent;
            screenValue.textContent = screen.substring(0, screen.length - 1);
        }
        else if (input === "AC") {
            screenValue.textContent = '';
            lastOperator = '+';
            lastResult = 0;
            document.querySelector('.resultscreen').textContent = '';

        }
        else {
            screenValue.textContent += input;
        }
}
function getResult(newValue, newOperator) {
    lastResult = Number(lastResult);
    newValue = Number(newValue);
    if (lastOperator == '+') {
        lastResult = lastResult + newValue;
    }
    else if (lastOperator == '-') {
        lastResult = lastResult - newValue;
    }
    else if (lastOperator == '*') {
        lastResult = lastResult * newValue;
    }
    else if (lastOperator == '/') {
        if(newValue===0){
            return;
        }
        lastResult = lastResult / newValue;
    }
    lastOperator = newOperator;
    let resultScreenValue = document.querySelector('.resultscreen');
    if (newOperator === '=') {
        resultScreenValue.textContent = lastResult
    }
    else {
        resultScreenValue.textContent = lastResult + lastOperator;
    }
}