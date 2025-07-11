** start of script.js **

const num = 5;

function factorialCalculator (number) {
  let result = 1;

  for (let x = 1; x <= number; x++) {
    result *= x;
  }
  return result;
}

const factorial = factorialCalculator(num);

const resultMsg = "Factorial of " + num + " is "+factorial;

console.log(resultMsg);

** end of script.js **

