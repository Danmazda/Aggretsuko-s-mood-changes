const retsukoMood = document.querySelector(".retsuko");
const button = document.querySelector("button");
const moodText = document.querySelector(".mood-text");
const title = document.querySelector("h1");
const deleteOnClick = document.querySelector(".deleteOnClick");
const music = document.querySelector("audio");
const control = document.querySelector(".playPause");
const plus = document.querySelector(".fa-plus");
const minus = document.querySelector(".fa-minus");
const titleImage = document.querySelector(".titleImage");
const nihongo = document.querySelector(".nihongo");
let level = 0;
let play = false;
const moods = [
  "Calm",
  "Annoyed",
  "Embarrassed",
  "In love",
  "Crying",
  "Determined",
  "Enraged",
];
const moodsJP = [
  "は落ち着いている",
  "はイライラする",
  "は恥ずかしい",
  "は恋をしている",
  "が泣いている",
  "が決まった",
  "は激怒",
];

button.addEventListener("click", () => {
  deleteOnClick.remove();
  title.innerText = "Press the button to change Retsuko's mood";
  button.innerText = "Change mood";
  if (level < 6) {
    level++;
  } else {
    level = 0;
  }
  let currentMood = moods[level].toLowerCase().replace(" ", "");
  moodText.innerText = `Retsuko is ${moods[level]}`;
  nihongo.innerText = `烈子 ${moodsJP[level]}`;
  retsukoMood.src = `https://res.cloudinary.com/dywi6o163/image/upload/v1649983714/retsuko/images/${currentMood}.gif`;
  retsukoMood.alt = `${moods[level]}`;
  music.src = `https://res.cloudinary.com/dywi6o163/video/upload/v1649984916/retsuko/music/${currentMood}.mp3`;
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

minus.addEventListener("click", () => {
  music.volume -= 0.2;
});

plus.addEventListener("click", () => {
  music.volume += 0.2;
});

titleImage.addEventListener("click", () => {
  window.location.reload(false);
});
