//Eventos que suceden con el mouse 

const nav = document.querySelector('.navegacion');

//Registrar un evento
nav.addEventListener('click', () => {
    console.log('Click en nav');
});

//Se puede tener multiples eventos


//Mouse out es para salir
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';
});

//Con solo pasar el mouse se ejecuta el evento
nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');

    nav.style.backgroundColor = 'white';
});


//Mousedown es cuando se presiona el mouse es similar a onclick
nav.addEventListener('mousedown', () => {
    console.log('Click con mousedown');
});

//mouseup es cuando se suelta el mouse es similar a onmouseout
nav.addEventListener('mouseup', () => {
    console.log('Soltaste el Click del nav');
});
