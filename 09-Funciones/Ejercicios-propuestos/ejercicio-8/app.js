
/**
 * Instrucciones

- Implementa sumar(a,b) y úsala para calcular varios resultados.
- Crea agregarCarrito(precio) acumulando total y calcularImpuesto(total).
- Calcula totalPagar y muéstralo.
  
 */

function suma(a, b){
    return a + b;
}

const resultado = suma(5, 6);

console.log(`El resultado es: ` + resultado);

// Creando el carrito

let total = 0;
function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 0.15;
}

total = agregarCarrito(100);
total = agregarCarrito(200);
total = agregarCarrito(300);
console.log(total);

const totalPagar = calcularImpuesto(total);


console.log(`El total a pagar con impuesto es $${totalPagar}`);