** start of script.js **

function sumAll(arr) {
  const start = Math.min(...arr);
  const end = Math.max(...arr);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

** end of script.js **

