// 1. Capturamos los elementos del DOM
const formulario = document.getElementById('formulario-contacto');
const inputNombre = document.getElementById('nombre');
const inputTelefono = document.getElementById('telefono');
const inputEmail = document.getElementById('email');
const listaContactos = document.getElementById('lista-contactos');

// 2. Creamos el array de contactos
let contactos = [];

// 3. Capturar el evento del formulario
// console.log('Formulario y campos listos. Array contactos inicializado.');

// Escuchamos el evento submit del formulario
formulario.addEventListener('submit', function(e){
  // 2. Prevenimos que el formulario recargue la página
    e.preventDefault();

    // 3. Leemos los valores de los inputs
    const nombre = inputNombre.value.trim();
    const telefono = inputTelefono.value.trim();
    const email = inputEmail.value.trim();

    // 4. Mostramos los datos en consola (Prueba temporal)
    /*
    console.log('Contacto ingresado');
    console.log('Nombre:' , nombre);
    console.log('Telefono:', telefono);
    console.log('Email:', email)
    */

    // 5. Validacion      
    if(nombre === '' || telefono === '' || email === ''){
      alert('Por favor, completa todos los campos antes de agregar el contacto');
      return;
    }

    // 6 Creamos el objeto de contacto
    const contacto = {
      nombre: nombre,
      telefono: telefono,
      email: email
    };

    // 7. Agregamos el objeto al array
    contactos.push(contacto);

    // 8. Mostramos en consola para verificar
    console.log('Contacto agregado: ', contacto);
    console.log('Lista completa de contactos:', contactos);
    
    // 9. Limpiar el formulario
    limpiarFormulario();

    // Mostrar contactos en pantalla
    renderizarContactos();
});

// Funcion para limpiar el formulario
function limpiarFormulario(){
  inputNombre.value = '';
  inputTelefono.value = '';
  inputEmail.value = '';
}

// Creamos la funcion para mostrar los contactos
function renderizarContactos(){
  // 1. Limpiamos la lista antes de volver a renderizar
  listaContactos.innerHTML = '';

  // 2. Recorremos el array y creamos un bloque para cada contacto
  contactos.forEach(function(contacto, index){
    const div = document.createElement('DIV');
    div.classList.add('contacto');

    // Contenido del contacto + Boton
    div.innerHTML = `
    <strong>Nombre:</strong>${contacto.nombre}<br>
    <strong>Telefono:</strong>${contacto.telefono}<br>
    <strong>Email:</strong>${contacto.email}<br>
    `;
    
    // Boton eliminar
    const btnEliminar = document.createElement('BUTTON');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('eliminar');
    btnEliminar.dataset.index = index; // Asociamos el indice al boton

    // Eventos al hacer click en eliminar
    btnEliminar.addEventListener('click', function(){
      eliminarContacto(index);
    })

    // Agregamos el boton al bloque de contacot
    div.appendChild(btnEliminar);

    // Agregamos todo al contenedor principal
    listaContactos.appendChild(div);
  })
}

// Funcion auxiliar apra eliminar contacto
function eliminarContacto(index){
  contactos.splice(index, 1); // Elimina 1 elemento en la posicion index
  renderizarContactos();
  
}