// Filter - Retorna un nuevo array con los elementos que cumplen la condicion

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Filter Crea un nuevo arreglo con la condicion que estes revisando en ese momento
let resultado;

//Traer los productos que cuesten mas de 400
resultado = carrito.filter( producto => producto.precio > 400); 

//Traer todos los productos que cuesten menos de 600 
resultado = carrito.filter( producto => producto.precio < 600); 

//Traer todos excepto Audifonos
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos'); 

//Traer solo un producto
resultado = carrito.filter( producto => producto.nombre === 'Audifonos'); 

console.log(resultado);