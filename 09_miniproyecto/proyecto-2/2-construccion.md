✅ Paso 1 – Preparar estructura e inicializar variables
🎯 Objetivo:

Conectar JavaScript con el HTML y preparar el array donde se almacenarán las tareas.

📋 Instrucciones

Crea el archivo app.js y asegúrate de que esté conectado desde tu HTML (ya está en la plantilla).

Captura los siguientes elementos del DOM:

El formulario (#formulario-tarea)

El input de texto (#input-tarea)

El contenedor de la lista (#lista-tareas)

Crea un array vacío llamado tareas para guardar todas las tareas como objetos.

Muestra en consola que todo está listo con console.log().


✅ Paso 2 – Capturar y validar la tarea ingresada
🎯 Objetivo:

Detectar cuando el usuario envía el formulario, evitar que se recargue la página, y validar que el campo no esté vacío antes de continuar.

📋 Instrucciones paso a paso

Escuchar el evento submit del formulario con addEventListener.

Usar event.preventDefault() para evitar que la página se recargue.

Leer el valor del input con .value.

Validar que no esté vacío (.trim()).

Mostrar un alert() si está vacío.

Si no está vacío, mostrarlo con console.log() para confirmar que se recibió correctamente (en el próximo paso lo guardaremos en el array).

🧾 Código actualizado de app.js
// 1. Capturamos elementos del DOM
const formulario = document.getElementById('formulario-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

// 2. Creamos el array de tareas
let tareas = [];

// 3. Evento de envío del formulario
formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita recargar la página

  const texto = inputTarea.value.trim(); // Obtenemos el texto de la tarea

  // 4. Validamos si el campo está vacío
  if (texto === '') {
    alert('Por favor escribe una tarea antes de agregarla.');
    return;
  }

  // 5. Si todo está bien, mostramos el texto en consola
  console.log('🆕 Tarea capturada:', texto);

  // (En el siguiente paso guardaremos esto como objeto en el array)
});

🧪 Resultado esperado

Si el campo está vacío → aparece un alert:

"Por favor escribe una tarea antes de agregarla."

Si tiene texto → se muestra en consola:

🆕 Tarea capturada: Lavar la ropa

✅ Lo aprendido en este paso

Capturar eventos submit

Prevenir recargas con preventDefault()

Leer y validar entradas del usuario

Buenas prácticas: nunca guardar datos incompletos


✅ Paso 3 – Crear objeto tarea y guardarlo en el array
🎯 Objetivo:

Transformar la tarea capturada en un objeto con propiedades útiles, como:

{
  texto: "Lavar la ropa",
  completada: false
}


Y agregar ese objeto al array tareas.

📋 Instrucciones paso a paso

Después de validar que el campo no esté vacío, crea un objeto con:

texto: el texto ingresado por el usuario.

completada: inicialmente false (la tarea no está hecha).

Usa .push() para agregar el objeto al array tareas.

Muestra en consola el nuevo objeto y el array actualizado para verificar.

Limpia el campo input (inputTarea.value = '') para dejarlo listo para la siguiente tarea.

🧾 Código actualizado del submit con objeto y push
formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const texto = inputTarea.value.trim();

  if (texto === '') {
    alert('Por favor escribe una tarea antes de agregarla.');
    return;
  }

  // 1. Crear el objeto tarea
  const tarea = {
    texto: texto,
    completada: false
  };

  // 2. Agregar al array
  tareas.push(tarea);

  // 3. Mostrar en consola para verificar
  console.log('✅ Tarea agregada:', tarea);
  console.log('📋 Lista actual de tareas:', tareas);

  // 4. Limpiar el input
  inputTarea.value = '';

  // (En el siguiente paso renderizaremos visualmente las tareas)
});

🧪 Resultado esperado

Al agregar una tarea válida, deberías ver algo como:

✅ Tarea agregada: { texto: 'Lavar la ropa', completada: false }
📋 Lista actual de tareas: [{ texto: 'Lavar la ropa', completada: false }]

✅ Lo aprendido en este paso

Cómo crear objetos con propiedades personalizadas

Cómo agregar objetos a un array con .push()

Cómo limpiar campos después de usarlos


✅ Paso 4 – Mostrar las tareas en el DOM
🎯 Objetivo:

Crear una función que recorra el array tareas y dibuje cada una en pantalla dentro del contenedor #lista-tareas.

📋 Instrucciones paso a paso

Crea una función llamada renderizarTareas().

Dentro de ella:

Limpia primero el contenido del contenedor con .innerHTML = '' (para no duplicar).

Recorre el array tareas con .forEach().

Por cada tarea, crea un <div> con clase tarea y muestra:

El texto de la tarea.

Una clase completada si la propiedad completada es true (esto lo usaremos luego).

Llama a renderizarTareas() cada vez que se agregue una nueva tarea.

🧾 Código – función renderizarTareas()
function renderizarTareas() {
  // 1. Limpiar el contenedor
  listaTareas.innerHTML = '';

  // 2. Recorrer el array y crear bloques
  tareas.forEach(function (tarea, index) {
    const div = document.createElement('div');
    div.classList.add('tarea');

    // 3. Aplicar clase si está completada
    if (tarea.completada) {
      div.classList.add('completada');
    }

    // 4. Mostrar texto
    div.textContent = tarea.texto;

    // (En el siguiente paso agregaremos botones de completar y eliminar)

    // 5. Agregar al DOM
    listaTareas.appendChild(div);
  });
}

🧾 Actualización en el submit – Llamar a la función
// Al final del submit:
renderizarTareas();

🧪 Resultado esperado

Cada vez que agregues una tarea:

Se vacía el campo input

La tarea aparece visualmente en la página

Si agregas varias, se apilan una debajo de otra

✅ Lo aprendido en este paso

Cómo crear elementos HTML con document.createElement

Cómo recorrer un array para renderizar datos dinámicos

Cómo aplicar clases condicionales con .classList.add()

Cómo actualizar visualmente el DOM

✅ Paso 5 – Marcar tareas como completadas
🎯 Objetivo:

Permitir que el usuario haga clic en una tarea y que esta se marque como "completada", cambiando su estilo visual y su valor booleano (completada: true o false).

📋 Instrucciones paso a paso

Dentro de la función renderizarTareas(), después de crear el div de cada tarea:

Agrega un addEventListener('click', ...) al div.

En ese evento:

Usa el index para acceder a la tarea correspondiente en el array.

Cambia su valor de completada usando tarea.completada = !tarea.completada.

Vuelve a llamar a renderizarTareas() para refrescar la vista.

🧾 Código actualizado de renderizarTareas()
function renderizarTareas() {
  listaTareas.innerHTML = '';

  tareas.forEach(function (tarea, index) {
    const div = document.createElement('div');
    div.classList.add('tarea');

    if (tarea.completada) {
      div.classList.add('completada');
    }

    div.textContent = tarea.texto;

    // ✅ Evento para marcar como completada al hacer clic
    div.addEventListener('click', function () {
      tareas[index].completada = !tareas[index].completada;
      renderizarTareas(); // actualiza la vista
    });

    listaTareas.appendChild(div);
  });
}

🧪 Resultado esperado

Al hacer clic en una tarea:

Se marca con una línea (gracias a .completada)

Su estado cambia en el array

Puedes hacer clic otra vez para desmarcarla

✅ Lo aprendido en este paso

Uso real de booleans para manejar estados (true / false)

Cambio de estado con ! (operador de negación)

Cómo actualizar dinámicamente la UI con eventos

Cómo usar index para modificar datos en un array

✅ Paso 6 – Eliminar tareas individualmente
🎯 Objetivo:

Agregar un botón "Eliminar" junto a cada tarea, que permita al usuario quitarla del array y de la vista con un solo clic.

📋 Instrucciones paso a paso

En la función renderizarTareas():

Crea un botón con texto "Eliminar" y clase .eliminar.

Asígnale un evento click.

Dentro del evento:

Usa .splice(index, 1) para eliminar la tarea del array.

Llama a renderizarTareas() para actualizar el DOM.

🧾 Código actualizado de renderizarTareas()
function renderizarTareas() {
  listaTareas.innerHTML = '';

  tareas.forEach(function (tarea, index) {
    const div = document.createElement('div');
    div.classList.add('tarea');
    if (tarea.completada) {
      div.classList.add('completada');
    }

    // Texto de la tarea
    const textoTarea = document.createElement('span');
    textoTarea.textContent = tarea.texto;

    // Evento para marcar como completada
    textoTarea.addEventListener('click', function () {
      tareas[index].completada = !tareas[index].completada;
      renderizarTareas();
    });

    // ✅ Botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.classList.add('eliminar');

    // Evento para eliminar tarea
    btnEliminar.addEventListener('click', function () {
      tareas.splice(index, 1); // Elimina del array
      renderizarTareas();      // Actualiza el DOM
    });

    // Agregar texto y botón al div
    div.appendChild(textoTarea);
    div.appendChild(btnEliminar);

    // Agregar el div a la lista
    listaTareas.appendChild(div);
  });
}

🧪 Resultado esperado

Cada tarea aparece con su texto y un botón "Eliminar"

Si haces clic en "Eliminar":

La tarea desaparece del DOM

También se elimina del array tareas

✅ Lo aprendido en este paso

Cómo eliminar elementos de un array con .splice()

Cómo agregar múltiples elementos dentro de un div

Cómo combinar múltiples eventos (click para completar y eliminar)

Cómo mantener el DOM sincronizado con la lógica interna

🎉 ¡Felicidades, Mauricio! Con esto ya tienes tu propio mini sistema funcional de tareas hecho completamente con:

Variables

Strings

Objetos

Arrays

Booleanos

Operadores

Eventos

DOM dinámico