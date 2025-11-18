//Obetener losw datos del Local Storage

//Set Para agregalos
//Get Para obtenerlos
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJson = localStorage.getItem('producto');
//JSON.parse convierte un string a un objeto
console.log(JSON.parse(productoJson));

//Opcional 1
const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses));

//Opcion 2
const mesesArray = JSON.parse(meses);
console.log(mesesArray);