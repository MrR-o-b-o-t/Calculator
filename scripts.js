// click 7 button
// get value of button clicked
// display value to the screen
// click plus button - no change to screen
// click 8 button
// see value of new button displayed to screen
// press equals
// see sum of two values displayed to screen
let num1;
let num2;
let plus;
let minus;
let devide;
let decimal;

const numberButtons = document.querySelectorAll('.keys');

numberButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        x = e.target.value
        document.getElementById('grid-item-display').innerHTML = x;
    })
});

function allClear() {
    document.getElementById('grid-item-display').innerHTML = ''
}

