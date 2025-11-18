//Eventos submit a un formulario

const formulario = document.querySelector('#formulario');

/*
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Evita la acción por defecto del evento

    console.log('Buscando..');
    console.log(e.target.action);
})
*/


//declaracion de funcion

formulario.addEventListener('submit', validarFormulario);

//declaracion de funcion
function validarFormulario(e) {
    e.preventDefault(); //Evita la acción por defecto del evento

    console.log('Consultar una api..');
    console.log(e.target.action);
}