const paises = [];



function nuevoPais(pais, callback){
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}

function mostrarPaises(){
    console.log(paises);
}

function iniciarCallbackHell(){
    setTimeout(()=>{
        nuevoPais("Alemania", mostrarPaises); //El pais es alemania y el callback es mostrarPaises

        //Agregamos otro pais
        setTimeout(()=>{
            nuevoPais("Francia", mostrarPaises);

            setTimeout(()=>{
                nuevoPais("Japon", mostrarPaises);
            },3000);
        },3000);    
    }, 3000);
}


iniciarCallbackHell();