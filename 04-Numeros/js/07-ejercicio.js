// 
const precioProducto = 100;
const descuento = 15;
const impuesto = 16;

// calcular el precio con descuento
//El precio final con impuesto (agrega el impuesto al precio con descuento)
const precioConDescuento = precioProducto - (precioProducto * descuento / 100);
console.log(precioConDescuento);

const precioFinal = precioConDescuento + (precioConDescuento * impuesto / 100);
console.log(precioFinal);
// Redondear el precio final a 2 decimales usando Math.round
console.log(Math.round(precioFinal * 100) / 100);

// Bonus
//Generar un numero aleatorio del 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

// Calcular la raiz cuadrado de ese numero
console.log(Math.sqrt(numeroAleatorio));

// Mostrar el valor abosulot de -50
console.log(Math.abs(-50));