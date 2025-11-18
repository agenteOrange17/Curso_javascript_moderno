//Método find - Te va a crear un nuevo arreglo basado en la condicion que se esta revisando


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


//Con forEach
let  resultado = '';
carrito.forEach((producto, index) => {
    if (producto.nombre === 'Tablet') {
        resultado = carrito[index];
    }
});

console.log(resultado);



//.find - Devuelve solamente devuelve el primer elemento que cumpla con la condicion
const resultado2 = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado2);

//En caso de querer traer todos los valores usamos mejor .filter