//Api para saber si estoy conectado a internet o no estoy conectado

window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Si estas conectado');
    }else{
        console.log('No estas conectado');
    }   
}