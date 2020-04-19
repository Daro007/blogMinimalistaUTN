window.onload = function () {
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  let imagen = document.getElementById("imgCanvas");

  context.drawImage(imagen, 0, 0, canvas.width, canvas.height);
};
