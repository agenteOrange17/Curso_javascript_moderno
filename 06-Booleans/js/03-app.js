// Existe otra forma de comparar si un valor es verdadero y es por medio de algo llamado un operador ternario

const boolean1 = true;
const boolean2 = false;


if(boolean1) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

//El código anterior es fácil de leer no?, pero se puede simplificar un poco más
console.log( boolean1  ? 'Si es true' : 'No no es true' )


/* Este mismo ejemplo aplica si un usuario esta autenticado puede darle me gusta a una foto o ver una página, 
así como si ya tienes una cuenta en netflix y has pagado */

//Ejemplo 

const autenticado = true;

if (autenticado) {
    console.log('Si puedes ver netflix')
}else {
    console.log('No, no puedes verlo');
}


//Otra forma con un operador ternario


console.log( autenticado ? 'Si esta autenticado' : 'No esta autenticado')