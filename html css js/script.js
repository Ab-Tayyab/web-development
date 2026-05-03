const text = document.getElementById("input");
const total_words = document.getElementById("total_words");
const total_ch = document.getElementById("total_ch");
const remain_ch = document.getElementById("remain_ch");
const exced_ch = document.getElementById("exceed_ch");
const container = document.getElementById("container");

const t_length = 140;
let warning = null;

text.addEventListener("input", () => {
  const value = text.value;
  const chCount = value.length;
  const trimmed = value.trim();
  const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;

//   Update UI 

  total_words.textContent = wordCount;
  total_ch.textContent = chCount;
  remain_ch.textContent = t_length - chCount;
  if (chCount >= t_length) {
    if (!warning) {
      warning = document.createElement("p");
      warning.textContent = "Character Limit Exceed!";
      warning.textContent = `Exceeded by ${chCount - t_length} characters`;
      warning.style.color = "red";
      container.appendChild(warning);
    }
    else{
      warning.textContent = `Exceeded by ${chCount - t_length} characters`;
    }
  } else {
    if (warning) {
      warning.remove();
      warning = null;
    }
  }
});
