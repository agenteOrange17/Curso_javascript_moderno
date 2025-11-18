
//Async Await en function express y Declaration

function descargarClientes(){
    
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() =>{
            if(!error){
                resolve('El listado de clientes se descargo correctamente');
            }else{
                reject('Error en la conexion');
            }
        }, 3000);
    })
}


//Function declaration es
//async function descargarClientes(){}


//Async await
//Function Express
const ejecutar = async() => {
    try{
        console.log(1 + 1);
        const respuesta = await descargarClientes();

        console.log(2 + 2);
        console.log(respuesta);
    } catch(error){
        console.log(error);
    }
}

ejecutar();