//Variables y selectores
const formulario = document.querySelector('#agregar-gasto'); 
const gastoListado = document.querySelector('#gastos ul'); 

//Eventos

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    document.addEventListener('submit', agregarGasto);
}

//Clases
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto  = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = []; //por que se va ir llenando por eso se pone vacio
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();    
    }

    //Calcular el restante
    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);//Usamos un arraymethods
        this.restante = this.presupuesto - gastado;

        console.log(this.restante);
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);

        console.log(this.gastos);
        this.calcularRestante();
    }

    
}

class UI {
    instertarPresupuesto(cantidad){
        //Extrayendo valores
        const {presupuesto, restante} = cantidad;

        //Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        //Evaluar si es de tipo de error o correcto
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }


        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Insertar en el HTML

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        //Quitar del HTML

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }

    mostrarGastos(gastos){

        //Mando a llamar la funcion para limpiar el html cada que agregue un nuevo gasto
        this.limpiarHTML();
        
        //Iterar sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id} = gasto;

            //Crear un LI
            const nuevoGasto = document.createElement('li');
            //Diferencia entre classList y className
            //ClasList te reporta que clases hay y con .add .remove quitas las clases
            //ClassName Solo te reporta las clases que hay y si le pones className = puedes asignar un valor diferente
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'; 
            // Version antigua nuevoGasto.setAttribute('data-id', id);                    
            //Version nueva
            nuevoGasto.dataset.id = id;

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span`

            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto')
            btnBorrar.textContent = 'Borrar x'
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al HTML

            gastoListado.appendChild(nuevoGasto);
        })
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    //Comprobar el presupuesto
    comprobarPresupuesto(presupuestObj){
        const {presupuesto, restante } = presupuestObj;

        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25%
        if ( (presupuesto / 4 ) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if(presupuesto / 2 > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }else{
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        //Si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');

            //Para evitar que sigan agregando gastos llegando al limite del presupuesto
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

//Instanciar
const ui = new UI();
let presupuesto;

//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    // console.log(Number(presupuestoUsuario));

    //Validar el presupuesto
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <=  0 )
    {
        window.location.reload();
    }

    //Instanciar el presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);

    console.log(presupuesto);

    ui.instertarPresupuesto(presupuesto);
}


//Añade gastos
function agregarGasto(e){
    e.preventDefault();

    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(  document.querySelector('#cantidad').value);

    //Validar
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
        //Coloco return para que no se ejecute las siguientes lineas de codigo
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida','error');
        //Coloco return para que no se ejecute las siguientes lineas de codigo
        return;
    }

    
    // Generar un objeto con el gasto

    //Diferencia entre objeto y un destructuring 
     /* 
     Sintaxis Destructuring : const {nombre, cantidad = gasto ; <--- Esto extrae nombre y cantidad de gasto

    Sintaxis de Object Literal : const gasto = {nombre, cantidad}; <-- Esto une nombre y cantidad a gasto
     */

    /* const gasto = {
        nombre: nombre, <-- Como son lo mismo se resume a un nombre
        cantidad: cantidad, <-- Como son lo mismo se resume a una cantidad
        id: Date.now() }; <-- como no son lo mismo se coloca asi */

    const gasto = {nombre, cantidad, id: Date.now() }; // Se resume asi por la siguiente sintaxis

    
    //agrega un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    //Mensaje de exito
    ui.imprimirAlerta('Gasto agregado correctamente');

    //Imprimir los gastos
    const {gastos, restante} = presupuesto;//Extraer los gastos de prespuesto;
    ui.mostrarGastos(gastos);//Solo se le pasa gasto

    ui.actualizarRestante(restante); //Para actualizar el restante

    ui.comprobarPresupuesto(presupuesto);

    //Resetear Formulario
    formulario.reset();
    

}

function eliminarGasto(id){
    //Eliminar del objeto
    presupuesto.eliminarGasto(id);
    
    //Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante); //Para actualizar el restante
    ui.comprobarPresupuesto(presupuesto);
}