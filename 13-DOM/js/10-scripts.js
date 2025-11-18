//Generar HTML
/*
//Crear nuevo enlace
const enlace = document.createElement('a'); //Permite crear nuevos elementos 

//Agregar texto al enlace
enlace.textContent = 'Nuevo Enlace'; 

//Agregando href
enlace.href = 'https://www.youtube.com/';

//Agregando el target
enlace.target = '_blank';

//data
enlace.setAttribute('data-enlace', 'nuevo-enlace');

//Agregar una clase
enlace.classList.add('alguna-clase');


//
enlace.onclick = myFunction;

console.log(enlace);

//Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace);//Appendchild es como agregarle un nuevo hijo a la navegacion

//Usamos children para ver los hijos
//console.log(navegacion.children);

//Para acomodarlo utilizamos insertBefore
navegacion.insertBefore(enlace, navegacion.children[1]);

function myFunction(){
    alert('Hiciste click');
}
*/

//Segundo caso mas complejo

//Crear un card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
//Con appendChild agregamos los elementos al div
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//texto alternativo
imagen.alt = 'Imagen de hacer ';

//Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

//Ahora vamos a insertar en htlm
const contenedor = document.querySelector('.hacer .contenedor-cards');
//contenedor.appendChild(card);

//Para mostrarlo al inicio usamos insertBefore

contenedor.insertBefore(card, contenedor.children[0]);
