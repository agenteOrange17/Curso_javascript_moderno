// algunas veces vas a desear ejecutar tu código hasta que una condición se cumpla o se deje de cumplir...

// los For Loops tienen esa caracteristica, se ejecutan hasta que el código deja de cumplir esa condición...
// For loop

// Inicializar el for
// condición
// Incremento

//  i <= 10; es hasta donde llega

//si quiero que vaya de 2 en 2 o de 5 en 5 solo cambiar "+= 2, 5"
for(let i = 0; i <= 10; i += 2) {
    console.log(`Numero:  ${i} `);
}

// cambiar el <= < o el número hasta unos 20, también iniciarlizar o avanzar con i+= 2



// Podemos llevar este ejemplo más allá una pregunta sencilla para programadores JR es como identificas un numero par o impar en un for loop...
// como identificas los numeros que sean pares y los que sean nones
for(let i = 0; i <= 10; i++) {
    // i es el valor  al utilizarlo con modulo (%)si es igual a 0 ese numero es igual a par.
    if(i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
}
    


// Los for son útiles cuando tienes un arreglo, digamos un carrito de compras...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

/* Lenght menciona cuanto mide el carrito

*/
console.log( carrito.length ); // imprime cuantos los elementos que haya en el arreglo

// for se inicia desde el primer elemento i = 0; 
// i < carrito.length se va a ejecutar hasta que sea menor a lo que mide el carrito
//   i++ para ir de uno en uno
for(let i = 0; i < carrito.length; i++ ) {
    // carrito[1] esa posicion va ir cambiando y accediendo a los diferentes indices de los arreglos
    //.nombre para entrar a la sintaxis
    console.log(carrito[i].nombre);
}

// en este caso nuestro for loop corre hasta que una condición se cumple, ahora como este arreglo el usuario se va a encargar de llenarlo, que el carrito tenga elementos, un for loop ejecutará el código hasta que lleguemos al final del carrito...