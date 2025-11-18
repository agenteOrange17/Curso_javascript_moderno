//Weakmap no son tan utilizados

//Sirven para mantener una serie de datos como privados
const producto = {
    idProducto: 123,
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log(weakmap.has(producto)); //has es para comprobar si existe el objeto dentro del weakmap

//Si yo quiero extraer la informacion
console.log(weakmap.get(producto));

//No se pueden interar los weakmap
console.log(weakmap.size(producto));//No funciona marca undefined
//No puedes conocer la extension de weakpmap

console.log(weakmap.delete(producto));//Para eliminar

//Importante solo acepta objetos

console.log(weakmap);