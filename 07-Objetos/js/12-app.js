
// Object literal

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Object constructor

function Producto(nombre, precio) {
    this.nombre = nombre; //Se asocian al nombre
    this.precio = precio; //Se asocian al precio
    this.disponible = true; //Se asocian disponible
}

const producto2 = new Producto('Monitor de 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Television', 100);
console.log(producto3);


const producto4 = new Producto('Teclado Logitech', 100);
console.log(producto4);