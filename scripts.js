let num1;
let num2;
let operator;


const numberButtons = document.querySelectorAll('.keys');

numberButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        let setDisplay = document.getElementById('grid-item-display').innerHTML
        if (setDisplay == '' || 0) {
            setDisplay = e.target.value
        } else {
            setDisplay = setDisplay + e.target.value;
        }


        let x = e.target.value
        document.getElementById('grid-item-display').innerHTML = x;

        if (operator === undefined) {
            num1 = x;
        } else if (operator !== undefined) {
            num2 = x
        } else if (num1 != null && operator == undefined) {
            num1 = num1 + x;
        }
    })
});

const operators = document.querySelectorAll('.operator-keys');

operators.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        x = e.target.value
        return operator = x
    })
});

function calculate() {
    if (operator === '+') {
        let result = parseInt(num1) + parseInt(num2)
        document.getElementById('grid-item-display').innerHTML = result;
    } else if (operator === '-') {
        let result = parseInt(num1) - parseInt(num2)
        document.getElementById('grid-item-display').innerHTML = result;
    } else if (operator === '/') {
        let result = parseInt(num1) / parseInt(num2)
        document.getElementById('grid-item-display').innerHTML = result;
    } else if (operator === 'x') {
        let result = parseInt(num1) * parseInt(num2)
        document.getElementById('grid-item-display').innerHTML = result;
    }
}

function allClear() {
    document.getElementById('grid-item-display').innerHTML = ''
    num1 = null;
    num2 = null;
    operator = undefined;
}
