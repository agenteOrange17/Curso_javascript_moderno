const carrito = new Set();

//Para agregar metodos
carrito.add('Camisa'); //Los sets solo son valores
carrito.add('Disco');
carrito.add('Guitarra'); 
carrito.add('Bateria');
carrito.add('Bajo'); 
carrito.add('Disco');//Nota importante no puedo agregar dos valores repetidos en este caso lo detecta como que ya fue agregado


//Para eliminar un elemento 

console.log(carrito.delete('Camisa'));//En caso de que no encuentre un valor que no existe solo mandara un true o false

//Comprobar si un elemento existe en el set
//console.log(carrito.has('Camisa'));

//Por ejemplo para obtener cuantos elementos hay en un arreglo en los sets utilizan size
console.log(carrito.size);

//Para eliminar todos los elementos del Set
//carrito.clear();

//Los sets son iterables
carrito.forEach( (producto, index, pertenece) => { 
    //console.log(producto);
    //console.log(index);
    console.log(pertenece);

})

console.log(carrito);

//Ejemplo de uso del SET
//Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);
