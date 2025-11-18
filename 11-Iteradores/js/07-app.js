// En este video veremos for of...

/* For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, 
este ejecuta mientras haya elementos por iterrar como puede ser un arreglo y otros llamados Maps y Sets que veremos más adelante...*/

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let pendiente of pendientes) {
    console.log(pendiente);
}

//Separador
console.log('-------------');
// Sin duda una forma más sencilla que un foreach y un for no?


//Otro Ejemplo
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500  },
    {nombre: 'Television', precio: 100  },
    {nombre: 'Tablet', precio: 200 },
    {nombre: 'Audifonos', precio: 300  },
    {nombre: 'Teclado', precio: 400 },
    {nombre: 'Celular', precio: 700  }
];
for( let producto of carrito) {
    console.log(producto.nombre);
}

//for of es una forma mas simple de iterar o recorrer los arreglos