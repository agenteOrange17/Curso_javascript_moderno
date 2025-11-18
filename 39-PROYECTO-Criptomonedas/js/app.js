
const criptoMonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');

const formulario = document.querySelector('#formulario');

const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda : ''
}

//Resumen que estoy haciendo 
/*Una vez que el documento este listo ejecutar DOMContentLoaded consulta y obtene las criptomonedas 
= Consultamos las criptomonedas
- Cargamos la url
- Obtenemos una respuesta
- Una vez que tengamos una respuesta como Json 
- Obtener las Criptomonedas(resultado.Data)
- Entonces armamos nuestro select de criptomonedas 
-
-
-
*/

//Crear un Promises
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
})

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);

    criptoMonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
})

// Define una función para consultar la API de criptomonedas.
function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'; // URL de la API.
    fetch(url) // Realiza una petición HTTP a la URL.
        .then(respuesta => respuesta.json()) // Convierte la respuesta en JSON.
        .then(resultado => obtenerCriptomonedas(resultado.Data)) // Obtiene los datos de las criptomonedas.
        .then(criptomonedas => selectCriptomonedas(criptomonedas)) // Pasa los datos a la función para poblar el selector.
}





// Toma los datos de las criptomonedas y los añade al selector en el DOM.
function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach(cripto => { // Itera sobre cada criptomoneda.
        const { FullName, Name } = cripto.CoinInfo; // Extrae el nombre completo y el nombre corto.
        const option = document.createElement('option'); // Crea un nuevo elemento de opción.
        option.value = Name; // Establece el valor de la opción.
        option.textContent = FullName; // Establece el texto de la opción.
        criptoMonedasSelect.appendChild(option); // Añade la opción al selector de criptomonedas.
    });
}



// Actualiza el objeto de búsqueda con la selección del usuario.
function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value; // Actualiza el objeto de búsqueda basado en el nombre y valor del elemento que disparó el evento.
    console.log(objBusqueda); // Imprime el objeto de búsqueda para depuración.
}


// Maneja el envío del formulario.
function submitFormulario(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado de envío del formulario.

    const { moneda, criptomoneda } = objBusqueda; // Extrae los valores seleccionados.
    if(moneda === '' || criptomoneda === '' ){ // Verifica si ambos campos están llenos.
        mostrarAlerta('Ambos campos son obligatorios'); // Muestra una alerta si no lo están.
        return; // Detiene la ejecución de la función si hay campos vacíos.
    }
    
    //Consultar la API con los resultados
    consultarAPI();

}


// Muestra una alerta en el formulario.
function mostrarAlerta(msg) {
    const existeError = document.querySelector('.error'); // Busca si ya existe un mensaje de error.
    if (!existeError) { // Si no hay un mensaje de error existente...
        
        const divMensaje = document.createElement('div'); // Crea un nuevo div para el mensaje.
        divMensaje.classList.add('error'); // Añade la clase 'error' al div.
        divMensaje.textContent = msg; // Establece el mensaje de error.
        formulario.appendChild(divMensaje); // Añade el div al formulario.
        setTimeout(() => {
            divMensaje.remove(); // Elimina el div después de 3 segundos.
        }, 3000);
    }
}


function consultarAPI(){
    const { moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;


    //Mostrar el Spinner
    mostrarSpinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion =>{
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCotizacionHTML(cotizacion){

    limpiarHTML();
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `<p>Precio más alto del día: <span>${HIGHDAY}</span></p>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `<p>Precio más bajo del día: <span>${LOWDAY}</span></p>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `<p>Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span></p>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `<p>Última actualización: <span>${LASTUPDATE}</span></p>`;


    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}   

function mostrarSpinner(){
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
    
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>

    `

    resultado.appendChild(spinner);
}