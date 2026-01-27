// ============================================
// EJERCICIOS DE PRÁCTICA DOM
// ============================================

// Ejercicio 1: Seleccionar elementos
// Selecciona y muestra en consola:
// - El título principal (h1)
// - El input de tareas
// - El botón de agregar

const tituloPrincipal = document.querySelector('#titulo-principal');
//console.log(tituloPrincipal);
const inputTarea = document.querySelector('#input-tarea');
//console.log(inputTarea);
const btnAgregar = document.querySelector('#btn-agregar');
//console.log(btnAgregar);

// Ejercicio 2: Modificar el Texto
// Cambia el subtitulo a: "Gestiona tus tareas facilmente"
const subtitulo = document.querySelector('#subtitulo');
subtitulo.textContent = 'Gestiona tus tareas facilmente';


// Ejercicio 3: Modificar estilos
// Cambia el color del título principal a: #ffffff (blanco)
// Cambia el tamaño de fuente a: 2.5rem
tituloPrincipal.style.color = '#ffff';
tituloPrincipal.style.fontSize = '2.5rem';

// Ejercicio 4: Crear función para agregar tarea
// Crea una función que:
// 1. Tome el texto del input
// 2. Cree un nuevo elemento de tarea
// 3. Lo agregue a la lista
// 4. Limpie el input

function agregarTarea() {
    const texto = inputTarea.value.trim();
    
    if (texto === '') {
        alert('Por favor, escribe una tarea');
        return;
    }

    // Crear el elemento de tarea
    const nuevaTarea = document.createElement('div');
    nuevaTarea.className = 'task-item';
    
    // Crear el texto de la tarea
    const textoElemento = document.createElement('span');
    textoElemento.className = 'task-text';
    textoElemento.textContent = texto;
    
    // Crear contenedor de botones
    const acciones = document.createElement('div');
    acciones.className = 'task-actions';
    
    // Botón completar
    const btnCompletar = document.createElement('button');
    btnCompletar.className = 'btn btn-secondary btn-small';
    btnCompletar.textContent = '✓';
    btnCompletar.onclick = function() {
        nuevaTarea.classList.toggle('completada');
        actualizarEstadisticas();
    };
    
    // Botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn btn-danger btn-small';
    btnEliminar.textContent = '✗';
    btnEliminar.onclick = function() {
        nuevaTarea.remove();
        actualizarEstadisticas();
    };
    
    // Agregar elementos
    acciones.appendChild(btnCompletar);
    acciones.appendChild(btnEliminar);
    nuevaTarea.appendChild(textoElemento);
    nuevaTarea.appendChild(acciones);
    
    // Agregar a la lista
    const listaTareas = document.getElementById('lista-tareas');
    
    // Si hay mensaje de "no hay tareas", eliminarlo
    const emptyState = listaTareas.querySelector('.empty-state');
    if (emptyState) {
        emptyState.remove();
    }
    
    listaTareas.appendChild(nuevaTarea);
    
    // Limpiar input
    inputTarea.value = '';
    
    // Actualizar estadísticas
    actualizarEstadisticas();
}


// Ejercicio 5: Agregar event listener
// Cuando se haga clic en el botón "Agregar", ejecutar la función agregarTarea
// También cuando se presione Enter en el input
btnAgregar.addEventListener('click', agregarTarea);

inputTarea.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        agregarTarea();
    }
})

// Ejercicio 6: Crear función para actualizar estadísticas
// Esta función debe:
// 1. Contar el total de tareas
// 2. Contar las tareas completadas
// 3. Contar las tareas pendientes
// 4. Actualizar los números en el HTML
function actualizarEstadisticas(){
    const todasLasTareas = document.querySelectorAll('.task-item');
    const tareasCompletadas = document.querySelectorAll('.task-item.completada');

    const total = todasLasTareas.length;
    const completadas = tareasCompletadas.length;
    const pendientes = total - completadas;

    document.querySelector('#total-tareas').textContent = total;
    document.querySelector('#completadas').textContent = completadas;
    document.querySelector('#pendientes').textContent = pendientes;
}

// Ejercicio 7 (Bonus): Agregar tareas de ejemplo al cargar
// Agrega 3 tareas de ejemplo cuando se carga la página
window.addEventListener('DOMContentLoaded', function() {
    const tareasEjemplo = [
        'Aprender Javascript',
        'Practicar DOM',
        'Crear Proyectos'
    ]; 

    tareasEjemplo.forEach(tarea => {
        inputTarea.value = tarea;
        agregarTarea();
    })
})