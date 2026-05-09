const userForm = document.getElementById("userForm");
const nError = document.getElementById("nError");
const eError = document.getElementById("eError");
const pError = document.getElementById("pError");

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const fName = document.getElementById("fName").value;
  const lName = document.getElementById("lName").value;
  const email = document.getElementById("email").value;
  const fPassword = document.getElementById("fPassword").value;
  const lPassword = document.getElementById("lPassword").value;

  if (fName === "" || lName === "") {
    nError.textContent = "Enter User Name";
    nError.style.color = "red";
    return;
  }
  if (email === "") {
    eError.textContent = "Enter Valid Email Address";
    eError.style.color = "red";
    return;
  }

  if (fPassword === "" || lPassword === "") {
    pError.textContent = "Enter Both Password";
    pError.style.color = "red";
    return;
  }
  console.log(fName, lName, email, fPassword, lPassword);

  userForm.reset();
});
