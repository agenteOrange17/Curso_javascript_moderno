
// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 300,
    disponible: true, // el último elemento puede o no tener la ,
}



// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas
/*
const { nombre } = producto;

// si deseas extraer más variables;
const { precio } = producto;
*/


//se puede simplificar a una sola linea de codigo
const {nombre, precio, disponible } = producto;

console.log(nombre)
console.log(precio)
console.log(disponible)


// O puedes hacerlo mejor con 
/*
const {nombre, precio} = producto;
*/
