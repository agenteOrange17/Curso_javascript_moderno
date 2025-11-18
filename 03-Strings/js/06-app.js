// Repeat Te va a permitir repetir una cadena de texto:

const producto = 'Monitor 24 pulgadas ';
//aplicando repeat
const texto = 'en Promoción '.repeat(3)
console.log(producto.repeat(3));
console.log(producto.repeat(2.2)); // va a redondear a entero
console.log(`${producto} ${texto} !!!`); //concatenando
 


// Split
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" ")); // se deja un espacio para separar las palabras

const hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(", ")); //los divide por la coma que hay entre ellos

const tweet = "Aprendiendo JavaScript #JSModernoConJuan"
console.log(tweet.split('#'))
