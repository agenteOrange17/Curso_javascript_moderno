//WeakSet o SetDebil
const weakset = new WeakSet();

//A diferencia del SET le puedes pasar cualquier valor, objetos, booleanos etc 
//En Weakset Solo se pueden o agregar objetos
const cliente = {
    nombre: 'Elliot',
    saldo:'100'
}

//Si trato de agregar un nombre
//const nombre = 'Elliot';

weakset.add(cliente);
//weakSet.add(nombre); //Maracara un error por que no es un objeto

console.log(weakset.has(cliente));//Si es un objeto retorna true
console.log(weakset.has('nombre'));// si es un string retorna false

//Delete
weakset.delete(cliente);  //Elimina el objeto

//No tiene Size los weakset osea que no puedes saber la extension y no son iterables

console.log(cliente);