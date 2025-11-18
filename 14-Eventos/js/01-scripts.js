
console.log('Antes del Doom');//Se ejecuta antes del DOM

//Se ejecuta una vez es descargado todo el html 
document.addEventListener('DOMContentLoaded', () => {//Siempre sera una funcion anonima
    console.log('Documento listo');
    console.log('Dentro del Doom'); //Se ejecuta hasta al ultimo
}) 

console.log('Despues del DOM'); //Se ejecuta despues del DOM