// Animaciones en Hover
const youtube = document.getElementById("youtube");
const twitter = document.getElementById("twitter");
const insta = document.getElementById("instagram");
const canvas = document.getElementById("canvas");

youtube.addEventListener("mouseover", function () {
  youtube.classList.add("animacion");
});
youtube.addEventListener("mouseout", function () {
  youtube.classList.remove("animacion");
});

twitter.addEventListener("mouseover", function () {
  twitter.classList.add("animacion");
});
twitter.addEventListener("mouseout", function () {
  twitter.classList.remove("animacion");
});

insta.addEventListener("mouseover", function () {
  insta.classList.add("animacion");
});
twitter.addEventListener("mouseout", function () {
  insta.classList.remove("animacion");
});

canvas.addEventListener("mouseover", function () {
  canvas.classList.add("animacion");
});
canvas.addEventListener("mouseout", function () {
  canvas.classList.remove("animacion");
});
