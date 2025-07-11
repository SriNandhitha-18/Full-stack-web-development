** start of script.js **

function pyramid(char, levels, reverse) {
  let result = '\n';

  for (let i = 0; i < levels; i++) {
    let spaces = reverse ? i : levels - i - 1;
    let chars = reverse ? 2 * (levels - i) - 1 : 2 * i + 1;

    result += ' '.repeat(spaces) + char.repeat(chars) + '\n';
  }

  return result;
}

** end of script.js **

