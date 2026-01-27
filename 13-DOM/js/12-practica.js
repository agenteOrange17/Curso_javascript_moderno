// Ejercicio 1
const titulo = document.getElementById('titulo');
console.log('Texto del Titulo: ', titulo.textContent);

const cards = document.querySelectorAll('.card');
console.log('Cantidad de cards:', cards.length);

// Ejercicio 2
titulo.textContent = 'Titulo Modificado';
const parrafo = document.querySelector('.texto');
parrafo.textContent = 'Párrafo modificado con JavaScript';

// Ejercicio 3
titulo.style.color = 'Red';
titulo.style.fontSize = '40px';

// Ejercicio 4
const card = document.querySelector('.card');
card.classList.add('activo');

const segundoCard = document.querySelectorAll('.card')[1];
segundoCard.classList.remove('activo');

// Ejercicio 5
const nuevoDiv = document.createElement('DIV');
nuevoDiv.classList.add('card');

const nuevoTitulo = document.createElement('H2');
nuevoTitulo.textContent = 'Producto 3';

const nuevoParrafo = document.createElement('P');
nuevoParrafo.textContent = 'Precio: $300';

nuevoDiv.appendChild(nuevoTitulo);
nuevoDiv.appendChild(nuevoParrafo);

const contenedorCards = document.querySelector('.contenedor-card');
contenedorCards.appendChild(nuevoDiv);



// Bonus
// Cuando se haga click en el boton de "Cambiar Titulo", cambiar el texto del h1 a "Titulo Cambiado"
const btnTitulo = document.querySelector('#btn-cambiar');
btnTitulo.addEventListener('click', function() {
    titulo.textContent = 'Titulo Cambiado';
})