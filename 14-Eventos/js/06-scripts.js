//Event Bubbling es cuando un evento se dispara en un elemento hijo y se propaga a su padre, hasta llegar al nodo raíz.

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en card');
})

infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en info');
})

titulo.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Click en titulo');
})

//El eventBubbling es cuando presionas en un elemento y se disparan los otros elementos
//para evitar la propagacion se utiliza e.stopPropagation()

