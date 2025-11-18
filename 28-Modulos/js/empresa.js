//Paso 2: Crear una clase Empresa y heredo de cliente la informacion
import { Cliente } from './cliente.js';
//Heredar una clase
export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}
