// Ejercicios function

// Ejercicio 1
function sumar(a, b){
    return a + b;
}
const resultado = sumar(5,3);
console.log('El resultado de la suma es:',resultado)

// Ejercicio 2
function restar(a, b){
    return a - b;
}
console.log('El resultado de la resta es>',restar(5, 3));

// Ejercicio 3
function multiplicar(a, b){
    return a * b;
}
console.log('El resultado de la multiplicacion es:', multiplicar(3, 3));

// Ejercicio 4
function dividir(a, b){
    if(b === 0){
    return "No se puede dividir por cero";
    }
    return a / b;
}
console.log(dividir(5, 0))

// Ejercicio 5
function calcularPrecioTotal(precioBase, porcentajeDescuento){
    // Calcular cuanto dinero es el descuento
    const descuento = precioBase * (porcentajeDescuento / 100);

    // Restar el descuento al precio base
    const precioFinal = precioBase - descuento;

    // Retornar el precio final
    return precioFinal;
}

console.log('El precio final ya aplicando el descuento es de:', calcularPrecioTotal(100, 10));

// Ejercicio 6
function mostrarResultado(nombreOperacion, resultado){
    console.log(`El resultado de la ${nombreOperacion} es : ${resultado}`);
}

console.log(mostrarResultado("suma", 30));

// Ejercicio 7
function suma(a, b){
    return a + b;
}
const mostrarResultadoSuma = suma(10, 5);
console.log('El resultado de la suma es:', mostrarResultadoSuma);

function resta(a, b){
    return a - b;
}
const mostrarResultadoResta = resta(20, 8);
console.log('El resultado de la resta es:', mostrarResultadoResta);

function multi(a, b){
    return a * b;
}
const mostrarResultadoMulti = multi(6, 4);
console.log('El resultado de la multiplicación es:', mostrarResultadoMulti);


function divi(a, b){
    return a / b;
}
const mostrarResultadoDivi = divi(10, 0);
console.log('El resultado de la division es:', mostrarResultadoDivi);

