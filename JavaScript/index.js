/* let display = document.getElementById('display');
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    display.value += number;
}

function setOperator(op) {
    operator = op;
    firstOperand = display.value;
    display.value = '';
}

function calculate() {
    secondOperand = display.value;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    display.value = result;
}

function clearDisplay() {
    display.value = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
} */

function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    // the variables set above target the number fields that a user will enter
    let result;
    // This variable here is set to undifined as it will later change depending on the operation

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        result = num1 / num2;
    } else {
        alert("Invalid operation!");
        return;
    }

    document.getElementById('result').innerText = "Answer: " + result;
}

function refreshPage() {
    window.location.reload();
}






const form = document.getElementById('sampleForm');
  const messageBox = document.getElementById('messageBox');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    messageBox.innerHTML = '';

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    if (!name || !email || !message) {
      showMessage('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      showMessage('Please enter a valid email address.');
      return;
    }

    // Perform form submission or other actions here
    showMessage('Form submitted successfully!');
    form.reset();
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showMessage(message) {
    const errorMessageElement = document.createElement('div');
    errorMessageElement.id = 'error-message';
    errorMessageElement.textContent = message;
    messageBox.appendChild(errorMessageElement);
  }