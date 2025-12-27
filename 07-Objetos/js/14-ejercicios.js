// Ejercicios
//Creando objeto
const vehicle = {
    marca: "Toyota",
    modelo: 'Corolla',
    anio: 2020,
    precio: 25000,
    disponible: true,
    especificaciones: {
        color: "Rojo",
        transmision: "Automatica",
        combustible: "Gasolina"
    }
};
console.log("Objeto Completo:", vehicle);
// Extraer solo marca
console.log('Marca:', vehicle.marca);
// Extraer solo precio
console.log('Precio:', vehicle.precio);
// Extraer color
console.log('Color:', vehicle.especificaciones.color);

// Cambiando el precio a 23000
vehicle.precio = 23000;
console.log('Nuevo precio', vehicle.precio);

// Agregar nueva propiedad
vehicle.kilometraje = 50000;
console.log('Nueva Propiedad agregada', vehicle);

// Cambiando disponible
vehicle.disponible = false;
console.log('Nuevo Estado:', vehicle.disponible);

//Destructuring
const {marca, modelo, precio} = vehicle;
console.log(marca);
console.log(modelo);
console.log(precio);

// Bonus
//Eliminar la propiedad disponible
delete vehicle.disponible;
console.log(vehicle);
