/*
const cliente = 'Elliot Alderson';

//Scope por bloque de codigo y va imprimir tyrell
function mostrarCliente(){
    const cliente = 'Tyrell';
    
    console.log(cliente);
}

console.log(cliente);//Esto imprime Elliot Alderson
mostrarCliente(); //Esto imprime
*/


const login = true;

function clienteLogueado(){
    const cliente = 'Elliot Alderson';
    console.log(cliente);

     if(login){
         const cliente = 'Admin';
         console.log(cliente);
     }
}

clienteLogueado();
