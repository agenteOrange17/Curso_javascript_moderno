✅ Paso 1 – Preparar estructura e inicializar variables
🎯 Objetivo:

Conectar con el HTML desde JavaScript

Preparar el botón de lanzar y el contenedor de historial

Crear un array historial donde se guardarán los resultados

Probar la conexión con un console.log()

📋 Instrucciones paso a paso

Crea el archivo app.js y asegúrate de que esté enlazado al HTML.

Captura con getElementById():

El botón #btn-lanzar

El contenedor #resultado

El contenedor #historial

Crea el array historial = []

Muestra en consola un mensaje que confirme que todo está listo

🧾 Código JavaScript – app.js
// 1. Captura de elementos del DOM
const btnLanzar = document.getElementById('btn-lanzar');
const contResultado = document.getElementById('resultado');
const contHistorial = document.getElementById('historial');

// 2. Array para guardar jugadas
let historial = [];

// 3. Confirmación
console.log('🎯 Simulador iniciado');

🧪 Resultado esperado

Al cargar la página, en la consola del navegador se verá:

🎯 Simulador iniciado

✅ Paso 2 – Simular lanzamiento y determinar el ganador
🎯 Objetivo:

Generar dos números aleatorios entre 1 y 6 (dado1 y dado2).

Mostrar ambos valores en pantalla.

Determinar el resultado de la ronda:

Si son iguales → “Empate”

Si uno es mayor → “Gana dado 1” o “Gana dado 2”

Mostrar el resultado en el contenedor #resultado.

📋 Instrucciones paso a paso

Escucha el evento click en el botón "Lanzar Dados".

Usa Math.floor(Math.random() * 6) + 1 para generar números del 1 al 6.

Compara ambos valores con condicionales (if, else if, else).

Guarda el resultado como texto.

Muestra los valores y el resultado en pantalla.

🧾 Código actualizado en app.js
btnLanzar.addEventListener('click', function () {
  // 1. Generar números aleatorios para los dados
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  // 2. Determinar el resultado
  let resultado = '';

  if (dado1 === dado2) {
    resultado = '🎯 Empate';
  } else if (dado1 > dado2) {
    resultado = '🎲 Gana el Dado 1';
  } else {
    resultado = '🎲 Gana el Dado 2';
  }

  // 3. Mostrar en pantalla
  contResultado.textContent = `Dado 1: ${dado1} | Dado 2: ${dado2} → ${resultado}`;

  // (En el siguiente paso guardaremos esta jugada en el historial)
});

🧪 Resultado esperado

Cada vez que hagas clic en “Lanzar Dados”:

Aparecerá algo como:

Dado 1: 3 | Dado 2: 5 → 🎲 Gana el Dado 2

✅ Lo aprendido en este paso

Uso de Math.random() para generar números aleatorios

Condicionales (if, else if, else) para tomar decisiones

Operadores de comparación (===, >, <)

Cómo actualizar el contenido del DOM dinámicamente


✅ Paso 3 – Guardar jugada en historial y mostrarla
🎯 Objetivo:

Crear un objeto que represente la jugada actual con:

Número de tirada (tirada 1, 2, 3…)

Valor del dado 1

Valor del dado 2

Resultado ("Empate", "Gana dado 1", etc.)

Guardar ese objeto dentro del array historial.

Mostrar cada jugada en el contenedor #historial como lista de texto (puedes usar un <div> por jugada).

📋 Instrucciones paso a paso

Crear un objeto jugada con los datos mencionados.

Usar .push(jugada) para agregarlo al final del array.

Crear una función renderizarHistorial() que:

Limpie el historial actual del DOM.

Recorra el array historial con .forEach().

Cree un bloque por cada jugada y lo inserte en pantalla.

🧾 Código actualizado del botón + guardar jugada
btnLanzar.addEventListener('click', function () {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;

  let resultado = '';

  if (dado1 === dado2) {
    resultado = '🎯 Empate';
  } else if (dado1 > dado2) {
    resultado = '🎲 Gana el Dado 1';
  } else {
    resultado = '🎲 Gana el Dado 2';
  }

  contResultado.textContent = `Dado 1: ${dado1} | Dado 2: ${dado2} → ${resultado}`;

  // ✅ Crear objeto de la jugada
  const jugada = {
    tirada: historial.length + 1,
    dado1: dado1,
    dado2: dado2,
    resultado: resultado
  };

  // ✅ Agregar al historial
  historial.push(jugada);

  // ✅ Renderizar historial en pantalla
  renderizarHistorial();
});

🧾 Función renderizarHistorial()

Agrega esta función fuera del evento:

