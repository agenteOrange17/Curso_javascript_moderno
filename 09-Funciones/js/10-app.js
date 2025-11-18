// En este video estaremos viendo lo que son los arrow Functions!!

/* Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, la sintaxis es 
más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions*/

// Forma tradicional

const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

// Aplicando arrow Function
const aprendiendo2 = () =>  {
    console.log('Aprendiendo JavaScript2');
}
//cuando solo hay una funcion en una linea no requiere llaves y cuando tienen solo una linea tienen por implicito el return 
/*
const aprendiendo2 = () => console.log('Aprendiendo JavaScript');
*/


// retornar un valor
const aprendiendo3 = () => 'Aprendiendo JavaScript 3';


console.log(aprendiendo3());
console.log(aprendiendo2());
console.log(aprendiendo());

