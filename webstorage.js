// const item = document.getElementById("checklist");
// const alert = document.getElementById("alert");

// function guardar() {
//   localStorage.setItem("checklistUsuario", item.innerHTML);
//   alert.classList.remove("confirmacion");
// }
// function borrar() {
//   localStorage.clear();
//   location.reload();
// }

// function mostrar() {
//   if (localStorage.getItem("checklistUsuario")) {
//     item.innerHTML = localStorage.getItem("checklistUsuario");
//   }
// }

function base() {
  const btnGuardar = document.getElementById("guardar");
  btnGuardar.addEventListener("click", nuevoItem, false);
  mostrarItem();
}

function nuevoItem() {
  const titulo = document.getElementById("tituloChecklist").value;
  const checklist = document.getElementById("check").value;
  const urgencia = document.getElementById("urgencia").value;
  const fecha = document.getElementById("fecha").value;

  const valores = [checklist, urgencia, fecha];
  localStorage.setItem(titulo, valores);
  console.log(checklist);
  mostrarItem();
}

function mostrarItem() {
  const caja = document.getElementById("caja");

  for (let i = 0; i < localStorage.length; i++) {
    var id = localStorage.key(i);
    var valor = localStorage.getItem(id);

    caja.innerHTML += "<ul><li>" + id + " - " + valor + "</li></ul>";
  }
}

function borrar() {
  localStorage.clear();
  location.reload();
  mostrarItem();
}

window.addEventListener("load", base, false);
