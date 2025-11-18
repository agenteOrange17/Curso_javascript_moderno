//Generadores
/* Un generador es una funcion que retorna un iterador*/

/*
function *crearGenerador(){ //Si tiene un * es que es un generador
    //yield Palabra reservada que son los valores que se pueden iterar
    yield 1; //Enteros
    yield 'Elliot'; //strings
    yield 3+3;
    yield true;

    //yield son los valores que se iteran en este caso de manera estatica
}
const iterador = crearGenerador();

console.log(iterador);
//Suspended digamos que el generador se queda dormido por no usarlo
//El next es lo que permite ir iterando sobre el generador una vez que utilizas la funcion next esque generador despierta y despues vuelve a suspended
//console.log(iterador.next());
//Para acceder al valor de un generador se utiliza el metodo .value
//Cada next va recorriendo los yield
console.log(iterador.next().value);
console.log(iterador.next().done);
console.log(iterador.next().value);

console.log(iterador);
*/ 

//Supongamos que tenemos un arreglo mas complejo con un carrito de compras y queremos utilizar un generador para ir iterando sobre los diferentes elementos

//Generador para carrito de compras

function *generadorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i]; //yield retorna un valor
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const iterador = generadorCarrito(carrito);


//Para utilizar el generador
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());