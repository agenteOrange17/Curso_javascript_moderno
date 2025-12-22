
/* - Corrige usando declaración y documenta la diferencia. */

saludar2();

function saludar2(){
    console.log("Hola, Mundo!");
}

// Ejercicio 1 
/* - Intenta llamar una expresión `saludar()` antes de declararla y observa el error. */

saludar();
const saludar = function(){
    console.log("Hola, Mundo!");
}