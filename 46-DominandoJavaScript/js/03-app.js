//Coercion es la conversion automatica explicita o implicita de un tipo de dato a otro.
const numero1 = 20;
const numero2= "40";

//Esta forzando a sumar el numero con el string y dara resultado = 2040 y lo convierte en un string
console.log(numero1 + numero2); //Implicita

console.log(Number(numero2));// Explicita

//Esta forzando a sumar el numero con el string y dara resultado = 60 y lo convierte en un numero;
console.log(numero1 + Number(numero2)); 


//Otra manera
console.log(numero1.toString());//Explicita

const pedido = [1, 2, 3, 4];
console.log(pedido.toString());

//Ocupando JSON
console.log(JSON.stringify(pedido));