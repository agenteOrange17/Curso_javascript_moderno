/*

const cliente = 'Elliot';


//El scope solo existe dentro de la funcion
function mostrarCliente(){
    const cliente = 'Tyrell';

    console.log(cliente);
}

console.log(cliente);

mostrarCliente();

*/

//Closure

const obtenerCliente = () => {
    const nombre = 'Tyrell';

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();