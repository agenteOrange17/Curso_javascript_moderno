//Como seleccionar elementos por su ID y solo se puede seleccionar una vez por documento

const formulario = document.getElementById('formulario');

console.log(formulario);

const noExiste = document.getElementById('noExiste'); 
console.log(noExiste); //Si no existe retorna Null

//Que pasa cuando tengo 2 id que son iguales, en este caso seleccionara al primero que encuentre


//Ya casi no se ocupan