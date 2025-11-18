//Traversing DOM

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.firstElementChild);//Para traer el primer elemento usamos first
console.log(navegacion.lastElementChild);//Para traer el ultimo elemento usamos last;

/*
 //Al expandir el navegador, se muestra el menu lo cual se le llaman como nodos y para acceder a ellos
 console.log(navegacion.childNodes);// Los espacios en blancos son considerados elementos
 console.log(navegacion.children);// Los espacios en blancos son considerados elementos;


 //Children recorres los hijos
console.log(navegacion.children[0].nodeName);//nos muestra el nombre del nodo; 
console.log(navegacion.children[0].nodeType);//nos muestra el tipo de nodo;;
 */


const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo Heading desde traversing the doom';
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0].src);

/*En resumen básicamente lo que se refiere es otra versin, es ir recorriendo, ir encontrando tu camino sobre los
diferentes nodos o los diferentes elementos HTML de tu sitio o de tu aplicación web. */

//Traversing desde el padre al hijo

//console.log(card.parentNode);
//console.log(card.parentElement.parentElement.parentElement); //parent.Element vas recorriendo hacia el padre del elemento que estas


//Otra forma de hacer traversing
// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);


//Para regresar un elemento antes usamos previousElementSibling
// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling);