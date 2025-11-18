🧾 Introducción – Calculadora de Calificaciones

Este mini proyecto simula una calculadora básica de calificaciones donde el usuario puede:

Agregar alumnos con su nombre y calificación

Ver la lista de alumnos agregados

Ver si aprobaron o reprobaron según su nota

(Opcional) Calcular el promedio general o mostrar solo los aprobados

🎯 Objetivo del mini proyecto

Manejar alumnos como objetos { nombre, calificacion, aprobo }

Usar arrays para guardar la lista de alumnos

Aplicar operadores aritméticos y lógicos para determinar si aprueba

Practicar condicionales y renderizado dinámico de datos

🧱 Plantilla base HTML

Guarda esto como index.html:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Calculadora de Calificaciones</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }

    h1 {
      text-align: center;
    }

    form {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    input, button {
      padding: 8px;
      font-size: 16px;
    }

    .alumno {
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
    }

    .aprobado {
      color: green;
      font-weight: bold;
    }

    .reprobado {
      color: red;
      font-weight: bold;
    }

    #promedio {
      font-weight: bold;
      margin-top: 20px;
    }

    #limpiar {
      margin-top: 10px;
      padding: 8px 16px;
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>📊 Calculadora de Calificaciones</h1>

  <form id="formulario-alumno">
    <input type="text" id="nombre" placeholder="Nombre del alumno" required>
    <input type="number" id="calificacion" placeholder="Calificación (0-100)" required>
    <button type="submit">Agregar alumno</button>
  </form>

  <div id="lista-alumnos">
    <!-- Aquí aparecerán los alumnos agregados -->
  </div>

  <div id="promedio"></div>

  <button id="limpiar">Limpiar lista</button>

  <script src="app.js"></script>
</body>
</html>

✅ Paso 1 – Inicializar estructura y conectar con JavaScript
🎯 Objetivo:

Conectar el JavaScript con el HTML, preparar las variables y dejar lista la base.

📋 Instrucciones

Crea un archivo llamado app.js y asegúrate de que esté enlazado en tu HTML.

Dentro de app.js, haz lo siguiente:

Captura los elementos del DOM:

El formulario (#formulario-alumno)

Los inputs: nombre y calificación

El contenedor de la lista de alumnos (#lista-alumnos)

El botón de limpiar (#limpiar)

El contenedor del promedio (#promedio)

Crea el array alumnos = [] para guardar la lista.

Muestra un mensaje de prueba con console.log('📊 Calculadora iniciada') para verificar la conexión.

🧾 Código – app.js
// 1. Captura de elementos del DOM
const formulario = document.getElementById('formulario-alumno');
const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const contLista = document.getElementById('lista-alumnos');
const contPromedio = document.getElementById('promedio');
const btnLimpiar = document.getElementById('limpiar');

// 2. Inicializar lista de alumnos
let alumnos = [];

// 3. Mensaje de prueba
console.log('📊 Calculadora iniciada');

✅ Paso 2 – Capturar datos del formulario y crear objetos alumno
🎯 Objetivo:

Escuchar el envío del formulario.

Obtener nombre y calificación ingresados.

Crear un objeto alumno con esa información.

Guardarlo dentro del array alumnos.

Mostrar un mensaje en consola para confirmar que se guardó.

📘 Conceptos que aplicamos:

Eventos (submit)

Objetos ({ nombre, calificacion, aprobo })

Arrays y push()

Condicionales (if para saber si aprobó)

Operadores lógicos y de comparación (>=)

📋 Instrucciones:

1️⃣ Escucha el evento submit del formulario.
2️⃣ Usa preventDefault() para evitar que recargue la página.
3️⃣ Toma los valores de los inputs (nombre y calificacion).
4️⃣ Convierte la calificación a número con Number().
5️⃣ Crea un objeto alumno con la estructura:

{
  nombre: "Ana Pérez",
  calificacion: 85,
  aprobo: true // o false
}


6️⃣ Agrega el alumno al array alumnos usando push().
7️⃣ Limpia los campos del formulario (inputNombre.value = "", etc.).
8️⃣ Haz un console.log(alumnos) para confirmar.

🧾 Código – app.js (continuación del anterior)
// 1. Captura de elementos del DOM
const formulario = document.getElementById('formulario-alumno');
const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const contLista = document.getElementById('lista-alumnos');
const contPromedio = document.getElementById('promedio');
const btnLimpiar = document.getElementById('limpiar');

// 2. Inicializar lista de alumnos
let alumnos = [];

// 3. Mensaje de prueba
console.log('📊 Calculadora iniciada');

// 4. Escuchar evento submit del formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault(); // evita recargar la página

  // Obtener valores
  const nombre = inputNombre.value.trim();
  const calificacion = Number(inputCalificacion.value);

  // Validaciones básicas
  if (nombre === '' || isNaN(calificacion)) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }

  // Determinar si aprobó (>= 60)
  const aprobo = calificacion >= 60;

  // Crear objeto alumno
  const alumno = {
    nombre,
    calificacion,
    aprobo
  };

  // Agregar al array
  alumnos.push(alumno);

  // Mostrar en consola
  console.log('Alumno agregado:', alumno);
  console.log('Lista actual:', alumnos);

  // Limpiar formulario
  inputNombre.value = '';
  inputCalificacion.value = '';
});

✅ Resultado esperado

Cuando escribas un nombre y calificación y presiones “Agregar alumno”,
en la consola del navegador deberías ver algo como:

Alumno agregado: { nombre: 'Laura', calificacion: 90, aprobo: true }
Lista actual: [ { nombre: 'Laura', calificacion: 90, aprobo: true } ]

✅ Paso 3 – Mostrar la lista de alumnos en pantalla
🎯 Objetivo:

Cada vez que se agregue un alumno, debemos mostrarlo dentro del contenedor #lista-alumnos con su nombre, calificación y si aprobó o reprobó.

📘 Conceptos que practicamos:

Manipulación del DOM (innerHTML)

Iterar arrays con forEach()

Clases condicionales (.aprobado o .reprobado)

Template strings (para crear HTML dinámico)

📋 Instrucciones:

1️⃣ Crea una función llamada renderAlumnos() que:

Limpie el contenido anterior del contenedor.

Recorra el array alumnos.

Inserte un bloque HTML por cada alumno con sus datos.

2️⃣ Llama a renderAlumnos() cada vez que se agrega un nuevo alumno.
3️⃣ Si no hay alumnos, muestra un mensaje tipo “No hay alumnos registrados”.

🧾 Código – app.js (continuación)
// 1. Captura de elementos del DOM
const formulario = document.getElementById('formulario-alumno');
const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const contLista = document.getElementById('lista-alumnos');
const contPromedio = document.getElementById('promedio');
const btnLimpiar = document.getElementById('limpiar');

// 2. Inicializar lista de alumnos
let alumnos = [];

// 3. Mensaje de prueba
console.log('📊 Calculadora iniciada');

// 4. Escuchar evento submit del formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const calificacion = Number(inputCalificacion.value);

  if (nombre === '' || isNaN(calificacion)) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }

  const aprobo = calificacion >= 60;

  const alumno = { nombre, calificacion, aprobo };
  alumnos.push(alumno);

  // Mostrar en consola
  console.log('Alumno agregado:', alumno);

  // Renderizar en pantalla
  renderAlumnos();

  // Limpiar formulario
  inputNombre.value = '';
  inputCalificacion.value = '';
});

// 5. Función para mostrar alumnos en pantalla
function renderAlumnos() {
  // Si no hay alumnos
  if (alumnos.length === 0) {
    contLista.innerHTML = '<p>No hay alumnos registrados.</p>';
    return;
  }

  // Generar HTML dinámico
  contLista.innerHTML = ''; // Limpiar antes de volver a pintar

  alumnos.forEach(alumno => {
    const div = document.createElement('div');
    div.classList.add('alumno');

    // Clase condicional según apruebe o no
    const clase = alumno.aprobo ? 'aprobado' : 'reprobado';
    const estado = alumno.aprobo ? 'Aprobado ✅' : 'Reprobado ❌';

    div.innerHTML = `
      <strong>${alumno.nombre}</strong> — 
      Calificación: ${alumno.calificacion} 
      <span class="${clase}">${estado}</span>
    `;

    contLista.appendChild(div);
  });
}

🧠 Explicación rápida

renderAlumnos() limpia el contenedor antes de pintar para evitar duplicados.

Recorre el array alumnos y genera un div por cada alumno.

Usa clase y estado según si aprobó o reprobó.

Lo inserta dentro del #lista-alumnos.

✅ Resultado esperado

Cuando agregues varios alumnos, la lista se verá así:

Ana Pérez — Calificación: 85 Aprobado ✅
Juan Torres — Calificación: 52 Reprobado ❌


Y si borras todo el array (que lo haremos en el siguiente paso), volverás a ver el texto:

“No hay alumnos registrados.”

✅ Paso 4 – Calcular el promedio general de calificaciones
🎯 Objetivo:

Calcular el promedio general de todas las calificaciones ingresadas y mostrarlo en el contenedor #promedio.

📘 Conceptos que vas a practicar:

Recorrer arrays con forEach() o reduce()

Operadores aritméticos

Condicionales para verificar si hay alumnos

Actualización dinámica del DOM

📋 Instrucciones:

1️⃣ Crea una función llamada calcularPromedio() que:

Sume todas las calificaciones del array alumnos.

Divida la suma entre el total de alumnos.

Devuelva el resultado redondeado (puedes usar .toFixed(2)).

2️⃣ Muestra el resultado en el elemento #promedio.
3️⃣ Si no hay alumnos, muestra un mensaje tipo “No hay calificaciones registradas”.
4️⃣ Llama a esta función cada vez que se agregue un nuevo alumno y también cuando se limpie la lista (más adelante).

🧾 Código – app.js (continuación del anterior)
// 1. Captura de elementos del DOM
const formulario = document.getElementById('formulario-alumno');
const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const contLista = document.getElementById('lista-alumnos');
const contPromedio = document.getElementById('promedio');
const btnLimpiar = document.getElementById('limpiar');

// 2. Inicializar lista de alumnos
let alumnos = [];

// 3. Mensaje de prueba
console.log('📊 Calculadora iniciada');

// 4. Escuchar evento submit del formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const calificacion = Number(inputCalificacion.value);

  if (nombre === '' || isNaN(calificacion)) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }

  const aprobo = calificacion >= 60;
  const alumno = { nombre, calificacion, aprobo };
  alumnos.push(alumno);

  renderAlumnos();
  calcularPromedio();

  inputNombre.value = '';
  inputCalificacion.value = '';
});

// 5. Función para mostrar alumnos en pantalla
function renderAlumnos() {
  if (alumnos.length === 0) {
    contLista.innerHTML = '<p>No hay alumnos registrados.</p>';
    return;
  }

  contLista.innerHTML = '';

  alumnos.forEach(alumno => {
    const div = document.createElement('div');
    div.classList.add('alumno');

    const clase = alumno.aprobo ? 'aprobado' : 'reprobado';
    const estado = alumno.aprobo ? 'Aprobado ✅' : 'Reprobado ❌';

    div.innerHTML = `
      <strong>${alumno.nombre}</strong> — 
      Calificación: ${alumno.calificacion} 
      <span class="${clase}">${estado}</span>
    `;

    contLista.appendChild(div);
  });
}

// 6. Función para calcular y mostrar el promedio general
function calcularPromedio() {
  if (alumnos.length === 0) {
    contPromedio.textContent = 'Promedio general: —';
    return;
  }

  // Sumar todas las calificaciones
  let suma = 0;
  alumnos.forEach(alumno => {
    suma += alumno.calificacion;
  });

  // Calcular promedio
  const promedio = (suma / alumnos.length).toFixed(2);

  // Mostrar en pantalla
  contPromedio.textContent = `Promedio general: ${promedio}`;
}

🧠 Explicación rápida:

Cada vez que agregas un alumno, se llama a calcularPromedio().

Si el array está vacío, muestra una raya “—”.

Si hay datos, calcula la suma total, divide entre la cantidad de alumnos y actualiza el texto.

✅ Resultado esperado:

Cuando agregues varios alumnos, verás algo así:

Ana Pérez — Calificación: 90 Aprobado ✅  
Juan Torres — Calificación: 70 Aprobado ✅  
Laura Díaz — Calificación: 50 Reprobado ❌  

Promedio general: 70.00


✅ Paso 5 – Vaciar la lista de alumnos
🎯 Objetivo:

Hacer que el botón “Limpiar lista” borre todos los alumnos guardados, limpie la pantalla y reinicie el promedio.

📘 Conceptos que vas a practicar:

Eventos (click)

Manipulación del DOM (innerHTML)

Reinicio de variables y arrays

Reutilización de funciones (renderAlumnos() y calcularPromedio())

📋 Instrucciones:

1️⃣ Escucha el evento click en el botón #limpiar.
2️⃣ Cuando se presione:

Vacía el array alumnos (puedes hacerlo con alumnos = [] o splice(0)).

Limpia el contenido del contenedor de lista.

Actualiza el promedio.
3️⃣ Muestra en pantalla nuevamente el mensaje “No hay alumnos registrados.”

🧾 Código – app.js (continuación del anterior)
// 1. Captura de elementos del DOM
const formulario = document.getElementById('formulario-alumno');
const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const contLista = document.getElementById('lista-alumnos');
const contPromedio = document.getElementById('promedio');
const btnLimpiar = document.getElementById('limpiar');

// 2. Inicializar lista de alumnos
let alumnos = [];

// 3. Mensaje de prueba
console.log('📊 Calculadora iniciada');

// 4. Escuchar evento submit del formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const calificacion = Number(inputCalificacion.value);

  if (nombre === '' || isNaN(calificacion)) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }

  const aprobo = calificacion >= 60;
  const alumno = { nombre, calificacion, aprobo };
  alumnos.push(alumno);

  renderAlumnos();
  calcularPromedio();

  inputNombre.value = '';
  inputCalificacion.value = '';
});

// 5. Función para mostrar alumnos en pantalla
function renderAlumnos() {
  if (alumnos.length === 0) {
    contLista.innerHTML = '<p>No hay alumnos registrados.</p>';
    return;
  }

  contLista.innerHTML = '';

  alumnos.forEach(alumno => {
    const div = document.createElement('div');
    div.classList.add('alumno');

    const clase = alumno.aprobo ? 'aprobado' : 'reprobado';
    const estado = alumno.aprobo ? 'Aprobado ✅' : 'Reprobado ❌';

    div.innerHTML = `
      <strong>${alumno.nombre}</strong> — 
      Calificación: ${alumno.calificacion} 
      <span class="${clase}">${estado}</span>
    `;

    contLista.appendChild(div);
  });
}

// 6. Función para calcular y mostrar el promedio general
function calcularPromedio() {
  if (alumnos.length === 0) {
    contPromedio.textContent = 'Promedio general: —';
    return;
  }

  let suma = 0;
  alumnos.forEach(alumno => {
    suma += alumno.calificacion;
  });

  const promedio = (suma / alumnos.length).toFixed(2);
  contPromedio.textContent = `Promedio general: ${promedio}`;
}

// 7. Botón para limpiar la lista
btnLimpiar.addEventListener('click', function() {
  if (alumnos.length === 0) {
    alert('No hay alumnos para eliminar.');
    return;
  }

  const confirmar = confirm('¿Seguro que deseas borrar todos los alumnos?');
  if (!confirmar) return;

  // Vaciar array
  alumnos = [];

  // Volver a renderizar
  renderAlumnos();
  calcularPromedio();

  console.log('🧹 Lista de alumnos vaciada.');
});

🧠 Explicación rápida:

Al hacer clic en “Limpiar lista”, se pide confirmación.

Si aceptas, se vacía el array, se limpia el HTML y el promedio vuelve a “—”.

Si ya estaba vacío, muestra una alerta.

✅ Resultado esperado:

Antes:

Ana Pérez — Calificación: 90 Aprobado ✅  
Juan Torres — Calificación: 70 Aprobado ✅  

Promedio general: 80.00


Después de presionar “Limpiar lista”:

No hay alumnos registrados.  
Promedio general: —


