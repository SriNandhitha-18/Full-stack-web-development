** start of script.js **

function chunkArrayInGroups(arr, num) {
  const newArray=[];
  for (let i = 0; i < arr.length; i+=num) {
   newArray.push(arr.slice(i,i+num));
  }
  console.log(newArray);
  return newArray;
} 

chunkArrayInGroups(["a", "b", "c", "d"], 2)
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)


** end of script.js **

