** start of index.html **


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time Character Counter</title>
    <link rel="stylesheet" href="styles.css">
    <style></style>
</head>
<body>
    <h1>Real-Time Character Counter</h1>
    <textarea id="text-input" placeholder="Type something..."></textarea>
    <p id="char-count">Character Count: 0/50</p>

    <script src="script.js"></script>
</body>
</html>

** end of index.html **

** start of styles.css **

p{
  color: red;
}

** end of styles.css **

** start of script.js **

    /* file: script.js */
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

function updateCharacterCount() {
    const text = textInput.value;
    const count = text.length;

    if (count > 50) {
        textInput.value = text.substring(0, 50); // Truncate to exactly 50 characters
    }

    const updatedCount = textInput.value.length; // Use truncated text length
    charCount.textContent = `Character Count: ${updatedCount}/50`;

    if (updatedCount >= 50) {
        charCount.classList.add("red");
    } else {
        charCount.classList.remove("red");
    }
}

textInput.addEventListener("input", updateCharacterCount);

updateCharacterCount();

** end of script.js **

