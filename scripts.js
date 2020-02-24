// click button 7
// display 7 to the screen
// click button 8
// display 8 to the screen
// press 'equals' button
// display 15 to the screen

let num1 = ''
let num2 = ''


function appendInput() {
    let thisValue = document.querySelectorAll('button').value
    document.getElementById('grid-item-display').innerHTML = thisValue
}

function clearInputs() {
    document.getElementById('grid-item-display').innerHTML = ''
}
