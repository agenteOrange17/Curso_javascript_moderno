//Primeros pasos con Local Storage

//Local Storage : Si cierro el navegador o apago mi pc y al encenderla siguen guardados los datos
//Sesion Storage si apago o cierro se pierden los datos son solo de sesion

//Para agregar elementos utilizamos.setItems
//localStorage.setItem('nombre', 'Elliot'); //Agregamos un elemento al local storage 

//Local Storage no puede guardar arreglos ni objetos, solo strings
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300
}

//Json.stringify convierte un objeto a un string
const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

//Con arreglos
const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);

localStorage.setItem('meses', mesesString);
