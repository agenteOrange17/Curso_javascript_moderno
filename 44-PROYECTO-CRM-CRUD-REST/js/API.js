const url = 'http://localhost:4000/clientes';


//Cuando se crea un nuevo cliente
export const nuevoCliente = async cliente => {

    try {
        await fetch(url, {
            method: 'POST', //Siempre para enviar datos se ocupa el metodo POST
            body: JSON.stringify(cliente), //El body es el contenido que llevara y se ocupa JSON.stringify para transformarlo a un string
            headers: { //Son informacion de que tipo de datos estamos enviando
                'Content-Type' : 'application/json'
            } 
        });
        window.location.href = 'index.html'; //Redirecciona a la pagina principal
    } catch (error) {
        console.log(error);
    }
}

//Obtiene todos los clientes
export  const obtenerClientes = async () => {
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;
    } catch (error) {
        console.log(error);
    }
}

//Eliminar un cliente
export const eliminarCliente = async id => {

    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}

//Obtiene un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

///Actualiza un registro
export const editarCliente = async cliente => {    
    try {
      await  fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //Si se cumple que nos direccione
        window.location.href = 'index.html'; //Redirecciona a la pagina principal
    } catch (error) {
        console.log(error);
    }
}