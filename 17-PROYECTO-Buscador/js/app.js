

//Variables  
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


//Contenedor para los resultados
const resultado = document.querySelector('#resultado')

const max = new Date().getFullYear();
const min = max - 10;

//Generar un objecto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',

}


//Eventos
document.addEventListener('DOMContentLoaded', () =>{

    mostrarAutos(autos); //Muestra los autos al cargar

    // Llena las opciones de años
    llenarSelect();
});


//Event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener("change", e => {
    datosBusqueda.year = parseInt(e.target.value); //Se le coloca el parseInt para convertirlo de un string a un numero
    filtrarAuto();
});


minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;    

    filtrarAuto();

});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;  
    filtrarAuto();

});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);    
    filtrarAuto();

});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;    
    filtrarAuto();

});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;    
    filtrarAuto();

    console.log(datosBusqueda);
});


//Creacion de funciones
function mostrarAutos(autos){

    limpiarHTML(); //Elimina el HTML Previo

    autos.forEach( auto => {

        //Aplicando destructuring
        const { marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}
        `;

        //Insertar
        resultado.appendChild(autoHTML);
    })

}

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect(){

    //creo el for para que me muestre a partir del 2023 al 2013
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);// Agrega las opciones del año al select year
    }   
}

//Funcion que filtra en base a la busqueda
function filtrarAuto(){
    //usamos un arraymethod con filter para hacer todo tipo de filtrado
    //Funcion de alto nivel = es una funcion que toma otra funcion
    const resultado = autos.filter( filtrarMarca ).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTranmision).filter(filtrarColor);


    if (resultado.length) {
    //paso el resultado de los filtros
    mostrarAutos(resultado);    
    }else{
        noResultado();
    }
}

//Funcion en caso de que no encuentre un resultado
function noResultado(){

    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No hay Resultados, Intenta con otra búsqueda';

    resultado.appendChild(noResultado);
}

//Esta funcion solo se encarga de filtrar la marca
function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    //Realizamos la comparación
    //Si hay un valor en la busqueda de la marca entonces
    if ( marca ) {
        return auto.marca === marca; //Filtra los que hay
    }
    //Para mantener los valores originales
    return auto; //Sino me trae todos los autos
}


function filtrarYear(auto){
    const { year } = datosBusqueda;
    
    if ( year ) {
        return auto.year === year;
    }
    return auto;
}


function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;
    
    if ( minimo ) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;
    
    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}


function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTranmision(auto){
    const { transmision } = datosBusqueda;
    
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}


function filtrarColor(auto){
    const { color } = datosBusqueda;
    
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}