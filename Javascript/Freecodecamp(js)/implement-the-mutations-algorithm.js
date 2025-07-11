** start of script.js **





function mutation(array) {
  const arrayItem1 = array[0].toLowerCase();
  const arrayItem2 = array[1].toLowerCase();

  for (const letter of arrayItem2) {
    if (!arrayItem1.includes(letter)) {
      return false;
    }
  }
  return true;
}







** end of script.js **

