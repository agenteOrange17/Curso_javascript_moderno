//Reduce basicamente toma una gran cantidad de datos unirlos y entregarte el resultado


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Imaginando que del carrito queremos decirle al usuario cuanto tiene que pagar

//Forma manual con forEach

let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);


//Forma con reduce 

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);