const container = document.getElementById("form");

const form = document.createElement('form');
form.setAttribute('id', 'myForm');

let f=document.createElement('h1');
f.textContent="STUDENT DETAILS FORM";
document.getElementById("form").appendChild(f);

const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name: ';
const nameInput = document.createElement('input');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('name', 'name');
nameInput.setAttribute('required', true);

const rollnoLabel = document.createElement('label');
rollnoLabel.textContent = 'Roll.no: ';
const rollnoInput = document.createElement('input');
rollnoInput.setAttribute('type', 'text');
rollnoInput.setAttribute('rollno', 'rollno');
rollnoInput.setAttribute('required', true);


const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email: ';
const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('required', true);

const phno = document.createElement('label');
phno.textContent = 'Phoneno: ';
const phnoInput = document.createElement('input');
phnoInput.setAttribute('type', 'number');
phnoInput.setAttribute('name', 'phno');
phnoInput.setAttribute('required', true);


const qualificationLabel = document.createElement('label');
qualificationLabel.textContent = 'Qualification : ';
const qualificationInput = document.createElement('input');
qualificationInput.setAttribute('type', 'text');
qualificationInput.setAttribute('name', 'qualification');
qualificationInput.setAttribute('required', true);



const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.setAttribute('type', 'submit');


function addBreak() {
  form.appendChild(document.createElement('br'));
}

form.appendChild(nameLabel);
form.appendChild(nameInput);
addBreak();
addBreak();
form.appendChild(rollnoLabel);
form.appendChild(rollnoInput);
addBreak();
addBreak();
form.appendChild(emailLabel);
form.appendChild(emailInput);
addBreak();
addBreak();
form.appendChild(phno);
form.appendChild(phnoInput);
addBreak();
addBreak();
form.appendChild(qualificationLabel);
form.appendChild(qualificationInput);
addBreak();
addBreak();
form.appendChild(submitButton);


container.appendChild(form);

form.addEventListener('submit', function(event) {
  alert('Name: ${nameInput.value}\nRoll.no: ${rollnoInput.value}\nEmail: ${emailInput.value}\nPhno: ${phnoInput.value}\nQualification: ${qualificationInput}.value');
});