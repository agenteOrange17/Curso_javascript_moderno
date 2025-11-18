//import permite traer el archivo
//Export default no necesita estar dentro de las llaves
import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tienesSaldo, Cliente } from './cliente.js';

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);
//Utilizando funcion
console.log(mostrarInformacion('Elliot',' 2000'));
//Utilizando Funcion con condicional
tienesSaldo(ahorro);

//Utilizando clase
const cliente = new Cliente('Elliot', '200');
console.log(cliente.mostrarInformacion());

//Como heredar una clase
//Importar empresa
//Recomendacion es tener los import siempre arriba

//Paso uno: importo del archivo donde esta mi clase heredad (paso 2)
import { Empresa } from './empresa.js';
//Creo mi constante con los valores
const empresa = new Empresa('Fuck Society', '100', 'Hackeo');
//Mando a imprimir a consola la informacion agregada
console.log(empresa.mostrarInformacion());


