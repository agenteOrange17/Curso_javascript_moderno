//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

//Arreglo para guardar todos los tweets
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets') || [] );

        console.log(tweets);

        crearHTML();
    })
}

//Funciones

function agregarTweet(e){
    e.preventDefault();
    

    //Text area donde  el usuario escribe su tweet
    const tweet = document.querySelector('#tweet').value;
    
    //Validar que el tweet no este vacio
    if(tweet === ''){
        mostrarerror('Un mensaje no puede ir vacio');
        return; //Evita que se sigan ejecutando mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet //Es lo mismo que escribir tweet: tweet
    }
    //Agregar al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Una vez agregado vamos a crear el HTML
    crearHTML();

    //Reiniciar el formulario cuando termino de escribir
    formulario.reset();
}


//Mostrar Mensaje de Error

function mostrarerror(error){
    //Ocupamos scripting
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);    

    //Para desaparecer en 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000)
}

//Muestra un listado de los tweets
function crearHTML(){
    
    //Limpiar el html
    limpiarHTML();


    if (tweets.length > 0) {
        tweets.forEach(tweet =>{

            //Agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            

            //Crear el HTML
            const li = document.createElement('li');

            //asignar el texto al tweet
            li.textContent = tweet.tweet;

            //Asignar el boton
            li.appendChild(btnEliminar);


            //Insertarlo en el HTML
            listaTweets.appendChild(li);

        })
    }

    //Sincronizar con el localStorage
    sincronizarStorage();
}

//Agrega los Tweets actuales a LocalStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));//usamos JSON.stringify para convertir
}

//Elimna un Tweet
function borrarTweet(id){
    //Se usa un arraymethod
    tweets = tweets.filter( tweet => tweet.id !== id);
    
    //Para que se refresque el frontend usamos 
    crearHTML();
}

// Limpiar el HTML
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}