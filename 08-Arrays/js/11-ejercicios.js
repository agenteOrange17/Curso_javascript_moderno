// Ejercicios Arrays

// Crear una array llamado listaCompras

const listaCompras = [];

// Agregar elemento al array
listaCompras.push('Manzana');
// Agregar leche
listaCompras.push('Leche');
//Agregar Pan
listaCompras.unshift('Pan');
//Agregar Huevos
listaCompras.push('Huevos');
// Imprimir el Array
console.log('Lista Completa:', listaCompras);
// Usando .length
console.log('Cantidad de Elementos:', listaCompras.length);
// Imprimir el primer elemento
console.log('Primer Elemento:', listaCompras[0]);
// Imprimir el ultimo elemento
console.log('Ultimo Elemento:', listaCompras[listaCompras.length - 1]);

// Modificar el array
// Cambiar leche por Leche Deslactosada
listaCompras[2] = 'Leche Deslactosada';
// Eliminar pan
listaCompras.shift();
// Eliminar ultimo elemento usando pop
listaCompras.pop();
console.log('Lista Actualizada:', listaCompras);
// Usando el destructuring

const [primerProducto, segundoProducto] = listaCompras;
console.log('Primer producto extraído:', primerProducto);
console.log('Segundo producto extraído:',segundoProducto);

// Bonus
const nuevaLista = ['Queso', ...listaCompras];
console.log('Nueva Lista:', nuevaLista);

