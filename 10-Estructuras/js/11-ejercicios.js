// Practica
// Variables
const edad = 30;
const tieneTicket = true;
const tieneVIP = false;
const horaActual = "temprano";

if (edad < 18){
    console.log('Debes Ser mayor de edad')
}else if(!tieneTicket){
    console.log('Necesitas un ticket para entrar')
}else if(tieneVIP && edad >= 18){
    console.log('Acceso VIP permitido');
}else if(tieneTicket && edad >= 18){
    console.log('Acceso General Permitido');
}else{
    console.log('Acceso Denegado');
}

// Switch
switch (horaActual){
    case "temprano" :
        console.log('El concierto esta por empezar')
        break;
    case "medio":
        console.log('El concierto esta en curso')
        break;
    case "tarde" :
        console.log("El concierto ha terminado")
        break;

    default:
        console.log("Hora no valida");
}

if(edad >= 18 && tieneTicket && (horaActual === "temprano" || horaActual === "medio")){
    console.log("Acceso especial permitido");
}else{
    console.log("No Tiene acceso especial");
}

// Punto 5 Operador ternario
const mensajeBienvenida = tieneTicket ? "Bienvenido al concierto" : "Compra un ticket";
console.log(mensajeBienvenida);


// Bonus
function determinarPrecioTicket(edad){
    if(edad < 12){
        return 0;
    }else if(edad >= 12 && edad <= 17){
        return 10;
    }else if(edad >= 18 && edad <= 64){
        return 25;
    }else if(edad >= 65){
        return 15;
    }else{
        return 0;
    }
}

console.log("Precio para niño de 10 años:", determinarPrecioTicket(10));
console.log("Precio para adolescente de 15 años:", determinarPrecioTicket(15));
console.log("Precio para adulto de 30 años:", determinarPrecioTicket(30));
console.log("Precio para anciano de 70 años:", determinarPrecioTicket(70));