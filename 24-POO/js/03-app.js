//Clase padre
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    }

    //Mostrar información
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    //Propiedades estaticas 
    //para mostrarlas no requieren una instancia
    static bienvenida() { //Rescribir un método
        return `Bienvenido al cajero`;
    }
}



//Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo); // para poder acceder a los atributos de la clase padre usamos super en este caso va al padre y agarra nombre y saldo
        this.telefono = telefono;
        this.categoria = categoria;   
    }
 
    //Que pasaria si re escribo el mensaje de bienvenida va reescribir por este nuevo
    static bienvenida() {
        return `Bienvenido al cajero de empresas`;
    }

}


//Instancear nueva clase
const elliot = new Cliente('Elliot', 300);
//Entonces una vez que ya se le dio la herencia a Empresa podemos escribir
const empresa = new Empresa ('Orange Time', 500, 7775502704, 'Aprende jugando')
console.log(empresa);
console.log(empresa.mostrarInformacion());


console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
