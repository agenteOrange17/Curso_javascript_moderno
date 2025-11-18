// Tomando ejemplo 1
let dinero = 500;
let totalCarrito = 3000;
let tarjeta = true;
let cheque = true;

//El else se cumple cuando no se cumple
//Primera validación
if( dinero >= totalCarrito ) {
    console.log('Si podemos pagar');
} else  if (cheque) {
    console.log('Si tengo un cheque');
} else if(tarjeta) { 
    console.log('Si puedo pagar porque tengo la tarjeta')
} else { 
    console.log('Fondos Insuficientes');
}



//Ejemplo 2
// Algunas veces vas a desear revisar si se cumple más de una condición...
let rol = 'ADMIN';

if(rol === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario solo puede editar sus registros');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}

// El problema del else if es que si agregas múltiples llegan a ser complejos de leer...

let rol2 = 'AUTOR';

if(rol2 === 'ADMIN') {
    console.log('El Usuario puede editar, eliminar y ver toda la información');
} else if(rol === 'EDITOR' ) {
    console.log('El usuario puede editar todos los registros');
} else if(rol === 'AUTOR') { 
    console.log('El usuario solo puede registrar usuarios');
} else {
    console.log('El Usuario es visitante, solo puede ver la información');
}

// Para ello llegan a ser más útiles los Switch, veamos que son y después volvemos hacia más ejemplos de if else