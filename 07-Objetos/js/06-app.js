// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas : {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

//Para acceder a un objeto en especifico se utiliza "informacion: { fabricacion} "
//adoptar mejor esta forma de escribir
//Muy importante es que si voy acceder dentro de una fabricacion tengo que crear informacion, informacion, informacion {} de lo contrario no lo reconocera
const { nombre, informacion, informacion: { fabricacion, fabricacion: {pais} } } = producto;


console.log(nombre)
console.log(informacion)
console.log(fabricacion)
console.log(pais)