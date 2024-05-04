let expression = ''; // Variable to store the current expression

// Function to update the display with the current expression
function updateDisplay() {
    document.getElementById('display').innerText = expression;
}

// Function to append characters to the expression
function appendToDisplay(value) {
    expression += value;
    updateDisplay();
}

// Function to clear the expression and update the display
function clearResult() {
    expression = '';
    updateDisplay();
}

// Function to calculate the expression and display the result
function calculate() {
    // Evaluate the expression and update the display with the result
    const result = eval(expression);
    document.getElementById('display').innerText = result;
}

// To make sure the display is updated initially
updateDisplay();