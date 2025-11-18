// Como se comunican las funciones entre si...

/* Tus funciones se van a comunicar, en lugar de tener una gran función con 800 lineas es recomendable dividirla en 
pequeñas partes, realizan una operación y se van hacia la otra función...*/

iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...'); // una vez que termine de iniciar la primera funcion
    segundaFuncion(); // Se llama a la segunda
}


function segundaFuncion() {
    console.log('Desde la segunda función...') //Termina y se manda a llamar la tercera
    usuarioAutenticado('Agent'); //se pone el nombre del usuario
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario...');
    console.log(`Usuario autenticado con éxito: ${usuario} `)
}


