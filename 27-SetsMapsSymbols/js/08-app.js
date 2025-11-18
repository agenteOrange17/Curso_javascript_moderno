//Iterar un arreglo, un set o un map puede ser diferente

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();//Son llaves y valores

//Agregando 2 valores
datos.set('nombre', 'Elliot Alderson');
datos.set('profesion', 'Ingeniero de seguridad informática');

//Se pueden iterar con un for each los sets y map

//Entries Iterator - Devuelve un arreglo con las llaves y valores del set o map
//Keys Iterator - Devuelve un arreglo con las llaves del set o map
//Values Iterator - Devuelve un arreglo con los valores del set o map

//Entries Iterator
/*for(let entry of ciudades.entries() ){
    console.log(entry);
}
/*
for(let entry of ciudades.entries() ){
    console.log(entry);
}

//Los sets solo son valores por ende entries solo devuelve los valores
for(let entry of ordenes.entries() ){
    console.log(entry);
}


for(let entry of datos.entries() ){
    console.log(entry);
}
*/

//Value Iterator
/*for(let value of ciudades.values()){
    console.log(value);
}

for(let value of ordenes.values()){
    console.log(value);
}

for(let value of datos.values()){
    console.log(value);
}*/

//Keys Iterator
/*for(let keys of ciudades.keys()){
    console.log(keys);//Imprime las posiciones de las llaves
}

for(let keys of ordenes.keys()){
    console.log(keys);//Tomar los valores y los asigna como llaves.keys en caso de que no existan
}

for(let keys of datos.keys()){
    console.log(keys);//Tomar los valores y los asigna como llaves.keys en caso de que no existan
}*/


//Default

for(let ciudad of ciudades){
    console.log(ciudad);
}


for(let orden of ordenes){
    console.log(orden);
}

for( let dato of datos){
    console.log(dato);
}