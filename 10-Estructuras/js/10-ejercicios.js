// Ejercicio 1 Sistema de calificaciones

const calificacion  = 90;

if(calificacion >= 90 && calificacion <= 100){
    console.log('Excelente');
}else if(calificacion >= 80){
    console.log('Muy bien');
}else if(calificacion >= 70){
    console.log('Bien');
}else if(calificacion >= 60){
    console.log('Suficiente');
}else{
    console.log('Reprobado');
}


// Ejercicio 2 -- Verificador de dia laboral
const dia = 'Miercoles';

switch(dia.toLowerCase()){
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
        console.log('Dia Laboral');
        break;
    case 'sabado':
    case 'domingo':
        console.log('Fin de Semana');
        break;
    default:
        console.log('Dia no valido')

}


// Ejercicio 3 -- Sistema de pago

const tieneCuenta = true;
const efectivo = 300;
const tieneTarjeta = true;

if(!tieneCuenta){
    console.log('Debe crear una cuenta primero');
}else if(efectivo >= 500 || tieneTarjeta){
    console.log('Puede Pagar')
}else{
    console.log('Fondos insuficientes');
}


// Ejercicio 4 -- Verificador de Edad con multiples condiciones
const edad = 30;

if(edad >= 0 && edad <= 12){
    console.log('Es un niño');
}else if(edad >= 13 && edad <= 17){
    console.log('Es un adolocente');
}else if(edad >= 18 && edad <= 64){
    console.log('Es un adulto');
}else if(edad >= 65){
    console.log('Es un adulto Mayor')
}else{
    console.log('Edad No valida');
}


// Ejercicio 5 --- Convertir IF a ternario
const autenticado = false;
let mensaje;

if(autenticado){
    mensaje = "Bienvenido";
}else {
    mensaje = "Debes Iniciar sesion";
}

// Mostrar
console.log(mensaje);

// Version con ternario
const mensaje2 = autenticado ? "Bienvenido" : "Debes iniciar sesion";
console.log(mensaje2);

// Ejercicio 6 -- Sistema de descuentos
const esVIP = true;
const tieneCupon = false;
const total = 1500;

if(esVIP && tieneCupon){
    const descuento = total * 0.30;
    console.log(`Descuento del 30% ${descuento}. Total: ${total - descuento}`);
}else if(esVIP || tieneCupon){
    const descuento = total * 0.20;
    console.log(`Descuento del 20%: ${descuento}. Total: ${total - descuento}`);
}else if(total > 1000){
    const descuento = total * 0.10;
    console.log(`Descuento del 10%: ${descuento}. Total: ${total - descuento}`);
}else{
    console.log(`Sin descuento. Total: ${total}`);
}
