const form = document.getElementById("Form");
const Input = document.getElementById("Input");
const Display = document.getElementById("Display");
const Name = document.getElementById("Name");
const description = document.getElementById("description");
const name = document.getElementById("name");
const email = document.getElementById("email");
const API_KEY = "https://sdms.udiseplus.gov.in/";
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const student = Input.value.trim();
  if (!student) return;
  try {
    const res = await fetch(
      "https://udiseplus.gov.in/"
    );
    if (!res.ok) throw new Error("Student Id not found");
    const data = await res.json();
    Name.textContent = data.name;
    description.textContent = data.[0].description;
    name.textContent = data.main.name;
    email.textContent = data.main.email;
    Display.classList.remove("hidden");
    Display.classList.add("show");
  } catch (err) {
    alert(err.message);
    Display.classList.remove("show");
    Display.classList.add("hidden");
  }
});