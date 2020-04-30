const item = document.getElementById("checklist");
const alert = document.getElementById("alert");

function guardar() {
  sessionStorage.setItem("checklistUsuario", item.innerHTML);
  alert.classList.remove("confirmacion");
}
function borrar() {
  sessionStorage.clear();
  location.reload();
}

function mostrar() {
  if (sessionStorage.getItem("checklistUsuario")) {
    item.innerHTML = sessionStorage.getItem("checklistUsuario");
  }
}
