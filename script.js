const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const estadoEnvio = document.getElementById("estadoEnvio");

const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombreValor = nombre.value.trim();
  const correoValor = correo.value.trim();
  const mensajeValor = mensaje.value.trim();

  if (nombreValor === "" || correoValor === "" || mensajeValor === "") {
    estadoEnvio.textContent = "Todos los campos son obligatorios.";
    estadoEnvio.style.color = "red";
    return;
  }

  if (!regexCorreo.test(correoValor)) {
    estadoEnvio.textContent = "Debes ingresar un correo electrónico válido.";
    estadoEnvio.style.color = "red";
    return;
  }

  estadoEnvio.textContent = "Formulario enviado correctamente.";
  estadoEnvio.style.color = "green";

  formulario.reset();
});
