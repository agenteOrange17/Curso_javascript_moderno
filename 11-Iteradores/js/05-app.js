// Veamos otro iterador que es muy común en otros lenguajes y también en javascript, es el do while...

// a diferencia del for y del while, el do while se ejecuta al menos una vez, y después verifica si la condición se cumple...

// Do While va a correr al menos una vez.

let i = 0; // Inicio

do {
    //Bloque de codigo
    console.log(`Numero: ${i}`)
    i++;          //Incremento
} while( i < 10 );//Condicion


// Ahora, lo que hace diferente a un while de un for o un do while, es que al menos se va a ejecutar una vez aunque la condición no se cumpla...

// cambiamos el i a 100 y revisamos...



/******** EJERCICIOS ***************/
/*
//Imprimir los números del 1 al 10 en orden ascendente.
let contabilizador = 10

while(contabilizador <= 1 ){
    contabilizador = contabilizador + 1 
    console.log(contabilizador + ' segundos');
}


//Calcular la suma de los números pares del 1 al 50.

let suma = 0; // Variable para almacenar la suma de los números pares
let numero = 2; // Variable para mantener el número actual

while (numero <= 50) { // Bucle que se ejecuta mientras el número sea menor o igual a 50
  suma += numero; // Suma el número actual a la variable suma
  numero += 2; // Incrementa el número en 2 para pasar al siguiente número par
  console.log('El número par es: ' + suma);
}

console.log("La suma de los números pares del 1 al 50 es: " + suma); // Imprime el resultado en la consola


// Imprimir los múltiplos de 3 del 1 al 30.

let numero2 = 1; // Variable para mantener el número actual

while (numero2 <= 30) { // Bucle que se ejecuta mientras el número sea menor o igual a 30
  if (numero2 % 3 === 0) { // Verifica si el número es divisible por 3 (es un múltiplo de 3)
    console.log( 'El número multiplo es: ' + numero2); // Imprime el número si es múltiplo de 3
  }
  numero2++; // Incrementa el número en 1 para pasar al siguiente número
}


//Calcular el producto de los primeros 5 números impares.

let producto = 1; // Variable para almacenar el producto de los números impares
let contador = 1; // Variable para llevar la cuenta de los números impares encontrados
let numero3 = 1; // Variable para mantener el número actual

while (contador <= 5) { // Bucle que se ejecuta mientras el contador sea menor o igual a 5
  if (numero3 % 2 !== 0) { // Verifica si el número es impar
    producto *= numero3; // Multiplica el número actual por el producto acumulado
    contador++; // Incrementa el contador de números impares encontrados
  }
  numero3++; // Incrementa el número en 1 para pasar al siguiente número
  console.log( 'El producto es: ' + numero3);
}

console.log("El producto de los primeros 5 números impares es: " + producto); // Imprime el resultado en la consola



//Sabiendo esto y cómo funciona el bucle while, podemos crear la cuenta atrás del cohete.

// iniciamos la variable fuera del bucle
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

console.log('¡Despegue! 🚀')

*/


/*Saliendo de un bucle con break
Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada break. Cuando 
el intérprete de JavaScript encuentra la palabra break, sale del bucle y continúa ejecutando el código que haya después.*/

/*
let cuentaAtras2 = 10

while (cuentaAtras2 > 0) {
  console.log(cuentaAtras2)
  cuentaAtras2 = cuentaAtras2 - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras2 === 5) {
    break // <---- salimos del bucle
  }
}



/*Saltando una iteración con continue
Igual que tenemos la posibilidad de "romper" el bucle con break, también podemos saltarnos una iteración con continue. 
Cuando el intérprete de JavaScript encuentra la palabra continue, salta a la siguiente iteración del bucle.*/

/*
let cuentaAtras3 = 10

while (cuentaAtras3 > 0) {
  cuentaAtras3 = cuentaAtras3 - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtras3 % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras3)
}

*/


/*Anidación de bucles
Podemos anidar bucles dentro de otros bucles. Imagina que en nuestra cuenta atrás para el cohete, 
tenemos que revisar que 3 cosas están en sus parámetros: el oxígeno, el combustible y la temperatura.*/
/*
const NUMERO_REVISIONES = 3
let cuentaAtras4 = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras4 > 0) {
  // mostramos el valor de la cuenta atrás
  console.log(cuentaAtras4)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras4 = cuentaAtras4 - 1
}
*/