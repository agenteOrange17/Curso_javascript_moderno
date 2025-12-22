// Practica
const nombre = "Mauricio Belmonte";
const email = "maubr170295@gmail.com";
const username = "AgentOrange";

// Obtene el primer caracter del nombre
console.log(nombre.charAt(0)); 
// O bien con substring
console.log(nombre.substring(0,1));

// Convertir el username a mayusculas
console.log(nombre.toUpperCase());
// Verificar que el email tenga el símbolo @
console.log(email.includes('@'));

// Obten la logitud del username
console.log(username.length);

// Curea un nuevo string que muestre
console.log(`El usuario ${nombre.toUpperCase()} tiene el email ${email} y su username tiene ${username.length} caracteres`);

// Bonus
console.log(nombre.slice(0,9));

// Verificar el email termina con .com
console.log(email.endsWith('.com'));
