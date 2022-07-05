document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);


let contenedorLoginRegister = document.querySelector(".contenedor__login-register");
let formularioLogin = document.querySelector(".formulario__login");
let formularioRegister = document.querySelector(".formulario__register");
let cajaTraseraLogin = document.querySelector(".caja__trasera-login");
let cajaTraseraRegister = document.querySelector(".caja__trasera-register");

function anchoPagina() {
  if (window.innerWidth > 850) {
    cajaTraseraLogin.style.display = "block";
    cajaTraseraRegister.style.display = "block";
  } else {
    cajaTraseraRegister.style.display = "block";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.display = "none";
    formularioLogin.style.display = "block";
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";
  }
}

anchoPagina();

function iniciarSesion() {
  if (window.innerHeight > 850) {
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "10px";
    formularioLogin.style.display = "block";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.opacity = "0";
  } else {
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";
    formularioLogin.style.display = "block";
    cajaTraseraRegister.style.display = "block";
    cajaTraseraLogin.style.opacity = "none";
  }
}

function register() {
  if (window.innerHeight > 850) {
    formularioRegister.style.display = "block";
    contenedorLoginRegister.style.left = "410px";
    formularioLogin.style.display = "none";
    cajaTraseraRegister.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
  } else {
    formularioRegister.style.display = "block";
    contenedorLoginRegister.style.left = "0px";
    formularioLogin.style.display = "none";
    cajaTraseraRegister.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
  }
}