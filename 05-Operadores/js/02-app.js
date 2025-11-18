
//Para comparar 2 valores
const numero1 = 20;
const numero2 = "20";
const numero3 = 30;


// Revisar si 2 valores son iguales o diferentes
console.log(numero1 == numero3); //False
console.log(numero1 == numero2); // true


//Comparador estricto
// console.log(numero1 === numero2);

//parseInt es para convertir un string a un numero
// console.log(numero1 === parseInt(numero2))

// Typeof
console.log( typeof numero1 ); //Indica una cadena número
console.log( typeof numero2 ); //Indica una cadena string

// Operador estricto (revisa valor y tipo de dato)
console.log(numero1 === numero2 ); //false

// Diferente a  !=
console.log(numero1 != numero3);  //true
console.log(numero1 != numero2);  //false
console.log(numero1 !== numero2); //true


//Diferente tomando un ejemplo de login y Diferente a
const password1 = "admin";
const password2 = "Admin";
//!= diferente a 
console.log(password1 != password2);  //true
console.log(numero1 != numero2);      //false
console.log(numero1 !== parseInt(numero2)); //false
