** start of script.js **

const lunches = ["Tete", "Tyty", "Toto"];
// console.log(lunches);

const addLunchToEnd = (array, string) => {
  array.push(string);
  console.log(`${array[array.length-1]} added to the end of the lunch menu.`);
  return array;
}

// addLunchToEnd(lunches, "Tata");
// console.log(lunches);

const addLunchToStart = (array, string) => {
  array.unshift(string);
  console.log(`${array[0]} added to the start of the lunch menu.`);
  return array;
}

// addLunchToStart(lunches, "Titi");
// console.log(lunches);

const removeLastLunch = array => {
  if (array.length !== 0) {
    const lastLunch = array.pop();
    console.log(`${lastLunch} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return array;
}

// removeLastLunch(lunches);
// console.log(lunches);

const removeFirstLunch = array => {
  if (array.length !== 0) {
    const firstLunch = array.shift();
    console.log(`${firstLunch} removed from the start of the lunch menu.`);
  } else {
      console.log("No lunches to remove.");
  }
  return array;
}

// removeFirstLunch(lunches);
// console.log(lunches);

const getRandomLunch = array => { 
  if (array.length !== 0) {
    const random = Math.floor(Math.random() * array.length);
    console.log(`Randomly selected lunch: ${array[random]}`);
  } else {
    console.log("No lunches available.");
  }
}

getRandomLunch(["Apples", "Banana"]);
getRandomLunch(lunches);
getRandomLunch(lunches);
getRandomLunch(lunches);
getRandomLunch(lunches);
getRandomLunch(lunches);
getRandomLunch(lunches);
getRandomLunch(lunches);
getRandomLunch(lunches);
getRandomLunch(lunches);

const showLunchMenu = array => {
  if (array.length !== 0) {
    console.log(`Menu items: ${array.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}
showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);

** end of script.js **

