🎯 ¿Qué hace este proyecto?
Simula el lanzamiento de 2 dados, guarda el historial de tiradas y muestra estadísticas de quién va ganando.

📦 Parte 1: Esperar a que cargue la página
javascriptdocument.addEventListener('DOMContentLoaded', function() {
    // Todo el código va aquí dentro
});
¿Qué hace?

DOMContentLoaded → Espera a que el HTML esté completamente cargado antes de ejecutar el JavaScript
¿Por qué? Si el JS se ejecuta antes, no encontrará los elementos del HTML (getElementById devolvería null)

Analogía: Es como esperar a que todos los invitados lleguen a la fiesta antes de empezar el juego.

📦 Parte 2: Capturar elementos del DOM
javascriptconst btnLanzar = document.getElementById('btn-lanzar');
const contResultado = document.getElementById('resultado');
const contHistorial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btn-reiniciar');
¿Qué hace?

Guarda referencias a los elementos HTML para usarlos después
Es como tener "atajos" para no buscar los elementos cada vez


📦 Parte 3: Array para guardar datos
javascriptlet historial = [];

Array vacío que guardará objetos con cada tirada
Cada objeto tendrá: número de tirada, resultados de dados, ganador


🎲 Parte 4: EVENTO - Lanzar Dados
javascriptbtnLanzar.addEventListener('click', function(){
Cuando haces clic en "Lanzar Dados", se ejecuta todo lo que está dentro.

4.1: Generar números aleatorios
javascriptconst dado1 = Math.floor(Math.random() * 6) + 1;
const dado2 = Math.floor(Math.random() * 6) + 1;
Desglosemos Math.random():
javascriptMath.random()  // Genera un número decimal entre 0 y 0.9999999...
// Ejemplos: 0.123, 0.856, 0.001, 0.999

Math.random() * 6  // Multiplica por 6
// Ahora genera números entre 0 y 5.9999...
// Ejemplos: 0.738, 3.141, 5.876

Math.floor(Math.random() * 6)  // Redondea hacia ABAJO
// Ahora genera números ENTEROS entre 0 y 5
// Ejemplos: 0, 1, 2, 3, 4, 5

Math.floor(Math.random() * 6) + 1  // Le suma 1
// Ahora genera números entre 1 y 6 ✅
// Ejemplos: 1, 2, 3, 4, 5, 6
Ejemplo completo:
javascript// Paso 1:
Math.random() → 0.8234567

// Paso 2:
0.8234567 * 6 → 4.9407402

// Paso 3:
Math.floor(4.9407402) → 4

// Paso 4:
4 + 1 → 5  // ¡El dado sacó 5!

4.2: Determinar quién ganó
javascriptlet resultado = '';

if(dado1 === dado2){
    resultado = "Empate";
}else if(dado1 > dado2){
    resultado = '🎲 Gana el dado 1';
}else{
    resultado = '🎲 Gana el dado 2';
}
Lógica simple:

Si ambos dados son iguales → Empate
Si dado1 es mayor → Gana dado 1
Si no (dado2 es mayor) → Gana dado 2

Ejemplo:
javascript// Si dado1 = 5 y dado2 = 3
// 5 === 3 ? NO
// 5 > 3 ? SÍ ✅
// resultado = '🎲 Gana el dado 1'

4.3: Mostrar resultado en pantalla
javascriptcontResultado.textContent = `
Dado1: ${dado1} | Dado 2: ${dado2} -> ${resultado}
`;
Template Literals (backticks  ):

Permiten insertar variables dentro del texto usando ${variable}
Son más cómodos que concatenar con +

Ejemplo:
javascript// Si dado1=4, dado2=6, resultado='🎲 Gana el dado 2'
// Se mostrará:
"Dado1: 4 | Dado 2: 6 -> 🎲 Gana el dado 2"
Comparación:
javascript// Forma antigua (concatenación):
'Dado1: ' + dado1 + ' | Dado 2: ' + dado2 + ' -> ' + resultado

// Forma moderna (template literals):
`Dado1: ${dado1} | Dado 2: ${dado2} -> ${resultado}`

4.4: Crear objeto de la jugada
javascriptconst jugada = {
    tirada: historial.length + 1,
    dado1: dado1, 
    dado2: dado2,
    resultado: resultado
};
¿Qué hace?

Crea un objeto con toda la información de esta tirada
historial.length + 1 → número de tirada (si hay 0 jugadas, será tirada #1)

Ejemplo:
javascript// Primera tirada (historial está vacío, length = 0):
{
    tirada: 1,      // 0 + 1
    dado1: 4,
    dado2: 6,
    resultado: '🎲 Gana el dado 2'
}

// Segunda tirada (historial tiene 1 elemento, length = 1):
{
    tirada: 2,      // 1 + 1
    dado1: 3,
    dado2: 3,
    resultado: 'Empate'
}

4.5: Guardar en el historial
javascripthistorial.push(jugada);

Agrega el objeto jugada al final del array historial

Ejemplo:
javascript// Antes:
historial = []

// Después de 1ra tirada:
historial = [
    {tirada: 1, dado1: 4, dado2: 6, resultado: '🎲 Gana el dado 2'}
]

// Después de 2da tirada:
historial = [
    {tirada: 1, dado1: 4, dado2: 6, resultado: '🎲 Gana el dado 2'},
    {tirada: 2, dado1: 3, dado2: 3, resultado: 'Empate'}
]

4.6: Renderizar y mostrar resumen
javascriptrenderizarHistorial();
mostrarResumen();

Llama a estas funciones para actualizar la pantalla


📋 Parte 5: Función renderizarHistorial()
javascriptfunction renderizarHistorial(){
    // 7. Limpiar historial anterior
    contHistorial.innerHTML = '';

    // 8. Recorrer historial y mostrar cada jugada
    historial.forEach(function(jugada){
        const div = document.createElement('DIV');
        div.classList.add('historial-item');
        div.textContent = `Tirada #${jugada.tirada}: D1=${jugada.dado1}, D2=${jugada.dado2} -> ${jugada.resultado}`;
        contHistorial.appendChild(div);
    });
}
Paso a paso:

Limpia el contenedor (igual que en el proyecto anterior)
Recorre el array historial con forEach
Por cada jugada:

Crea un <div>
Le agrega la clase historial-item
Le pone el texto con los datos de la jugada
Lo agrega al contenedor



Ejemplo visual:
html<!-- Después de 2 tiradas, se genera esto: -->
<div id="historial">
    <div class="historial-item">Tirada #1: D1=4, D2=6 -> 🎲 Gana el dado 2</div>
    <div class="historial-item">Tirada #2: D1=3, D2=3 -> Empate</div>
</div>

📊 Parte 6: Función mostrarResumen()
javascriptfunction mostrarResumen(){
    let ganadasDado1 = 0;
    let ganadasDado2 = 0;
    let empates = 0;
1. Crear contadores:

Inicializa 3 variables en 0 para contar resultados


javascript    historial.forEach(function (jugada){
        if(jugada.resultado.includes('Empate')){
            empates++;
        }else if(jugada.resultado.includes('Dado 1')){
            ganadasDado1++;
        }else{
            ganadasDado2++;
        }
    });
2. Recorrer y contar:

includes('Empate') → verifica si el texto contiene la palabra "Empate"
Si encuentra la palabra, suma 1 al contador correspondiente

Ejemplo del método .includes():
javascriptlet texto = '🎲 Gana el dado 1';

texto.includes('Dado 1')  // true ✅
texto.includes('Empate')  // false ❌
texto.includes('Gana')    // true ✅
Ejemplo de conteo:
javascript// Si tienes este historial:
historial = [
    {resultado: '🎲 Gana el dado 1'},  // ganadasDado1++
    {resultado: 'Empate'},             // empates++
    {resultado: '🎲 Gana el dado 2'},  // ganadasDado2++
    {resultado: '🎲 Gana el dado 1'}   // ganadasDado1++
]

// Resultado:
// ganadasDado1 = 2
// ganadasDado2 = 1
// empates = 1

javascript    const resumenHTML = `
    <div class="table-resumen">
    <h2>Resumen de tiradas:</h2>
    <ul>
        <li>Gana Dado 1: ${ganadasDado1} veces</li>
        <li>Gana Dado 2: ${ganadasDado2} veces</li>
        <li>Empates: ${empates} veces</li>
    </ul>
    </div>
    `;

    document.getElementById('resumen').innerHTML = resumenHTML;
}
3. Crear HTML y mostrarlo:

Crea un string con HTML completo
Lo inserta en el elemento #resumen

Resultado visual:
html<div id="resumen">
    <div class="table-resumen">
    <h2>Resumen de tiradas:</h2>
    <ul>
        <li>Gana Dado 1: 2 veces</li>
        <li>Gana Dado 2: 1 veces</li>
        <li>Empates: 1 veces</li>
    </ul>
    </div>
</div>

🔄 Parte 7: Botón Reiniciar
javascriptbtnReiniciar.addEventListener('click', function(){
    // 13. Vaciar el array historial
    historial = [];
    
    // 14. Limpiar el contenido de cada seccion
    contResultado.textContent = '';
    contHistorial.innerHTML ='';
    document.getElementById('resumen').innerHTML = '';

    console.log('Simulador reiniciado');
});
```

**¿Qué hace?**
1. Vacía el array `historial` (vuelve a ser `[]`)
2. Limpia todos los contenedores del HTML
3. Todo vuelve al estado inicial

---

## 🔄 Flujo completo resumido
```
1. Usuario hace clic en "Lanzar Dados"
   ↓
2. Se generan 2 números aleatorios (1-6)
   ↓
3. Se determina quién ganó
   ↓
4. Se muestra el resultado
   ↓
5. Se crea un objeto con la jugada
   ↓
6. Se guarda en el array historial
   ↓
7. Se renderiza el historial completo
   ↓
8. Se calculan y muestran las estadísticas

💡 Conceptos clave que aprendiste

Math.random() y Math.floor() → Números aleatorios
Template literals → `Texto ${variable}`
.includes() → Buscar texto dentro de strings
DOMContentLoaded → Esperar a que cargue el HTML
Contadores → Variables que suman (empates++)