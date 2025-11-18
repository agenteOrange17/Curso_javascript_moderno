//Eventos que suceden con el scroll

window.addEventListener('scroll', () => {
    //console.log('scrolling');

    //para ver scroll vertical
    // const scrollPX = window.scrollY;

    // console.log(scrollPX);


    //animacion
    const premium = document.querySelector('.premium');

    //getBoundingClientRect devuelve el tamaño y posicion de un elemento
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible');
    }else{
        console.log('Aun no, continua dando mas scroll');
    }
});