//Iniciamos el documento javascript

document.addEventListener("DOMContentLoaded", function () {


    //Crear un objeto
    const email = {
        nombre: '',
        apellido: '',
        email: '',
        asunto: '',
        mensaje: '',

    }

    //Creamos y seleccionamos los elementos de la interfaz

    const inputNombre = document.querySelector('#nombre');
    const inputApellido = document.querySelector('#apellido');
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');


    //Asignamos los eventos a los elementos de la interfaz

    inputNombre.addEventListener('input', validar);
    inputApellido.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);

    btnReset.addEventListener('click', function(e){

        e.preventDefault();

        resetFormulario();
        
    });


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



    //Creación de las funciones

    //Se creo esta funcion para evitar repetir codigo en reutilizando por una funcion
    function validar(e) {


        //Mensaje de alerta
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            //Reiniciamos 
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        
        //Validando email
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            //Reiniciamos 
            email[e.target.name] = '';
            comprobarEmail();                        
            return;
        }

        //limpiar alerta
        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        //Si pasa la validacion se comienza a llenar el objeto     
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar el objeto de email
        comprobarEmail();

    }

    //Funcion para mostrar alerta

    function mostrarAlerta(mensaje, referencia) {

        //Limpiamos alerta
        limpiarAlerta(referencia);

        //Generar una alerta con html
        const error = document.createElement('SPAN');
        error.textContent = mensaje;
        //Agregamos los estilos
        error.classList.add('.error');

        //Inyectamos el error al formulario
        referencia.appendChild(error)

        //Agregar clase para que se vea el error 
        error.classList.add('error')
    }


    //Creamos una funcion para limpiar alerta una vez se llene el campo
    function limpiarAlerta(referencia) {

        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.error');//Colocamos referencia donde busca la clase y en vez de todo documento busca la clase 

        if (alerta) {
            alerta.remove();
        }
    }


    function validarEmail(email) {

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