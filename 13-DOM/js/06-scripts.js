//Modificar Textos o Imagenes con JS

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);



// console.log(encabezado.innerText);// Si en el css visibility: hidden; no se ve el texto
// console.log(encabezado.textContent);// Si lo va a encontrar
// console.log(encabezado.innerHTML); // Se trae el HTML


// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


//Para cambiar una imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';