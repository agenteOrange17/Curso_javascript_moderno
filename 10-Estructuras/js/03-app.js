// Veamos como utilizar los operadores de mayor que o menor que...


let dinero = 500;
let totalCarrito = 300;

// Para revisar si nuestra cantidad de dinero es mayo se utiliza el mayor que 
if( dinero > totalCarrito ) {
    //dinero >= totalCarrito   //opcion 2
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes');
}

// También puede ser sin llaves
let dinero2 = 100;
let totalCarrito2 = 300;

if( dinero2 > totalCarrito2 )
    console.log('Pago Correcto');
else
    console.log('Fondos Insuficientes');
