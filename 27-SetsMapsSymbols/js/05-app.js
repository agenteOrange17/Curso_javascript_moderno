//Symbols No se crea con new
const sym = Symbol('1');
const sym2 = Symbol('1');

//Los simbols no son iguales nunca
//console.log( Symbol() === Symbol()); 
/*if (sym === sym2) {
    console.log('Son Iguales');
}else{
    console.log('Son Distintos');

}*/

const nombre = Symbol();
const apellido = Symbol();  

const persona = {}; 
//Agregar nombre y apellido como llave del objeto
persona[nombre] = 'Elliot';
persona[apellido] = 'Alderson';
//Se comporta como propiedades del objeto de forma tradicional
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);

//Para acceder usamos corchetes
//console.log(persona[nombre]);

//Las propiedades que utilizan un symbol no son iterables
for(let i in persona){
    console.log(i);
}

//Cuando creas un symbol puedes agregar una descripcion de ese simbol
const nombreCliente = Symbol('Nombre del cliente');//Descripcion
const cliente = {};

//
cliente[nombreCliente] = 'Tyrell';

console.log(cliente);
//Si solo quiero acceder a pedro
console.log(cliente[nombreCliente]);

//si quiero acceder a la descripcion
console.log(nombreCliente);
