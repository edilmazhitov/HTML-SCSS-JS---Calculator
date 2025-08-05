import { addition, multiplication, division, subtraction, degree } from './calculatorFunctions.js';

const summerDisplay = document.getElementById("summer-display");
const additionBtn = document.getElementById("addition")
const subtractionBtn = document.getElementById("subtraction");
const multiplicationBtn = document.getElementById("multiplication");
const divisionsBtn = document.getElementById("divisions");
const degreeBtn = document.getElementById("degree");
const commaBtn = document.getElementById("comma");
const resultBtn = document.getElementById("result");
const clearBtn = document.getElementById("clear-btn");
const clearOneBtn = document.getElementById("clear-one-btn");
const numbersButtons = document.querySelectorAll(".numbers");

summerDisplay.value = 0;


numbersButtons.forEach(number => {
  number.addEventListener("click", () => {
    if (summerDisplay.value === "0") {
      summerDisplay.value = number.textContent;
    } else {
      summerDisplay.value += number.textContent;
    }

  })
})


additionBtn.addEventListener("click", () => {
  if (summerDisplay.value != additionBtn.textContent && summerDisplay.value >= 1 ) {
    summerDisplay.value += additionBtn.textContent;
  }
})

subtractionBtn.addEventListener("click", () => {
  if (summerDisplay.value != subtractionBtn.textContent && summerDisplay.value >= 1 ) {
    summerDisplay.value += subtractionBtn.textContent;
  }
})

multiplicationBtn.addEventListener("click", () => {
  if (summerDisplay.value != multiplicationBtn.textContent && summerDisplay.value >= 1 ) {
    summerDisplay.value += multiplicationBtn.textContent;
  }
})

divisionsBtn.addEventListener("click", () => {
  if (summerDisplay.value != divisionsBtn.textContent && summerDisplay.value >= 1 ) {
    summerDisplay.value += divisionsBtn.textContent;
  }
})

commaBtn.addEventListener("click",() => {
  if (summerDisplay.value != commaBtn.textContent && summerDisplay.value >= 1) {
    summerDisplay.value += commaBtn.textContent;
  }
})

degreeBtn.addEventListener("click", () => {
  if (summerDisplay.value != degreeBtn.textContent && summerDisplay.value >= 1) {
    summerDisplay.value += degreeBtn.textContent;
  }
})


resultBtn.addEventListener("click", () => {
  const expression = summerDisplay.value;

  const match = expression.match(/^(\d+(?:\.\d+)?)([+\-*/^])(\d+(?:\.\d+)?)$/);

  if (!match) {
    summerDisplay.value = summerDisplay.value;
    return;
  }

  const a = parseFloat(match[1]);
  const operator = match[2];
  const b = parseFloat(match[3]);


  let result;

  switch (operator) {
    case '+':
      result = addition(a, b);
      break;
    case '-':
      result = subtraction(a, b);
      break;
    case '*':
      result = multiplication(a, b);
      break;
    case '^':
      result = degree(a,b);
      break;
    case '/':
      if (b === 0) {
        alert("На ноль делить нельзя!");
        return;
      }
      result = division(a, b);
      break;
    default:
      return;
  }

  summerDisplay.value = result;
})

clearBtn.addEventListener("click", () => {
  summerDisplay.value = "0";
})

clearOneBtn.addEventListener("click", () => {
  summerDisplay.value = summerDisplay.value.slice(0,-1)
})