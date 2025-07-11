** start of script.js **

function truncateString(str, num) {
  if (str.length < num) return str;
  var truncStr = str.slice(0, num);
  var truncStrArr = truncStr.split(' ');
  var truncStrArrLen=truncStrArr.length;
  
  if(truncStrArrLen > 1 &&
    truncStrArr[truncStrArrLen - 1] !== str.split(' ')[truncStrArrLen - 1]) {
    truncStrArr.pop();
    truncStr = truncStrArr.join(' ');
  }
  return str.length > num ? truncStr + '...' : truncStr;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 0));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));

** end of script.js **

