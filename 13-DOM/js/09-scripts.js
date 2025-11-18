//Elminar elementos en el DOM  Eliminar elemento por si mismo y otra eliminar desde el padre

const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

//Eliminar por si mismo
primerEnlace.remove();

//Eliminar desde el padre

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);

//Selecionamos el elemento que queremos eliminar y lo eliminamos
navegacion.removeChild(navegacion.children[2]);