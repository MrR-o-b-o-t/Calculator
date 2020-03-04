let num1;
let num2;
let operator;

const numberButtons = document.querySelectorAll('.keys');

numberButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        setDisplay = document.getElementById('grid-item-display')
        if (setDisplay.innerText == '' || setDisplay.innerText == 0) {
            setDisplay.innerText = e.target.value
        } else {
            setDisplay.innerText = setDisplay.innerText + e.target.value;
        }
    })
});

const operators = document.querySelectorAll('.operator-keys');

operators.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let operatorValue = e.target.value
        operator = operatorValue
        setDisplay.innerText = ''
    })
});

const numValues = document.querySelectorAll('.keys');

numValues.forEach(function (e) {
    e.addEventListener('click', function () {
        let number = setDisplay.innerText
        if (operator === undefined) {
            num1 = parseFloat(number)
            console.log(typeof (num1))
        } else if (num1 !== null && operator !== undefined) {
            num2 = parseFloat(number)
        }
    })
});

function calculate() {
    if (operator === '+') {
        let result = num1 + num2
        document.getElementById('grid-item-display').innerText = +result.toFixed(3);
        num1 = result
    } else if (operator === '-') {
        let result = num1 - num2
        document.getElementById('grid-item-display').innerText = +result.toFixed(3);
        num1 = result
    } else if (operator === '/') {
        let result = num1 / num2
        document.getElementById('grid-item-display').innerText = +result.toFixed(3);
        num1 = result
    } else if (operator === 'x') {
        let result = num1 * num2
        document.getElementById('grid-item-display').innerText = +result.toFixed(3);
        num1 = result
    }
}

function allClear() {
    document.getElementById('grid-item-display').innerText = '0'
    num1 = null;
    num2 = null;
    operator = undefined;
}
