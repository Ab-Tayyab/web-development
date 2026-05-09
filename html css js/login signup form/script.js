const userForm = document.getElementById("userForm");

const nError = document.getElementById("nError");
const eError = document.getElementById("eError");
const pError = document.getElementById("pError");

const hideUnhide = document.getElementById("hide-unhide");

const passwords = document.querySelectorAll(".password");

const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// ===============================
// Toggle Password Show/Hide
// ===============================

hideUnhide.addEventListener("change", () => {
  passwords.forEach((password) => {
    password.type = hideUnhide.checked ? "text" : "password";
  });
});

// ===============================
// Form Validation
// ===============================

userForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous errors
  nError.textContent = "";
  eError.textContent = "";
  pError.textContent = "";

  const fName = document.getElementById("fName").value.trim();
  const lName = document.getElementById("lName").value.trim();
  const email = document.getElementById("email").value.trim();
  const fPassword = document.getElementById("fPassword").value;
  const lPassword = document.getElementById("lPassword").value;

  // ===============================
  // Name Validation
  // ===============================

  if (!fName || !lName) {
    nError.textContent = "Enter full name";
    nError.style.color = "red";
    return;
  }

  // ===============================
  // Email Validation
  // ===============================

  if (!email) {
    eError.textContent = "Enter email address";
    eError.style.color = "red";
    return;
  }

  if (!emailRegex.test(email)) {
    eError.textContent = "Enter valid email address";
    eError.style.color = "red";
    return;
  }

  // ===============================
  // Password Validation
  // ===============================

  if (!fPassword || !lPassword) {
    pError.textContent = "Enter both passwords";
    pError.style.color = "red";
    return;
  }

  if (fPassword !== lPassword) {
    pError.textContent = "Passwords do not match";
    pError.style.color = "red";
    return;
  }

  if (!passwordRegex.test(fPassword)) {
    pError.textContent =
      "Password must contain uppercase, lowercase, number, special character and minimum 8 characters";
    pError.style.color = "red";
    return;
  }

  alert("Form Submitted Successfully!");

  userForm.reset();
});