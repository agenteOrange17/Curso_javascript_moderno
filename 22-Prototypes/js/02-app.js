// Constructor Object es menos comun y si permite crear objetos dinamicos y es reutilizables
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
}

const elliot = new Cliente('Elliot', 500);

//Supongamos que vamos a crear una funcion que muestre el nombre y el saldo

function formatearCliente(cliente){

    //Utilizo destructuring para extraer los valores de las propiedades
    const {nombre, saldo} = cliente;

    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}


function formatearEmpresa(empresa){

    //Utilizo destructuring para extraer los valores de las propiedades
    const {nombre, saldo, categoria} = empresa;

    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(elliot));

//Imaginando que tendria empresa
function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
    
}

//Crear una nueva intancia de empresa
const CO = new Empresa('Codigo Orange', 4000,'Cursos en linea');

console.log(formatearEmpresa(elliot));

/*Si muchas personas comienzan a moverle al codigo y comienzan a agregar funciones, no todo el mundo va a estar documentando.
Eso es algo de lo que soluciona los prototipos, porque en el prototype le puedes agregar funciones que son exclusivas de cliente y funciones que son exclusivas de empresa.
Y de esa forma solamente expandes el prototype y puedes conocer todas las funciones que hay disponibles.

Entonces eso es lo que solucionan los prototipos. Ahora, si es un proyecto pequeño con tres o cuatro funciones, no te recomiendo que escribas prototype.
Sin embargo, si va a ser parte de un proyecto donde muchas personas van a estar modificando, va a haber muchos objetos diferentes. 

Te vas a beneficiar mucho por los prototipos de nueva cuenta. */