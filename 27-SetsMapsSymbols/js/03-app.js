//Se crean igual que los sets
const cliente = new Map(); //Los maps son listas de llave y valor por lo tanto para agregar un elemento se utiliza

cliente.set('nombre', 'Elliot'); //Llave es nombre y valor Elliot
cliente.set('apellido', 'Alderson'); //Llave es apellido y valor Alderson\
cliente.set('cliente', 'Premium');
cliente.set('saldo', 1000);
cliente.set(true, true);


console.log(cliente.size);//Cuantos elementos hay

 console.log(cliente.has('nombre')); //Comprobar los valores si existen

 console.log(cliente.get('nombre'));//Como obtener un valor que existen en un map

 cliente.delete('saldo');//Como eliminar un valor que existe en un map

 console.log(cliente.has('saldo'));//trato de ver si existe en un saldo
 console.log(cliente.get('saldo'));//Si trato de obtener un valor que no existe en un map me devuelve undefined


 cliente.clear();//Limpia todo el map osea elimina todos los elementos

 console.log(cliente);


 //Puedes iniciar un map sin valores
 const paciente = new Map( [ ['nombre', 'paciente'], ['cuarto', 'no definido'] ] ); 

 paciente.set('Dr', 'Dr Asignado');
 paciente.set('nombre', 'Elliot'); //Rescribe el valor en este caso de nombre

 console.log(paciente);

 //Maps son iterablesd

 paciente.forEach( (datos, index) => { //El index repota la llave
    console.log(datos);
 })
