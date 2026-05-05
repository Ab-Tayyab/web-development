const shareBtn = document.querySelector(".img-share");
const popup = document.querySelector(".popup");

shareBtn.addEventListener("click", () => {
  popup.classList.toggle("hidden");
});
