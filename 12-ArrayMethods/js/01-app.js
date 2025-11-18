

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


//Comprobar si un valor existe en un arreglo
//Ahora Bien .includes este tipo de arreglo solo que tienen un valor en el indice
/*
meses.forEach( mes => {
    if(mes === 'Enero') {
        console.log('Enero si existe');    
    }
})

const resultado = meses.includes('Enero');
console.log(resultado);
*/

//Si quiero revisar si un valor existe en un arreglo de objetos se utiliza .some
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Array Method
//En un arreglo de objeto se utiliza .some
const existe = carrito.some( producto => producto.nombre === 'Celular'); //Como solo se le paso un valor y solo se consulto una vez se simplifica a un arrow Funtion

console.log(existe);


const existe2 = meses.some( mes => mes === 'Febrero');
console.log(existe2);

//En resumen .some soporta un arreglo de indice y un arreglo de objetos