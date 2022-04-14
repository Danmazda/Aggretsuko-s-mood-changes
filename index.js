const retsukoMood = document.querySelector("img");
const button = document.querySelector("button");
const moodText = document.querySelector(".mood-text");
const title = document.querySelector("h1");
const alert = document.querySelector(".alert");
const music = document.querySelector("audio");
const control = document.querySelector(".fa-solid");
let level = 0;
let play = false;
const moods = [
  "Calm",
  "In love",
  "Annoyed",
  "Embarrassed",
  "Determined",
  "Enraged",
  "Crying"
];

button.addEventListener("click", () => {
  alert.remove();
  title.innerText = "Press the button to change Retsuko's mood";
  button.innerText = "Change mood";
  if (level < 6) {
    level++;
  } else {
    level = 0;
  }
  let currentMood = moods[level].toLowerCase().replace(" ", "");
  moodText.innerText = `Retsuko is ${moods[level]}`;
  retsukoMood.src = `./assets/img/${currentMood}.gif`;
  retsukoMood.alt = `${moods[level]}`;
  music.src = `./assets/audio/${currentMood}.mp3`;
  music.load();
  music.play();
  play = true;
  control.classList.replace("fa-play", "fa-pause");
});

control.addEventListener("click", () => {
  if (play) {
    music.pause();
    control.classList.replace("fa-pause", "fa-play");
  } else {
    music.play();
    control.classList.replace("fa-play", "fa-pause");
  }
  play = !play;
});
