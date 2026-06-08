const sounds = {
  w: "./sounds/tom-1.mp3",
  a: "./sounds/tom-2.mp3",
  s: "./sounds/tom-3.mp3",
  d: "./sounds/tom-4.mp3",
  j: "./sounds/snare.mp3",
  k: "./sounds/crash.mp3",
  l: "./sounds/kick-bass.mp3",
};

let btn = document.querySelectorAll(".drum");

btn.forEach((button) => {
  button.addEventListener("click", function () {
    let key = this.innerHTML;
    sound_play(key);
  });
});

function sound_play(key) {
  let sound = sounds[key];
  if(!sound) return
  let audio = new Audio(sound);
  audio.play().catch(err=>console.error(err));
}
