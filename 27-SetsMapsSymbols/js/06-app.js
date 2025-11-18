//Iteradores propio

function crearIterador(carrito){ //Va iterar sobre un carrito
    //Definir contador
    let i = 0; //Comienza desde la posicion 0
    
    return{
        siguiente: () =>{
            //Variable
            const fin = (i >= carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3','Producto Nuevo'];

//Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());