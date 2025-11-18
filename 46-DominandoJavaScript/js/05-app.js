//Explicit Binding

function persona(el1, el2){
    console.log(`Mi nombre es: ${this.nombre} y Escucho ${el1} e ${el2}`);
    
}

const informacion = {
    nombre: 'Elliot'
}


const musicaFavorita = ['Rock', 'Indie'];


//Call le tengo que pasar los varoles separados en arreglos de forma individual

persona.call(informacion, musicaFavorita[0], musicaFavorita[1]); // Call le tenemos que  pasar los valores de forma individual

persona.apply(informacion, musicaFavorita); // Apply le tenemos que pasar los valores en un solo arreglo completo

//Bind crea una nueva funcion y es muy similar a call
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])
nuevaFn();