const suma = (a, b, c) => a + b + c;

//Curring

//Dividir en 2 partes
/*
const parcial = (a) => (b, c) =>  suma (a, b, c);

const primerNumero = parcial(5);
const resultado = primerNumero(4, 3);

console.log(resultado);
*/

//Dividir en 3 partes
/*
const parcial = a => b => c => suma(a, b, c);

const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);
const resultado = segundoNumero(3);

console.log(resultado);
*/

//Manera mas rapida
const parcial = a => b => c => suma(a, b, c);

const resultadoParcial = parcial(5)(4)(3);

console.log(resultadoParcial);