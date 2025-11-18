//Eventos que suceden con el teclado

const busqueda = document.querySelector(".busqueda");


/*
//keydown se ejecuta cuando presionas una tecla
busqueda.addEventListener('keydown', () => {
    console.log('escribiendo con keydown...');
})

//keyup se ejecuta cuando sueltas una tecla
busqueda.addEventListener('keyup', () => {
    console.log('escribiendo keyup...');
})

//blur se ejecuta cuando pierdes el foco y se usa en validacion de formularios
busqueda.addEventListener('blur', () => {
    console.log('escribiendo blur...'); //tienes que entrar al input y salir
})

//copy se ejecuta cuando se copia un texto
busqueda.addEventListener('copy', () => {
    console.log('copy...');
})

//paste se ejecuta cuando se pega un texto
busqueda.addEventListener('paste', () => {
    console.log('paste...');
})

//cut se ejecuta cuando se corta un texto
busqueda.addEventListener('cut', () => {
    console.log('cut...');
})


//input se ejecuta cuando se escribe en el input, cortas, pegas , sueltas a excepcion del blur
busqueda.addEventListener('input', () => {
    console.log('input...');
})
*/

//para saber que se esta escribiendo

busqueda.addEventListener('input', (e) => {
    //console.log(e.type); //Muestra de que tipo es 
    //console.log(e.target);//Que input esta escribiendo

    //si escribo algo y lo borro se ejecuta
    if (e.target.value === '' ) {
        console.log('fallo la validacion'); 
    } 
            
    //console.log(e.target.value); //para saber que se esta escribiendo
})