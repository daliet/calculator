const screen = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector(".decimal");
const equalButton = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".all-clear");

let currentNumber = '';
let numbers = [];
let operator = '';

const operations = {
  "+" : (a, b) => a + b, 
  "-" : (a, b) => a - b,
  "*" : (a, b) => a * b,
  "/" : (a, b) => a / b
};


function addNumber(number) {
  currentNumber += number;
  screen.value = parseInt(currentNumber);
}
  

function addOperator(newOperator){
  if(currentNumber !== '') // Uses the last operator clicked
  numbers.push(parseInt(currentNumber)); 
  if(numbers.length == 2) calculate();
  operator = newOperator;
  currentNumber = '';
}


function calculate(){  
 const result = numbers.reduce(operations[operator]);
  screen.value = result;
  numbers = [result];
}


buttons.forEach((button) => {  
  button.addEventListener("click", () => {   
    if(typeof currentNumber === 'number'){ // Initializes the currentNumber after the calculation
      currentNumber = '';
    }
    addNumber(button.value)
  })
});


operatorButtons.forEach((button) => {
  button.addEventListener("click", () => 
    addOperator(button.value))
});


equalButton.addEventListener("click",() =>{ 
  numbers.push(parseInt(currentNumber)); 
  calculate();
  return currentNumber = parseInt(screen.value),
  numbers = [];
});




