** start of script.js **

function maskEmail(email) {

  let pos = email.indexOf("@");
  let maskedLength = pos;

  let begin = email.slice(0, 1);
  let end = email.slice(pos - 1);

  let replace = "*";
  let replaced = replace.repeat(maskedLength - 2);

  let finishedEmail = begin + replaced + end;

  return finishedEmail;

};

let email = "apple.pie@example.com";

console.log(maskEmail(email));

email = "freecodecamp@example.com";

console.log(maskEmail(email));

** end of script.js **

