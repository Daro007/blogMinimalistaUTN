var video = document.getElementById("video");
var reproducirPausar = document.querySelector("#playPause");
var pausa = document.getElementById("off");
var play = document.getElementById("play");

function reproducir() {
  if (video.paused) {
    video.play();
    pausa.style.display = "block";
    play.style.display = "none";
  } else {
    video.pause();
    pausa.style.display = "none";
    play.style.display = "block";
  }
}

function stop() {
  video.currentTime = 0;
  video.pause();
  pausa.style.display = "none";
  play.style.display = "block";
}

function saltar(valor) {
  video.currentTime += valor;
}
