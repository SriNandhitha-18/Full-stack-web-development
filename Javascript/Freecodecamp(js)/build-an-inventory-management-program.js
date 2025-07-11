** start of script.js **

let inventory = [];

function findProductIndex(productName) {
  return inventory.findIndex(item => item.name.toLowerCase() === productName.toLowerCase());
}

function addProduct(productObj) {
  const nameLower = productObj.name.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index !== -1) {
    inventory[index].quantity += productObj.quantity;
    console.log(`${nameLower} quantity updated`);
  } else {
    inventory.push({ name: nameLower, quantity: productObj.quantity });
    console.log(`${nameLower} added to inventory`);
  }
}
function removeProduct(productName, quantityToRemove) {
  const nameLower = productName.toLowerCase();
  const index = findProductIndex(nameLower);

  if (index === -1) {
    console.log(`${nameLower} not found`);
    return;
  }

  const product = inventory[index];

  if (quantityToRemove > product.quantity) {
    console.log(`Not enough ${nameLower} available, remaining pieces: ${product.quantity}`);
    return;
  }

  product.quantity -= quantityToRemove;

  if (product.quantity === 0) {
    inventory.splice(index, 1);
  }

  console.log(`Remaining ${nameLower} pieces: ${product.quantity}`);
}


** end of script.js **

