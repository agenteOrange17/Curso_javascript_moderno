let DB;
(function(){



    //Variable para formulario
    const formulario = document.querySelector('#formulario');


    document.addEventListener('DOMContentLoaded', () => {
        formulario.addEventListener('submit', validarCliente);
        //Aqui es para conectar a la DB
        conectarDB();

    });



    function validarCliente(e){ //Como es un submit por que es cuando se envie el formulario vamos a poner un e para un eventprevendefault
        e.preventDefault(); //Para que no se recargue la pagina

        //leer todos los inputs
        const nombre = document.querySelector('#nombre').value; //.value para leer el valor
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if (nombre === '' || email === '' || telefono === '' || empresa === '' ) {
            
            //Imprimir alerta de error
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }


        // Crear un objeto con la informacion
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,            
        }

        cliente.id = Date.now();

        crearNuevoCliente(cliente);
    }

    function crearNuevoCliente(cliente){      
          
        const transaction = DB.transaction(['crm'], 'readwrite'); //Para leer y escribir en la DB  

        const objectStore = transaction.objectStore('crm'); //Para acceder a la tabla

        objectStore.add(cliente); //Para agregar un nuevo registro y le pasamos el objeto del cliente

        //Si hubo un error lo mostrara
        transaction.onerror = function(){
        console.log('Hubo un error');
        imprimirAlerta('Hubo un error', 'error'); //Para mostrar la alerta de error
        }

        //Se agregue con exito
        transaction.oncomplete = function () {
        console.log('Cliente agergado');
        imprimirAlerta('El cliente se agrego correctamente'); //Para mostrar la alerta de exito

            setTimeout(() => {
                window.location.href = 'index.html'; //Para redireccionar a la pagina principal
            }, 3000); //Para que se muestre la alerta despues de 3 segundos
        
        }
    }



})();