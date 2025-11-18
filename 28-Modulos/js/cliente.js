/*IIFE (Inmediately Invoked Function Expression) es una expresión de 
función en JavaScript que se define y se ejecuta inmediatamente después 
de su creación. Se utiliza para encapsular variables y funciones dentro 
de un ámbito local, evitando así que contaminen el ámbito global. */

/*/(function() {
    console.log('Desde un IIFE');
    const nombreCliente = 'Elliot';
    
})();*/


//Importar y Exportar archivos: Export saca una variable o una funcion o lo que sea de un archivo
/* Para que funcione es necesario agregarle en el html
<script src="js/cliente.js" type="module"></script> */


export const nombreCliente = 'Elliot';
export const ahorro = 200;



//Exportar Funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

//Exportar funciones con condicionales
export function tienesSaldo(ahorro){
    if(ahorro > 0){
        console.log('Si tiene Saldo');
    }else{
        console.log('El Cliente no cuenta con saldo');
    }
}

//Exportar Clases
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}


//El Export Default y solo existe uno por archivo al igual que lo podemos dejar sin nombre por que utiliza un alia
export default function nuevaFuncion(){
    console.log('Este es el export default');
}