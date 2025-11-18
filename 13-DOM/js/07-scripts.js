// const encabezado = document.querySelector('h1');
// //Sintaxis para cosas sencillas pero no ideal para muchos cambios
// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';


//Seleccionando el primer card
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase'); //add para agregar una nueva clase
card.classList.remove('card'); //remove para remover una clase
console.log(card.classList);