//Elementos private y public

//Clase padre
class Cliente {

    // #nombre; //Elemento privado


    // constructor(nombre, saldo) {
    //     this.#nombre = nombre;
    //     this.saldo = saldo;

    // }

    // //Mostrar información
    // mostrarInformacion() {
    //     return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    // }
    // //Propiedades estaticas 
    // //para mostrarlas no requieren una instancia
    // static bienvenida() { //Rescribir un método
    //     return `Bienvenido al cajero`;
    // }

    //Si no quiero hacer lo de arriba, puedo hacerlo de esta manera
    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

//Metodo anterior para 
const elliot = new Cliente();
elliot.setNombre('Elliot');
console.log(elliot.getNombre());
// console.log(elliot.mostrarInformacion());

// console.log(elliot.#nombre); // 