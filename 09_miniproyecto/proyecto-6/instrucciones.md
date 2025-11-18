🧾 Introducción – Generador de Contraseñas Aleatorias

Este mini proyecto genera contraseñas seguras con una mezcla de letras, números y símbolos.
El usuario podrá elegir cuántos caracteres desea y si quiere incluir mayúsculas y símbolos.

🎯 Objetivo del mini proyecto

Practicar arrays con letras, números y símbolos.

Usar strings para construir la contraseña final.

Aplicar operadores aleatorios para seleccionar caracteres.

Trabajar con booleans para decidir si incluir mayúsculas o símbolos.

Reforzar funciones, variables y condicionales.

🧱 Plantilla base HTML

Guarda esto como index.html:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Generador de Contraseñas</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 320px;
      width: 100%;
    }

    input[type="number"] {
      width: 100%;
      padding: 8px;
      font-size: 16px;
    }

    label {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 16px;
    }

    button {
      padding: 10px;
      font-size: 16px;
      background-color: #0078ff;
      color: white;
      border: none;
      cursor: pointer;
      border-radius: 4px;
    }

    #resultado {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
      word-break: break-all;
      border: 1px solid #ccc;
      padding: 10px;
      width: 100%;
      max-width: 320px;
      text-align: center;
      border-radius: 4px;
      background-color: #f7f7f7;
    }
  </style>
</head>
<body>

  <h1>🔐 Generador de Contraseñas</h1>

  <form id="form-generador">
    <label>
      Longitud:
      <input type="number" id="longitud" min="4" max="30" value="10" required>
    </label>

    <label>
      <input type="checkbox" id="mayusculas" checked>
      Incluir mayúsculas
    </label>

    <label>
      <input type="checkbox" id="numeros" checked>
      Incluir números
    </label>

    <label>
      <input type="checkbox" id="simbolos">
      Incluir símbolos
    </label>

    <button type="submit">Generar contraseña</button>
  </form>

  <div id="resultado">Tu contraseña aparecerá aquí 🔽</div>

  <script src="app.js"></script>
</body>
</html>

✅ Paso 1 – Conectar con el HTML y preparar variables
🎯 Objetivo:

Conectar el archivo app.js con el HTML y preparar todas las variables que necesitaremos más adelante.

📋 Instrucciones:

1️⃣ Crea un archivo app.js y verifica que esté enlazado correctamente.
2️⃣ Captura los elementos del DOM:

El formulario #form-generador

Los inputs: #longitud, #mayusculas, #numeros, #simbolos

El contenedor del resultado #resultado
3️⃣ Agrega un console.log('🔐 Generador iniciado') para verificar la conexión.
4️⃣ Define arrays base para letras, números y símbolos (vacíos por ahora, los llenaremos en el siguiente paso).

🧾 Código – app.js
// 1. Captura de elementos del DOM
const formulario = document.getElementById('form-generador');
const inputLongitud = document.getElementById('longitud');
const chkMayusculas = document.getElementById('mayusculas');
const chkNumeros = document.getElementById('numeros');
const chkSimbolos = document.getElementById('simbolos');
const contResultado = document.getElementById('resultado');

// 2. Arrays base (los llenaremos en el siguiente paso)
const letrasMinusculas = [];
const letrasMayusculas = [];
const numeros = [];
const simbolos = [];

// 3. Mensaje de prueba
console.log('🔐 Generador iniciado');


✅ Paso 2 – Crear los arrays base
🎯 Objetivo:

Definir los caracteres posibles para generar las contraseñas:

Letras minúsculas (a–z)

Letras mayúsculas (A–Z)

Números (0–9)

