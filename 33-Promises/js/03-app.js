

const aplicarDescuento = new Promise( (resolve, reject) => { //Tenemos acceso a 2 palabras reservadas uno es resolve eso es cuando se ejecuta correctamente o cuando se cumple el promises y el reject cuando tenemos un error en el promises

    const descuento = true;

    if (descuento) {
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
});

 //aplicar descuento .then signifca y despues o entonces


aplicarDescuento
    /*.then( resultado => { 
        console.log(resultado)
    })*/ 
    //Manera mas simple
    .then(resultado => descuento(resultado))

    //Siempre que el promise falle tengo acceso a catch
    /*.catch(error => {
        console.log(error);
    })*/
    //Manera mas simple
    .catch(error => console.log(error))

//Hay 3 valores posibles
// fullfilled: El Promise se cumplio
// rejected: El Promise no se cumplio
// pending: El Promise aun no se cumplio y tampoco fue rechazado

function descuento(mensaje){
    console.log(mensaje);
}