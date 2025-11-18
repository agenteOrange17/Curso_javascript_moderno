const notificarBtn = document.querySelector('#notificar');


//Una vez que demos click vamos a utilizar la API de notificaciones y correr un metodo si quiere dar permisos para recibir notificaciones
notificarBtn.addEventListener('click', () => {
    Notification            
        .requestPermission()
        .then(resultado => console.log('El Resultado es :', resultado));
});



//Ver notificacion una vez hayamos aceptado la notificacion vamos a crear un mensaje
const verNotificacion = document.querySelector('#verNotificacion'); 
//Cuando hagamos click en ver la notificacion 
verNotificacion.addEventListener('click', () => {
        //Si es grantend me muestra una notificacion
    if(Notification.permission == 'granted'){ 
        
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/ccj.png',
            body: 'OrangeCourse, aprende con proyectos'
        })

        notificacion.onclick = () => {
            window.open('https://www.codigoconjuan.com')
        }
    }
})