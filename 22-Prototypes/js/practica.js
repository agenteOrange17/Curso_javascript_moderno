//Creacion de prototypes
function Animal(nombre, hablar){
    this.nombre = nombre;
    this.hablar = hablar;
    this.peso = 8;
}

Animal.prototype.tipoAnimal = function(){
    let tipo;
    
    if (this.hablar === 'Miau') {
        tipo = 'Gato';
    }else if(this.hablar === 'Guau'){
        tipo = 'Perro';
    }else{
        tipo = 'otro';
    }
    return tipo;
}

//Aqui creo las funciones que se van a mandar a llamar
Animal.prototype.informacionAnimal = function(){
    return `Su nombre es ${this.nombre}, es un ${this.tipoAnimal()} y su peso es ${this.peso} kg.`;
}

//Ahora creando la funcion raza para heredar nimal
function Raza(nombre, hablar, tipo){
    //Para heredar de la clase animal ocupamos
    Animal.call(this, nombre, hablar)
    this.tipo = tipo;    
}

//Creando el prototype para mostrar un mensaje diferente
Animal.prototype.tipoRaza = function(){
    return `Su nombre es ${this.nombre}, es un ${this.tipoAnimal()} y su peso es ${this.peso} kg y su raza es ${this.tipo}`;
}


//Para heredar las funciones de animal
Raza.prototype = Object.create(Animal.prototype);
//Para heredar el constructor
Raza.prototype.constructor = Raza;

//Instanciando
//const mascota = new Animal('Willy', 'Guau', 5);// Esta funcion es para mandar a llamar sin la heredar
const mascota = new Raza('Willy', 'Guau', 'Pedigree');// Esta funcion es para mandar a llamar con heredar

console.log(mascota);
console.log(mascota.tipoAnimal());//Para mandar a llamar la funcion de tipoAnimal
console.log(mascota.informacionAnimal());
console.log(mascota.tipoRaza());



