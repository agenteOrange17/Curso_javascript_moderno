// Veamos como asignar variables hacia un objeto


const producto = {
    nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
    precio: 30,
    disponible: true, // el último elemento puede o no tener la ,
}

//agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
//borrar propiedades
delete producto.disponible;

console.log(producto);
