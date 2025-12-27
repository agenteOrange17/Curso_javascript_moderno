// Ejercicios Boolean
const esMayorEdad = true;
const tieneLicencia = true;
const tieneSeguro = true;
const pagoRealizado = false;

// Puede conducir
const puedeConducir =  esMayorEdad && tieneLicencia;
console.log('¿Puede Conducir?: ', puedeConducir);

// Puede usar el auto
console.log('¿Puede usar el auto?: ', puedeConducir && tieneSeguro )

// Puede entrar al evento
const puedeEntrar = esMayorEdad || pagoRealizado;
console.log('¿Puede entrar al evento?: ', puedeEntrar );
//No puede entrar
console.log('¿No puede entrar?:', !puedeEntrar);
// Operadores Ternario
console.log('Mensaje: ', (esMayorEdad && tieneLicencia) ? 'Puede Conducir' : 'No puede conducir');

//Acceso permitido
console.log('Acceso:', puedeEntrar ? 'Puede Acceder al evento' : 'No puede Acceder al Evento');

// Bonus
const edad = 30;
if(edad){
    console.log('Tiene edad');
}else{
    console.log('No tiene Edad valida')
}
console.log('Edad convertida a boolean:', Boolean(edad));
//Tipo de
console.log(typeof esMayorEdad);
console.log(typeof tieneLicencia);
console.log(typeof tieneSeguro);
console.log(typeof pagoRealizado);
