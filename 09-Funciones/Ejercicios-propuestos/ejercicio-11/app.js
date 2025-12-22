/*
- Arrow con un parámetro sin paréntesis.
- Arrow con múltiples parámetros con paréntesis.
*/

const arrowF1 = (parametro1) => `Este es el parametro: ${parametro1}`;


// Arrow function sin el parentesis, cuando solo es un parametro
const arrowF2 = parametro2 => `Este es el parametro sin parentesis: ${parametro2}`;


// Arrow function con multiples parametros// Nota cuando son multiples parametros si se requieren los parentesis
const arrowF3 =(param1, param2) => `Este es el parametro uno: ${param1} y este es el parametro dos: ${param2}`;

// Mandar a llamar la funcion
console.log(arrowF1('Valor 1'));
console.log(arrowF2('Valor 2'));
console.log(arrowF3('Valor 3', 'Valor 4'));