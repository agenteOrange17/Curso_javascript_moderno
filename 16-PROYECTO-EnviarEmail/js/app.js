// Iniciamos para que cargue el javascript despues de que se haya descargado todo el html
document.addEventListener('DOMContentLoaded', function() {


    //Creamos un objeto
    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }



    //Seleccionar los elementos del interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');


    //Asignar eventos
    /* Si el codigo es repetitivo es mejor utilizar una funcion y resumir este codigo al siguiente
    inputEmail.addEventListener('blur', function(e){
        console.log(e.target.value);
    });
    */

   /* Forma resumida*/
     inputEmail.addEventListener('input', validar); //Nota importante es no colocar validar() los parentesis por que manda a llamar a la funcion y no es lo que se busca

    inputAsunto.addEventListener('input', validar);

    inputMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){

        e.preventDefault();

        resetFormulario();
        
    });


    function enviarEmail(e){
        e.preventDefault();

        //Una vez se envia agregamos las clases para que muestre el spinner
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        
        
        //Despues de unos segundos ocultamos el spinner
        setTimeout(() => {
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');
            
            resetFormulario();
    
            //Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2','text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');

            alertaExito.textContent = 'Mensaje Enviado con exito';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
            
        }, 3000);
    }


    //Funcion para validar los campos y evitar codigo repetido
    function validar(e){        
        
        //Es obligatorio usar trim en los formularios
        if (e.target.value.trim() === '') { //Colocamos trim para eliminar los espacios en blanco
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            //Reiniciamos 
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        //Mandamos a llamar la funcion validarEmail
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es vaalido', e.target.parentElement);
            //Reiniciamos
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        //Si pasa todas las validaciones borramos la alerta
        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        //Si pasa la validacion se comienza a llenar el objeto     
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar el objeto de email
        comprobarEmail();
        
    }


    //Funcion mostrar alerta
    function mostrarAlerta(mensaje, referencia){
        
        //Mando a llamar la funcion alerta
        limpiarAlerta(referencia);
        
        //Generar una alerta con HTML
        const error = document.createElement('P');
        error.textContent = mensaje; //Lo recomendable no es usar inner por que no escapan los datos y es mas seguro
        error.classList.add('bg-red-600', 'text-white', 'p-3', 'mt-5', 'text-center', 'rounded');
        
        //Inyectar el error al formulario
        referencia.appendChild(error);
        
        //Agregar clase para que se vea el error
        error.classList.add('error');
    }
    
    //Funcion para limpiar alerta una vez se llena el campo
    function limpiarAlerta(referencia) {
        
        
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');

        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email){

        //Expresion regular
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);

        return resultado;

    }

    //Llenado del formulario para que se pueda activar el boton
    function comprobarEmail(){        

        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;

        }

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    //Resetear formulario

    function resetFormulario(){
        //Reiniciamos los valores del objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();

        //Importante una vesz reiniciados llamamos la funcion para comprobar email
        comprobarEmail();
    }        

});



// Reto Envio de Emails.
 /*
  1. Crear un campo extra CC; para añadir un destinatario extra.
  2. El campo no es obligatorio; pero en caso de tener información
  que sea un email válido.

 */

