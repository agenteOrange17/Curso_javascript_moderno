
/**
 * 
 - Dado un carrito de objetos {nombre, precio}, usa map para un array de strings.
- Usa forEach para imprimir cada elemento con formato.
 */

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// Usando map para crear un nuevo array de strings
const nuevoArray = carrito.map( producto => `Articulo: ${producto.nombre} - Precio: $${producto.precio}`);



// Usando forEach para imprimir cada elemento con formato
const arrayForEach = carrito.forEach( producto => {
    console.log(`Articulo: ${producto.nombre} - Precio: $${producto.precio}`);
})
console.log('Array creado con map:');
console.log(nuevoArray);

console.log('Array creado con forEach');
console.log(arrayForEach);