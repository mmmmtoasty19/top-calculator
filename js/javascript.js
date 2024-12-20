let number1 = 0;
let number2 = 0;
let operation = "";

function sum(num1, num2) {
  return num1 + num2;  
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1,num2) {
  return num1 * num2;
}

function divide(num1,num2) {
  return num1 / num2;
}

function operate(num1,num2,operator) {
  let value = 0;
  switch (operator) {
    case 'add':
      value = sum(num1,num2);
      break;
    case 'sub':
      value = subtract(num1,num2);
      break;
    case 'multi':
      value = multiply(num1,num2);
      break;
    case 'divide':
      value = divide(num1,num2);
      break;
    default:
      console.log("operator not found")
      break;
  }
  return(value)
}