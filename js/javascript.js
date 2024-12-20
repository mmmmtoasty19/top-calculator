let storedNumber1 = null;
let storedNumber2 = null;
let operation = null;
const numBtns = document.querySelectorAll(".numBtn")
const signBtns = document.querySelectorAll(".signbtn")

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
    case '+':
      value = sum(num1,num2);
      break;
    case '-':
      value = subtract(num1,num2);
      break;
    case '*':
      value = multiply(num1,num2);
      break;
    case '/':
      value = divide(num1,num2);
      break;
    default:
      console.log("operator not found")
      break;
  }
  return(value)
}


numBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let num = btn.id;
    let curDisplytext = document.querySelector('#display').textContent;
    let finalDisplaytext = curDisplytext == "0" ? num : curDisplytext + num;
    document.querySelector('#display').textContent = finalDisplaytext;
  })
})

signBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let displayText = document.querySelector('#display').textContent;
    operation = btn.textContent


    if (storedNumber1 == null) {
      storedNumber1 = parseFloat(displayText);
    } else {
      storedNumber2 = parseFloat(displayText);
    }



    
    document.querySelector('#display').textContent = "0";


  })
})

