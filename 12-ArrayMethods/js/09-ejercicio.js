/*
Crea un programa que maneje una lista de productos. Debes:
Crear un array productos:
   const productos = [       { nombre: 'Laptop', precio: 1000, categoria: 'Electrónica' },       { nombre: 'Mouse', precio: 25, categoria: 'Accesorios' },       { nombre: 'Teclado', precio: 50, categoria: 'Accesorios' },       { nombre: 'Monitor', precio: 300, categoria: 'Electrónica' },       { nombre: 'Auriculares', precio: 80, categoria: 'Accesorios' }   ];
Usando .some():
Verifica si existe un producto llamado 'Laptop'
Muestra el resultado
Usando .findIndex():
Encuentra el índice del producto 'Monitor'
Muestra: "El Monitor está en la posición: X"
Usando .filter():
Filtra los productos que cuestan menos de 100
Muestra el nuevo array
Usando .find():
Encuentra el producto llamado 'Teclado'
Muestra su precio
Usando .reduce():
Calcula el total de todos los precios
Muestra: "Total: $X"
Usando .every():
Verifica si todos los productos cuestan menos de 2000
Muestra el resultado
Ejemplo de salida esperada:
¿Existe Laptop?: trueEl Monitor está en la posición: 3Productos baratos (menos de $100): [{ nombre: 'Mouse', precio: 25, ... }, { nombre: 'Teclado', precio: 50, ... }, { nombre: 'Auriculares', precio: 80, ... }]Precio del Teclado: $50Total: $1455¿Todos cuestan menos de $2000?: true
*/

const productos = [
    { nombre: 'Laptop', precio: 1000, categoria: 'Electrónica' },
    { nombre: 'Mouse', precio: 25, categoria: 'Accesorios' },
    { nombre: 'Teclado', precio: 50, categoria: 'Accesorios' },
    { nombre: 'Monitor', precio: 300, categoria: 'Electrónica' },
    { nombre: 'Auriculares', precio: 80, categoria: 'Accesorios' }
];
   

// Verificar si existe un producto llamado 'Laptop;
const existeLaptop = productos.some(producto => producto.nombre === 'Laptop')
console.log(`¿Existe Laptop? ${existeLaptop}`);

// usando .findIndex()
const indiceMonitor = productos.findIndex(producto => producto.nombre === 'Monitor');
console.log(`El Monitor esta en la posicion: ${indiceMonitor}`);