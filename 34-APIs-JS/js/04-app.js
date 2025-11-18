const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');


//Registrar eventos
abrirBtn.addEventListener('click', pantallaCompleta);
salirBtn.addEventListener('click', cerrarpantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen(); //document.element eso trae todo el html y fullscreen es para poner pantalla completa
}

function cerrarpantallaCompleta() {
    document.exitFullscreen();
}