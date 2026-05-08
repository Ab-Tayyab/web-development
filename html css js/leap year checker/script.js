const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let year = document.getElementById("input").value;
  if (year == "") {
    output.textContent = "Enter Year";
    output.style.color = "red";
    return;
  } else {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      output.textContent = `${year}: Leap Year`;
      output.style.color = "green";
    } else {
      output.textContent = `${year}: Not a Leap Year`;
      output.style.color = "red";
    }
  }
  form.reset();
});
