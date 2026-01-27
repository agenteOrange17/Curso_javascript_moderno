// PASO 1: Crear el array del carrito
const carrito = [
    { nombre: 'Monitor', precio: 500, cantidad: 2 },
    { nombre: 'Teclado', precio: 50, cantidad: 3 },
    { nombre: 'Mouse', precio: 30, cantidad: 1 },
    { nombre: 'Audífonos', precio: 80, cantidad: 2 }
];

// PASO 2: For Tradicional
let total = 0;
for (let i = 0; i < carrito.length; i++)
{
    // Mostrar cada producto
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);

    // Calcular subtotal de este producto
    const subtotal = carrito[i].precio * carrito[i].cantidad;

    // Sumar al total
    total = total + subtotal;
}

console.log(`Total: ${total}`);

//PASO 3: FOR Tradicional - Mostrar cantidad
console.log('Metodo tradicional con cantidad - forEach');
carrito.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Cantidad ${producto.cantidad}`);
});

//PASO 4: Map - Crear un array de nombres, precio
console.log("Metodo - MAP / Crea un array de nombres")
const nombresProductos = carrito.map(producto => {
    // Feature
    return [producto.nombre, producto.precio];
});
console.log(nombresProductos);


// PASO 5: FOR... OF - Contar productos diferentes
console.log('Metodo For Of')
console.log(`total de productos diferentes: ${carrito.length}`);

// PASO 6: While - Cuenta atras
console.log('Metodo While')
let segundos = 5;
while(segundos > 0 ){
    console.log(`Tu carrito se pocesará en ${segundos} segundos...`)
    segundos--;
}
console.log('Procesando carrito!');

// PASO 7: For In - Objeto resumen
console.log('For In')

let totalProductos = 0;
let precioTotal = 0;

for(let producto of carrito){
    totalProductos = totalProductos + producto.cantidad;
    precioTotal = precioTotal + (producto.precio * producto.cantidad);
}

const resumenCarrito = {
    totalProductos: totalProductos,
    precioTotal: precioTotal
};

for (let propiedad in resumenCarrito){
    console.log(`${propiedad}: ${resumenCarrito[propiedad]}`);
}

