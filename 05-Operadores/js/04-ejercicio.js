// Ejercicios
const edad = 30;
const tieneTicket = true;
const tieneDinero = true;
const tipoEntrada = "Normal";

// Usando los operadores
console.log("Edad: " + edad);
// La edad es mayor o igual a 18
console.log("¿Es mayor de edad?:", edad >= 18);

// si la edad es menor de 65
console.log("¿Es menor de 65?:", edad <= 65);

// Si puede entrar
console.log("¿Puede entrar?:", edad >= 18 && tieneTicket);
// Puede comprar
console.log("¿Puede comprar entrada?:", tieneDinero || tieneTicket);

//TIpo de entrada
console.log("¿Es entrada VIP?:", tipoEntrada === 'VIP');

// Tipo de entrada
console.log("¿No es entrada Estandar?:", tipoEntrada !== 'Estandar');

// Bonus
console.log("La edad esta entre:", edad >= 18 && edad <= 65 );

//Type Of
console.log(typeof edad);
console.log(typeof tieneTicket);
console.log(typeof tieneDinero);
console.log(typeof tipoEntrada);
