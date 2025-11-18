
const cargarJsonBtn = document.querySelector('#cargarJSON');
cargarJsonBtn.addEventListener('click', obtenerDatos);


function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
    //Como solo estoy pasando una funcion puedo eliminar varias lineas y hacerlo en una sola linea
        .then(respuesta => respuesta.json())
        .then(resultado => {mostrarHTML(resultado)})
}

function mostrarHTML({ empresa, id, nombre, trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
    <p>ID: ${id}</p>
    <p>Empleado: ${nombre}</p> 
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
}