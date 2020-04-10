// VALIDACION DE FORMULARIO

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const formulario = document.getElementById("formulario");
const btnFormulario = document.getElementById("btn-formulario");
const emailInvalido = email.validity;
const textAreaChequeada = mensaje.validity;

function validarForm() {
  nombre.addEventListener("input", validarNombre);
  apellido.addEventListener("input", validarApellido);
  email.addEventListener("input", validarEmail);
  mensaje.addEventListener("input", validarMensaje);
  validarNombre();
  validarApellido();
  validarEmail();
  validarMensaje();
}

function validarNombre() {
  if (nombre.value == "") {
    nombre.setCustomValidity("Por favor ingrese su nombre");
    nombre.style.borderColor = "#E22E11";
  } else {
    nombre.setCustomValidity("");
    nombre.style.borderColor = "#3D8B44";
  }
}

function validarApellido() {
  if (apellido.value == "") {
    apellido.setCustomValidity("Por favor ingrese su apellido");
    apellido.style.borderColor = "#E22E11";
  } else {
    apellido.setCustomValidity("");
    apellido.style.borderColor = "#3D8B44";
  }
}

function validarEmail() {
  if (email.value == "") {
    email.setCustomValidity("Por favor ingrese su E-mail");
    email.style.borderColor = "#E22E11";
  } else if (emailInvalido.patternMismatch) {
    email.setCustomValidity("Por favor ingrese un E-mail valido");
    email.style.borderColor = "#E22E11";
  } else {
    email.style.borderColor = "#39A858";
    email.setCustomValidity("");
  }
}

function validarMensaje() {
  if (nombre.value == "") {
    mensaje.setCustomValidity("Por favor escriba su mensaje");
    mensaje.style.borderColor = "#E22E11";
  } else if (mensaje.value.trim() !== "") {
    mensaje.setCustomValidity("");
    mensaje.style.borderColor = "#3D8B44";
  } else if (textAreaChequeada.valueMissing) {
    mensaje.setCustomValidity("Por favor detalle como podríamos ayudarlo");
    mensaje.style.borderColor = "#E22E11";
  }
}

btnFormulario.addEventListener("click", validarForm);
