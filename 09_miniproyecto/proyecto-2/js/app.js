
// 1. Campturamos elementos del DOM
const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

// 2. Cramos el array de tareas
let tareas = [];

// 3. Mensaje para verificar que todo funciona
// console.log('Sistema de tarea iniciado');

// 4 Evento de envio de formulario
formulario.addEventListener('submit', function(e){
    e.preventDefault(); // Evitar recarga de la pagina

    const texto = inputTarea.value.trim(); //Obtenemos el texto del input del formulario y eliminamos espacios

    // 5. validamos si el campo esta vacio y si es asi mostramos una alerta
    if (texto === ''){
        alert('Por favor escribe una tarea antes de agregarla');
        return;
    }

    // 6.  Si todo esta bien, mostramos el texto en consola
    // console.log('Tarea Capturada: ', texto);


    // 7. Crear el objeto tarea
    const tarea = {
        texto: texto,
        completada: false
    };

    // 8. Agregar al array
    tareas.push(tarea);

    // 9. mostrar en consola para verificar
    console.log('Tarea agregada: ', tarea);
    console.log('Lista actual de tareas: ', tareas);

    // 10. Limpiar el input
    inputTarea.value = '';

    // 11. Mandamos a llamar la funcion para renderizar
    renderizarTarea();
});

function renderizarTarea(){
    // 1. Limpiar el contenedor
    listaTareas.innerHTML = '';

    // 2. Recorrer el array y crear bloques
    tareas.forEach(function (tarea, index){
        
        const div = document.createElement('DIV');
        div.classList.add('tarea');
        // 3. Aplicar clase si esta completada
        if(tarea.completada){
            div.classList.add('completada');
        }
        // 4. Mostrar Texto
        const textoTarea = document.createElement('span');
        textoTarea.textContent = tarea.texto;

        // 6 Evento para marcar como completada al hacer clic
        textoTarea.addEventListener('click', function(){
            tareas[index].completada = !tareas[index].completada;
            renderizarTarea(); // Actualiza la vista
        })

        // 7. Boton eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('eliminar');

        // 8. Evento para eliminar tarea
        btnEliminar.addEventListener('click', function(){
            tareas.splice(index, 1);  // Elimina del array
            renderizarTarea();
        })

        // Agregar texto y boton al div
        div.appendChild(textoTarea);
        div.appendChild(btnEliminar);

        // 5. Agregar al DOM
        listaTareas.appendChild(div);
        
    });
}
