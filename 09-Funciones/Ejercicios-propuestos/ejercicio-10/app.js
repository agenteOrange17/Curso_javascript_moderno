/**
 - Reescribe una función tradicional a arrow y retorna un string.
- Muestra diferencias de sintaxis y retorno implícito.
 */

/* Metodo tradicional */
const tradicional =  function(){
    console.log('Función tradicional');
}


// Metodo Arrow Function
const arrowF = () => {
    console.log('Función Arrow');
}


// Retorno implícito
const arrowF2 = () => 'Funcion Arrow con retorno implícito';

/* Llamar las funciones */
console.log(tradicional());
console.log(arrowF());
console.log(arrowF2());