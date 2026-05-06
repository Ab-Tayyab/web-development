const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  if (weight == "" || height == "") {
    output.textContent = "Please enter the value";
    output.style.color = "red";
    return;
  } else {
    let feet_to_meter = height * 0.3048;
    let bmi = (weight / (feet_to_meter * feet_to_meter)).toFixed(2);

    if (bmi <= 18.5) {
      output.textContent = `Under Weight: ${bmi}`;
      output.style.color = "black";
    } else if (bmi > 18.5 && bmi <= 24.9) {
      output.textContent = `Normal Weight: ${bmi}`;
      output.style.color = "green";
    } else if (bmi > 25 && bmi < 29.9) {
      output.textContent = `Over Weight: ${bmi}`;
      output.style.color = "orange";
    } else {
      output.textContent = `Obese Weight: ${bmi}`;
      output.style.color = "red";
    }
  }
  form.reset();
});
