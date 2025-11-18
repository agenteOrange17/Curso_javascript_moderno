function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
}


Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }

    return tipo;
    //Va a evaluar el saldo que colocamos y retorna que tipo de cliente
}

//Podria utilziar un arrow function siempre y cuando no haga referencia a un this
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`;
}

//Imaginando que es un banco
Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}


function Persona(nombre, saldo, telefono){
    //Si se van a heredera nombre y saldo de cliente
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//Para heredar las funciones
Persona.prototype = Object.create(Cliente.prototype);
//Para heredar el constructor
Persona.prototype.constructor = Cliente;
//Es importante que se clonen las propiedades antes de instancear

//Instanciarlo
const elliot = new Persona('Elliot', 6000, 5555555555);
console.log(elliot);
//Es importante que se hereden correctamente sino marcara error
console.log(elliot.nombreClienteSaldo());