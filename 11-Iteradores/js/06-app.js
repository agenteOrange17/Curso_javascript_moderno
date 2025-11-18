// Bueno veamos otros iteradores que existen en JavaScript, previamente ya habiamos visto forEach y Map, vamos a verlos en este video y sus diferencias...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`);
});

// Recuerda que como es una sola linea, la llave es opcional...

// Recorrer arreglo de objetos
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500  },
    {nombre: 'Television', precio: 100  },
    {nombre: 'Tablet', precio: 200 },
    {nombre: 'Audifonos', precio: 300  },
    {nombre: 'Teclado', precio: 400 },
    {nombre: 'Celular', precio: 700  }
];

const nuevoArreglo = carrito.forEach ( producto => producto.nombre); //No te crea un arreglo nuevo


const nuevoArreglo2 = carrito.map ( (producto) => producto.nombre); //Map crea un arreglo nuevo



/* Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, 
el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor... */

console.log(nuevoArreglo);
console.log(nuevoArreglo2);


/*
carrito.forEach( producto =>  {
    console.log(`Agregaste ${producto}`);
});*/
