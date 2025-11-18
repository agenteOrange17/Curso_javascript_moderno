//Self es la ventana global es igual a window pero en services worker

//Es lo mismo al DOMContentLoaded
/*window.onload = () => {
    console.log('Ventana lista');
}
*/
//Es lo mismo que window.onload pero en serviceworker
self.onload = () => {
    console.log('Ventana Lista');
}

//Si muevo el nombre del objeto 
window.nombre = 'Monitor 20 Pulgadas';

const producto = {
    //nombre: 'Monitor 20 Pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        //Para utilizar el self
        //const self = this;
        return `El producto ${self.nombre} tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo());