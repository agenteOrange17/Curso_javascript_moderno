//Fetch API ocupa Promises y ya tiene resource y reject

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url = 'data/datos.txt';
    fetch(url)//La url de donde queremos obtener los datos o enviar los datos
        .then( respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text(); //se coloca un return para la respuesta que quiero en formato texto
        })
        .then ( datos => { //Agrego otro .then para poder traer la informacion a consola
            console.log(datos);
        })
        .catch( error => {
            console.log(error);
        })
}