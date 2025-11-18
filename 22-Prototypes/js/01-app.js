
//Object Literal y no permite crear objetos dinamicos ni  reutilizables
const cliente = {
    nombre:'Elliot',
    saldo:500
}

console.log(cliente);
console.log(typeof cliente);

// Constructor Object es menos comun y si permite crear objetos dinamicos y es reutilizables
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
}

const elliot = new Cliente('Elliot', 500);

console.log(elliot);