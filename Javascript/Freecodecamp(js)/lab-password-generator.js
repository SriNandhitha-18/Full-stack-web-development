** start of script.js **

function generatePassword(length) {
const characters = "Kusuma";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const password = generatePassword(12);

console.log("Generated password: " + password);

** end of script.js **