Símbolos (!, @, #, $, %, etc.)

📘 Conceptos que vas a practicar:

Arrays y strings

Métodos como .split('')

Organización de datos

Buenas prácticas: tener conjuntos separados y limpios

📋 Instrucciones:

1️⃣ Llena cada array con los caracteres correspondientes.
2️⃣ Usa .split('') para convertir un string largo en array (es más limpio que escribir cada letra entre comillas y comas).
3️⃣ Deja todo listo para combinarlos más adelante.

🧾 Código – app.js (continuación)
// 1. Captura de elementos del DOM
const formulario = document.getElementById('form-generador');
const inputLongitud = document.getElementById('longitud');
const chkMayusculas = document.getElementById('mayusculas');
const chkNumeros = document.getElementById('numeros');
const chkSimbolos = document.getElementById('simbolos');
const contResultado = document.getElementById('resultado');

// 2. Arrays base
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numeros = '0123456789'.split('');
const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>/?'.split('');

// 3. Mensaje de prueba
console.log('🔐 Generador iniciado');
console.log('Letras minúsculas:', letrasMinusculas);
console.log('Letras mayúsculas:', letrasMayusculas);
console.log('Números:', numeros);
console.log('Símbolos:', simbolos);

🧠 Explicación rápida:

.split('') convierte una cadena en un array de caracteres individuales.
Ejemplo: 'abc'.split('') → ['a', 'b', 'c']

Tener arrays separados nos permitirá combinarlos dependiendo de qué checkboxes estén activados.

✅ Resultado esperado:

Abre la consola (F12 → pestaña “Console”) y deberías ver:

🔐 Generador iniciado
Letras minúsculas: (26) ['a', 'b', 'c', ...]
Letras mayúsculas: (26) ['A', 'B', 'C', ...]
Números: (10) ['0', '1', '2', ...]
Símbolos: (28) ['!', '@', '#', ...]


✅ Paso 3 – Generar la contraseña aleatoria
🎯 Objetivo:

Escuchar el envío del formulario.

Leer las opciones del usuario (longitud, mayúsculas, números, símbolos).

Combinar los caracteres permitidos en un solo array.

Generar una contraseña seleccionando letras aleatorias.

Mostrar el resultado en pantalla.

📘 Conceptos que vas a practicar:

Eventos (submit)

Concatenación de arrays

Operador ternario / condicionales

Math.random() y Math.floor() para elegir caracteres al azar

String concatenation

📋 Instrucciones:

1️⃣ Escucha el evento submit en el formulario.
2️⃣ Usa preventDefault() para que no recargue la página.
3️⃣ Lee los valores de:

Longitud (Number(inputLongitud.value))

Checkboxes (chkMayusculas.checked, chkNumeros.checked, chkSimbolos.checked)
4️⃣ Crea un array caracteresDisponibles y empieza con letras minúsculas.
5️⃣ Si el usuario marcó “mayúsculas”, concatena letrasMayusculas.
6️⃣ Si marcó “números”, concatena numeros.
7️⃣ Si marcó “símbolos”, concatena simbolos.
8️⃣ Usa un ciclo for para generar la contraseña aleatoria seleccionando caracteres al azar.
9️⃣ Muestra el resultado en #resultado.

🧾 Código – app.js (continuación)
// 1. Captura de elementos del DOM
const formulario = document.getElementById('form-generador');
const inputLongitud = document.getElementById('longitud');
const chkMayusculas = document.getElementById('mayusculas');
const chkNumeros = document.getElementById('numeros');
const chkSimbolos = document.getElementById('simbolos');
const contResultado = document.getElementById('resultado');

// 2. Arrays base
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numeros = '0123456789'.split('');
const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>/?'.split('');

// 3. Evento submit
formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener valores del formulario
  const longitud = Number(inputLongitud.value);
  const incluirMayus = chkMayusculas.checked;
  const incluirNum = chkNumeros.checked;
  const incluirSimb = chkSimbolos.checked;

  // Verificar longitud mínima
  if (isNaN(longitud) || longitud < 4) {
    alert('La longitud mínima es de 4 caracteres.');
    return;
  }

  // Construir conjunto de caracteres disponibles
  let caracteresDisponibles = [...letrasMinusculas]; // base siempre minúsculas

  if (incluirMayus) caracteresDisponibles = caracteresDisponibles.concat(letrasMayusculas);
  if (incluirNum) caracteresDisponibles = caracteresDisponibles.concat(numeros);
  if (incluirSimb) caracteresDisponibles = caracteresDisponibles.concat(simbolos);

  // Si por alguna razón no hay caracteres, prevenir error
  if (caracteresDisponibles.length === 0) {
    alert('Selecciona al menos un tipo de carácter.');
    return;
  }

  // Generar la contraseña
  let password = '';
  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteresDisponibles.length);
    password += caracteresDisponibles[indice];
  }

  // Mostrar en pantalla
  contResultado.textContent = password;
  console.log('🔑 Contraseña generada:', password);
});

🧠 Explicación rápida:

Math.random() devuelve un número aleatorio entre 0 y 1.

Multiplicamos por la longitud del array de caracteres para obtener una posición aleatoria.

Math.floor() redondea hacia abajo, dejándolo como índice válido.

Vamos concatenando los caracteres hasta tener la longitud deseada.

El resultado se muestra en #resultado.

✅ Resultado esperado:

Ejemplo de salida (según opciones):

