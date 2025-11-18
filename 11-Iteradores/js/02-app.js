// Veamos lo que es break y continue, break cortará la ejecución del for loop, mientras que continue nos permitirá interceptar digamos un elemento y continuar su ejecucicón...

//Crea un arreglo que cuando llegue a la posicion 5 se detenga

/*
for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... FIN.');
        break; //Hace que no  vuelva a ejecutar el forloop
    }
    console.log(`Numero:  ${i} `);
}


for(let i = 0; i <= 10; i++) {
    if( i === 5) {
        console.log('Estamos en el 5... CONTINUAR....');
        continue; // Rompe el ciclo en el cual estamos ya no va a ejecutar la siguiente linea
    }
    console.log(`Numero:  ${i} `);
}
*/
//  Y en que casos puedes utilizar el continue??




const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700, descuento: true},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Queremos decirle al usuario que uno de los elementos que agrego al carrito tiene descuento
for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento... `);
        continue;
    }
    console.log(carrito[i].nombre);
}

// El Reto de Fizz BUZZ

// Fizz Buzz es un reto que complica mucho a los programadores, básicamente si un número es múltiplo de 3 imprimes FIZ, si es múltiplo de 5 imprimes BUZZ y si es múltiplo de ambos como 15, 30, 45 debes imprimir FIZZ BUZZ, intenta realizarlo y si no veamos como realizarlo en el próximo video...