//Function declaration

//Puedo mandarla a llamar antes y funciona correctamente
//obtenerCliente('ELliot')

function obtenerCliente(nombre){
    console.log(`El nombre del cliente es: ${nombre}`);
}

obtenerCliente('ELliot')



//Function expression
//No puedes mandarla a llamar antes por que no se ha declarado
//obtenerCliente2('Tyrell')
const obtenerCliente2 = function(nombre){
    console.log(`El nombre del cliente es: ${nombre}`);
}

obtenerCliente2('Tyrell');