//Formas de crear clases

//Forma 1

// Declarar una clase llamada "Cliente" utilizando la sintaxis de clase de ES6.
class Cliente {
    // Constructor de la clase, se ejecuta cuando se crea una nueva instancia de Cliente.
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Método de instancia para mostrar información del cliente.
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Método estático, se llama en la clase en sí y no en una instancia.
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

// Instanciar una nueva clase Cliente y asignarla a la variable "elliot".
const elliot = new Cliente('Elliot', 300);

// Mostrar información de "elliot" utilizando el método mostrarInformacion().
console.log(elliot.mostrarInformacion());

// Mostrar la instancia de "elliot" en la consola.
console.log(elliot);

// Llamar al método estático bienvenida de la clase Cliente.
console.log(Cliente.bienvenida());


  
//Forma 2
// Declarar una clase anónima utilizando una expresión de clase.
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

// Instanciar una nueva clase anónima y asignarla a la variable "elliot2".
const elliot2 = new Cliente2('Elliot', 300);

// Mostrar información de "elliot2" utilizando el método mostrarInformacion().
console.log(elliot2.mostrarInformacion());

// Mostrar la instancia de "elliot2" en la consola.
console.log(elliot2);
