//Seleccionar elementos por su clase..

const header = document.getElementsByClassName('header');

console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen mas de 1 vez podemos poner

const contenedores = document.getElementsByClassName('contenedor'); 

console.log(contenedores);

//Si una clase n oexiste

const noExiste = document.getElementsByClassName('no-existe');

console.log(noExiste);