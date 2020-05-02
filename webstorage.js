function base() {
  const btnGuardar = document.getElementById("guardar");
  btnGuardar.addEventListener("click", nuevoItem, false);
  console.log(caja.textContent);
  mostrarItem();
}

function nuevoItem() {
  const titulo = document.getElementById("tituloChecklist").value;
  const checklist0 = document.getElementById("check0").value;
  const checklist1 = document.getElementById("check1").value;
  const checklist2 = document.getElementById("check2").value;
  const checklist3 = document.getElementById("check3").value;
  const checklist4 = document.getElementById("check4").value;
  const urgencia = document.getElementById("urgencia").value;
  const fecha = document.getElementById("fecha").value;

  const valores = [
    "<li class='tarea'>" +
      checklist0 +
      "</li>" +
      "<li class='tarea'>" +
      checklist1 +
      "</li>" +
      "<li class='tarea'>" +
      checklist2 +
      "</li>" +
      "<li class='tarea'>" +
      checklist3 +
      "</li>" +
      "<li class='tarea'>" +
      checklist4 +
      "</li>" +
      "<p class='tarea'>Grado de urgencia: " +
      urgencia +
      "</p>" +
      "<p class='tarea'>Fecha limite: " +
      fecha +
      "</p>",
  ];
  localStorage.setItem(titulo, valores);

  mostrarItem();
}

function mostrarItem() {
  const caja = document.getElementById("caja");

  for (let i = 0; i < localStorage.length; i++) {
    var id = localStorage.key(i);
    var valor = localStorage.getItem(id);
    if (localStorage.length > 1) {
      console.log("solo puedes tener una checklist");
      const alert2 = document.getElementById("alert2");
      alert2.classList.remove("confirmacion");
      caja.innerHTML =
        "<p class='subtitulo fuentePost tarea'>" + id + "</p><br/>" + valor;
    } else {
      caja.innerHTML +=
        "<p class='subtitulo fuentePost tarea'>" + id + "</p><br/>" + valor;
      const alert = document.getElementById("alert");
      alert.classList.remove("confirmacion");
    }
    console.log(caja.textContent);
  }
}

function borrar() {
  localStorage.clear();
  location.reload();
  mostrarItem();
}

window.addEventListener("load", base, false);