function renderizarHistorial() {
  // Limpiar historial anterior
  contHistorial.innerHTML = '';

  // Recorrer historial y mostrar cada jugada
  historial.forEach(function (jugada) {
    const div = document.createElement('div');
    div.classList.add('historial-item');
    div.textContent = `Tirada #${jugada.tirada}: D1=${jugada.dado1}, D2=${jugada.dado2} → ${jugada.resultado}`;
    contHistorial.appendChild(div);
  });
}

🧪 Resultado esperado

Cada vez que lances los dados:

Se mostrará el resultado en la parte superior

Se agregará una nueva línea en la parte inferior, como:

Tirada #1: D1=3, D2=5 → 🎲 Gana el Dado 2
Tirada #2: D1=6, D2=6 → 🎯 Empate

✅ Lo aprendido en este paso

Cómo construir objetos personalizados con propiedades

Cómo guardar múltiples objetos en un array (historial)

Cómo renderizar listas dinámicamente con .forEach()

Cómo usar índices para llevar el conteo de jugadas


✅ Paso 4 – Mostrar resumen: victorias y empates
🎯 Objetivo:

Contar y mostrar:

Cuántas veces ganó el dado 1

Cuántas veces ganó el dado 2

Cuántos empates ha habido

📋 Instrucciones paso a paso

Crear una función mostrarResumen() que recorra el array historial.

Dentro de esa función, usar tres contadores:

ganadasDado1, ganadasDado2, empates

Por cada jugada, revisar el valor de jugada.resultado y sumar al contador correspondiente.

Mostrar el resumen en un nuevo div debajo del historial.

Llamar a esta función después de cada tirada, para que se actualice siempre.

🧾 HTML – Agrega este div al final del <body>, antes del <script>:
<div class="resultado" id="resumen">
  <!-- Aquí va el resumen de resultados -->
</div>

🧾 Código JavaScript – función mostrarResumen()
function mostrarResumen() {
  let ganadasDado1 = 0;
  let ganadasDado2 = 0;
  let empates = 0;

  // Recorrer el historial y contar resultados
  historial.forEach(function (jugada) {
    if (jugada.resultado.includes('Empate')) {
      empates++;
    } else if (jugada.resultado.includes('Dado 1')) {
      ganadasDado1++;
    } else if (jugada.resultado.includes('Dado 2')) {
      ganadasDado2++;
    }
  });

  // Mostrar resultados
  const resumenHTML = `
    📊 <strong>Resumen de tiradas:</strong><br>
    - Gana Dado 1: ${ganadasDado1} veces<br>
    - Gana Dado 2: ${ganadasDado2} veces<br>
    - Empates: ${empates} veces
  `;

  document.getElementById('resumen').innerHTML = resumenHTML;
}

🧾 Agrega esta línea al final del click del botón (después de renderizarHistorial()):
mostrarResumen();

🧪 Resultado esperado

Abajo del historial, verás un resumen como este:

📊 Resumen de tiradas:
- Gana Dado 1: 2 veces
- Gana Dado 2: 5 veces
- Empates: 1 veces


Y se actualizará cada vez que se lance.

✅ Lo aprendido en este paso

Cómo recorrer un array para generar estadísticas

Uso de condiciones y contadores (if, ++)

Cómo construir HTML dinámico con innerHTML

Aplicación real de strings, operadores y lógica comparativa

✅ Paso 5 – Limpiar historial y reiniciar simulador
🎯 Objetivo:

Agregar un botón “Reiniciar” o “Limpiar historial”

Al hacer clic:

Vaciar el array historial

Limpiar el contenido de:

#resultado

#historial

#resumen

📋 Instrucciones paso a paso

Agrega un botón extra en el HTML para reiniciar.

Escucha el evento click en ese botón.

Dentro del evento:

Usa .length = 0 o .splice() para vaciar el array.

Borra el contenido HTML de los tres bloques mencionados.

🧾 HTML – Agrega este botón debajo del botón de “Lanzar Dados”
<button id="btn-reiniciar">Reiniciar</button>

🧾 JavaScript – Captura y función de reinicio
const btnReiniciar = document.getElementById('btn-reiniciar');

btnReiniciar.addEventListener('click', function () {
  // 1. Vaciar el array historial
  historial = [];

  // 2. Limpiar el contenido de cada sección
  contResultado.textContent = '';
  contHistorial.innerHTML = '';
  document.getElementById('resumen').innerHTML = '';

  console.log('🔄 Simulador reiniciado');
});

🧪 Resultado esperado

Al hacer clic en “Reiniciar”:

Se borra todo el contenido mostrado

Se vacía el historial (ya no se muestran tiradas anteriores)

El resumen vuelve a estar vacío

La consola mostrará: 🔄 Simulador reiniciado

✅ Lo aprendido en este paso

Cómo reiniciar estructuras de datos (vaciar arrays)

Cómo borrar contenido del DOM (.textContent = '', .innerHTML = '')

Buenas prácticas para interfaces limpias y controladas

Control completo de estado con JavaScript