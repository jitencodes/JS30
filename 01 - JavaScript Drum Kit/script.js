
const imagesUrls = {
  65:"https://arsen-nazaryan.github.io/drum_kit/media/icons/clap.png",
83:"https://arsen-nazaryan.github.io/drum_kit/media/icons/snare.png",
68:"https://arsen-nazaryan.github.io/drum_kit/media/icons/kick.png",
70:"https://arsen-nazaryan.github.io/drum_kit/media/icons/hihat.png",
74:"https://arsen-nazaryan.github.io/drum_kit/media/icons/boom.png",
75:"https://arsen-nazaryan.github.io/drum_kit/media/icons/tom.png",
76:"https://arsen-nazaryan.github.io/drum_kit/media/icons/tink.png",
18:"https://arsen-nazaryan.github.io/drum_kit/media/icons/openhat.png",
  };

const restart = document.querySelector(".button");
const music_box = document.querySelector(".music_box");
const container = document.querySelector(".container");

restart.addEventListener("click", nextScreen);
function nextScreen(){
  music_box.style.display = "flex";
  container.style.display = "none";
  
}

function playSounds(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const image = document.querySelector(".image");

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  image.style.background = `url("${imagesUrls[e.keyCode]}")`;
}

function soundsTap(e) {
  var el = this.id;
   const image = document.querySelector(".image");

  const audio = document.querySelector(`audio[data-key="${el}"]`);
  if (!audio) return;
  image.style.background = `url("${imagesUrls[el]}")`;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const key_btn = document.querySelectorAll(".key");

key_btn.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);

key_btn.forEach((el) => el.addEventListener("click", soundsTap));

window.addEventListener("keydown", playSounds);
