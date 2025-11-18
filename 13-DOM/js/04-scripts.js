//QuerySelector actua similar a getElementById es decir retorna maximo 1 elemento pero tiene la caracteristica de retornar clases

//Solo retorna el primero que encuentre, en este caso si tengo 3 retorna el primero que encuentre
const card = document.querySelector('.card');
console.log(card);

const info = document.querySelector('.premium .info');

console.log(info);

//Seleccionar el segundo card de la lista de cards
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);


//Tambien permite seleccionar id y aplica lo mismo `
const formulario = document.querySelector('.contenido-hero #formulario');
console.log(formulario);


//seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);