** start of script.js **

function frankenSplice(array1, array2, index) {
  let shadowCopyOfArray1 = array1.slice();
  let shadowCopyOfArray2 = array2.slice();
  console.log(array2.slice());// [4, 5]
  console.log(shadowCopyOfArray2)//[ 4, 1, 2, 3, 5 ]
  for (let i = 0; i < shadowCopyOfArray1.length; i++) {
    shadowCopyOfArray2.splice(index, 0, shadowCopyOfArray1[i]);
    index++;
  }
  return shadowCopyOfArray2;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));

** end of script.js **

