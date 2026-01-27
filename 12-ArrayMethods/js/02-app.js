//Método findIndex


//Arreglo de indices
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];



//Arreglo de objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Metodo con forEach manual
meses.forEach((mes, i) => {
    if(mes === 'Enero') {
        console.log(`Encontrado en el indice ${i}`);
    }
});

//Encontrar el indice de Abril con metodo findIndex

//Se ocupa con arrowfunctions y su funcion es igual, el codigo queda mas simplificado
const indice = meses.findIndex( mes => mes === 'Abril');  

console.log(indice); //El resultado lanzara la posicion, en caso de no encontrarlo arrojara -1


//Encontrar el indice en un arreglo de objetos
const productos = carrito.findIndex( producto => producto.nombre === 'Teclado');
console.log(productos);