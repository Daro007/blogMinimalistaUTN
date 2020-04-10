const cerrarBtn = document.querySelector(".cerrar-nav");
const abrirBtn = document.querySelector(".abrir-nav");
const nav = document.querySelector(".nav");

cerrarBtn.addEventListener("click", () => {
  nav.classList.remove("nav-abierta");
});

abrirBtn.addEventListener("click", () => {
  nav.classList.add("nav-abierta");
});
