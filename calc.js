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


function addNumber(number){
  currentNumber += number;
  screen.value = parseFloat(currentNumber);
}

 
function addDecimal(){  
  if(!currentNumber.includes(decimalButton.value)){
    currentNumber += decimalButton.value;
    screen.value = parseFloat(currentNumber);
  }  
}


function addOperator(newOperator){
  if(currentNumber !== '') // Uses the last operator clicked
  numbers.push(parseFloat(currentNumber)); 
  if(numbers.length == 2) calculate();
  operator = newOperator;
  currentNumber = '';
}


function calculate(){  
 const result = numbers.reduce(operations[operator]);
  screen.value = result;
  numbers = [result];
}

function clear() {
  currentNumber = '';
  numbers = [];
  operator = '';
  screen.value = 0;
}


buttons.forEach((button) => {  
  button.addEventListener("click", () => {   
    if(typeof currentNumber === 'number'){ // Sets the currentNumber into an empty String after the calculation
      currentNumber = '';
    }
    addNumber(button.value)
  })
});


operatorButtons.forEach((button) => {
  button.addEventListener("click", () => 
    addOperator(button.value))
});


decimalButton.addEventListener("click", addDecimal);


equalButton.addEventListener("click",() =>{ 
  numbers.push(parseFloat(currentNumber)); 
  calculate();
  return currentNumber = parseFloat(screen.value),
  numbers = [];
});


clearButton.addEventListener("click", clear);