Longitud: 10
Mayúsculas: ✔️
Números: ✔️
Símbolos: ✔️

Resultado → "Af7#kW2$pQ"


Cada vez que presiones "Generar contraseña", obtendrás una nueva aleatoria 🔄

✅ Paso 4 – Mejoras opcionales: copiar al portapapeles y feedback visual
🎯 Objetivo:

Agregar un botón para copiar la contraseña generada.

Mostrar un mensaje temporal (tipo “Copiada ✅”).

Mejorar un poco la experiencia visual y práctica.

📘 Conceptos que vas a practicar:

Manipulación del DOM dinámica (crear elementos desde JS)

Función navigator.clipboard.writeText()

Temporizadores (setTimeout)

Validaciones (no copiar si no hay contraseña)

📋 Instrucciones:

1️⃣ Agrega un botón nuevo bajo el resultado (<button id="copiar">Copiar</button>) en el HTML.
2️⃣ Captúralo desde JS.
3️⃣ Cuando el usuario haga clic:

Si no hay contraseña generada, muestra una alerta.

Si hay, copia al portapapeles con navigator.clipboard.writeText(password).

Muestra un pequeño mensaje visual tipo “Contraseña copiada ✅” durante 2 segundos.

🧱 Actualiza tu HTML (añade el botón copiar debajo del div resultado)
<div id="resultado">Tu contraseña aparecerá aquí 🔽</div>
<button id="copiar">📋 Copiar contraseña</button>


⚠️ Colócalo después del <div id="resultado">.

🧾 Código – app.js (continuación)
// 1. Captura de elementos del DOM
const formulario = document.getElementById('form-generador');
const inputLongitud = document.getElementById('longitud');
const chkMayusculas = document.getElementById('mayusculas');
const chkNumeros = document.getElementById('numeros');
const chkSimbolos = document.getElementById('simbolos');
const contResultado = document.getElementById('resultado');
const btnCopiar = document.getElementById('copiar');

// 2. Arrays base
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'.split('');
const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numeros = '0123456789'.split('');
const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>/?'.split('');

// 3. Variable para guardar la última contraseña generada
let ultimaPassword = '';

// 4. Generar contraseña al enviar el formulario
formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  const longitud = Number(inputLongitud.value);
  const incluirMayus = chkMayusculas.checked;
  const incluirNum = chkNumeros.checked;
  const incluirSimb = chkSimbolos.checked;

  if (isNaN(longitud) || longitud < 4) {
    alert('La longitud mínima es de 4 caracteres.');
    return;
  }

  let caracteresDisponibles = [...letrasMinusculas];
  if (incluirMayus) caracteresDisponibles = caracteresDisponibles.concat(letrasMayusculas);
  if (incluirNum) caracteresDisponibles = caracteresDisponibles.concat(numeros);
  if (incluirSimb) caracteresDisponibles = caracteresDisponibles.concat(simbolos);

  if (caracteresDisponibles.length === 0) {
    alert('Selecciona al menos un tipo de carácter.');
    return;
  }

  let password = '';
  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteresDisponibles.length);
    password += caracteresDisponibles[indice];
  }

  ultimaPassword = password; // Guardar para copiar
  contResultado.textContent = password;
});

// 5. Copiar al portapapeles
btnCopiar.addEventListener('click', function() {
  if (!ultimaPassword) {
    alert('Primero genera una contraseña.');
    return;
  }

  navigator.clipboard.writeText(ultimaPassword)
    .then(() => {
      mostrarMensaje('Contraseña copiada ✅');
    })
    .catch(err => {
      console.error('Error al copiar:', err);
    });
});

// 6. Función para mostrar mensaje temporal
function mostrarMensaje(texto) {
  const mensaje = document.createElement('p');
  mensaje.textContent = texto;
  mensaje.style.color = 'green';
  mensaje.style.fontWeight = 'bold';
  mensaje.style.marginTop = '10px';
  contResultado.insertAdjacentElement('afterend', mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 2000);
}

🧠 Explicación rápida:

Guardamos la última contraseña generada en ultimaPassword.

Si el usuario presiona copiar sin generar, muestra una alerta.

Si existe, usamos navigator.clipboard.writeText() para copiarla.

mostrarMensaje() crea un <p> temporal que desaparece a los 2 segundos.

✅ Resultado esperado:

1️⃣ Generas una contraseña → se muestra en pantalla.
2️⃣ Presionas 📋 Copiar contraseña → aparece “Contraseña copiada ✅”.
3️⃣ Si intentas copiar sin generar una → alerta: “Primero genera una contraseña.”