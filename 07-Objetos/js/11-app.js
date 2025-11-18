// En este video estaremos viendo la palabra this...
// This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento


//propiedad this
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        // Para que lea los valores dentro del objeto se coloca this
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 100,
    disponible: true,
    mostrarInfo: function() {
        // Para que lea los valores dentro del objeto se coloca this
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();
