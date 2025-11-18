/* Index DB 

- API en Javascript para almacenar grandes cantidades de datos estructurados

- A diferencia de LocalStorage puede almacenar strings, booleans, incluso archivos, cualquier tipo de datos soportado por JavaScript

- No tiene "limites" conocidos aun que los archivos de mas de  50mb va a preguntar por permisos

- Soportado en todas las ultimas versiones de los navegadores


// Es Diferente a LocalStorage

- LocalSotrage es una buena solucion para almecenar poca informacion (Como un carrito de compras abandonado o un JSON Web Token)

- IndexedDB es una Base de datos completa, pero ten en cuenta que estos datos siguen siendo visibles para cualquiera por lo que no es recomendable almacenar passwords o tarjetas de credito
*/


document.addEventListener('DOMContentLoaded', () => {
    crmDB(); //Mando a llamar la funcion

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    //Crear Base de datos Version 1.0
    let crmDB = window.indexedDB.open('crm', 1); //crmDB es el nombre de mi base de datos y 1 es la version

    //Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la base de datos');
    }

    //Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base de datos creada!');

        DB = crmDB.result;
    }
    // Configuracion de la base de datos 
    //Cuando se crea una base de datos se crea columnas, id, nombre, etc es lo mismo que cuando se crea una db el codigo se corre solo una vez por que sino rescribe la info que ya tenemos
    crmDB.onupgradeneeded = function(e){
        // console.log('Este metodo solo se ejecuta una vez');
        const db =e.target.result;

        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true
        });

        //Definir las columnas
        objectStore.createIndex('nombre','nombre', { unique: false});
        objectStore.createIndex('email','email', { unique: true});
        objectStore.createIndex('telefono','telefono', { unique: false});

        console.log('Columnas creadas');

    }

}

//Funcion para crear cliente
function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');


    transaction.oncomplete = function() {
        console.log('Transaccion completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 7775502704,
        nombre: 'Elliot',
        apellido: 'Alderson',
        email: 'elliot@fsociety.com'
    }

    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}