const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value.trim();
  if (email === "") {
    output.textContent = "Please Enter Email Address.";
    output.style.color = "red";
    return;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    output.textContent = "Please Enter Valid Email Address.";
    output.style.color = "red";
    return;
  }
  output.textContent = "Email Address is valid.";
  output.style.color = "green";

  form.reset();
});
