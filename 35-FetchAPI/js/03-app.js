//Este es cargar un JSON que es un arreglo

//Manera automatica
//document.addEventListener('DOMContentLoaded', obtenerDatos);

//Manera por click 
const  cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleados.json';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado));
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido');


    //Iniciamos un string vacio
    let html = '';

    //empleados para ir recorriendo cada uno de ellos
    empleados.forEach( empleados => {
        //Aplicamos destructuring para extraer los valores de cada empleado
        const {id, nombre, empresa, trabajo} = empleados;

        //Ir concatenando cada empleado
        html += `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p> 
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `;

    })

    contenido.innerHTML = html; //Para mostrarlo
}