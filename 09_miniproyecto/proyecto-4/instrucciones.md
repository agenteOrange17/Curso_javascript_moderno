🧾 Introducción – Carrito de Compras

Este mini proyecto simula un carrito básico donde el usuario puede:

Agregar productos con nombre, precio y cantidad

Ver la lista de productos en el carrito

Ver el total de la compra

(Opcional) Aplicar descuentos, calcular IVA, o vaciar el carrito

🎯 Objetivo del mini proyecto

Manejar productos como objetos { nombre, precio, cantidad }

Usar arrays para guardar la lista del carrito

Sumar precios con operadores

Mostrar cantidades, totales y categorías (strings)

Aplicar lógica booleana para descuentos o envíos gratis

🧱 Plantilla base HTML

Guarda esto como index.html:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Carrito de Compras</title>
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

    .producto {
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
    }

    #total {
      font-weight: bold;
      margin-top: 20px;
    }

    #vaciar {
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

  <h1>🛒 Carrito de Compras</h1>

  <form id="formulario-producto">
    <input type="text" id="nombre" placeholder="Producto" required>
    <input type="number" id="precio" placeholder="Precio" required>
    <input type="number" id="cantidad" placeholder="Cantidad" required>
    <button type="submit">Agregar al carrito</button>
  </form>

  <div id="carrito">
    <!-- Productos agregados aparecerán aquí -->
  </div>

  <div id="total"></div>

  <button id="vaciar">Vaciar Carrito</button>

  <script src="app.js"></script>
</body>
</html>

✅ Paso 1 – Inicializar estructura y conectar con JavaScript
🎯 Objetivo:

Conectar con el HTML desde JS

Preparar las variables

Crear el array carrito

Mostrar mensaje de prueba con console.log()

📋 Instrucciones

Crea un archivo app.js y asegúrate de que esté enlazado.

Captura:

El formulario (#formulario-producto)

Los campos: nombre, precio, cantidad

El contenedor del carrito (#carrito)

El botón de vaciar (#vaciar)

El contenedor del total (#total)

Crea el array carrito = []

Agrega un console.log('🛒 Carrito iniciado') para verificar

🧾 Código – app.js
// 1. Captura de elementos del DOM
const formulario = document.getElementById('formulario-producto');
const inputNombre = document.getElementById('nombre');
const inputPrecio = document.getElementById('precio');
const inputCantidad = document.getElementById('cantidad');
const contCarrito = document.getElementById('carrito');
const contTotal = document.getElementById('total');
const btnVaciar = document.getElementById('vaciar');

// 2. Inicializar carrito
let carrito = [];

// 3. Mensaje de prueba
console.log('🛒 Carrito iniciado');


✅ Paso 2 – Capturar producto y guardarlo en el carrito
🎯 Objetivo:

Leer los datos del formulario: nombre, precio, cantidad

Validar que todos los campos estén completos y correctos

Crear un objeto con esa información

Agregarlo al array carrito

Mostrar en consola el producto y el carrito actual

📋 Instrucciones paso a paso

Escucha el evento submit del formulario.

Prevenir que se recargue la página (event.preventDefault()).

Leer los valores de los inputs:

Nombre (string)

Precio y cantidad (convertirlos a número)

Validar:

Que los campos no estén vacíos

Que los números sean mayores a 0

Crear el objeto producto:

{ nombre: "Camiseta", precio: 250, cantidad: 2 }


Agregarlo al array con .push()

Limpiar el formulario

Mostrar el producto y el carrito en consola

🧾 Código actualizado en app.js
formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const nombre = inputNombre.value.trim();
  const precio = parseFloat(inputPrecio.value);
  const cantidad = parseInt(inputCantidad.value);

  // Validación básica
  if (nombre === '' || isNaN(precio) || isNaN(cantidad) || precio <= 0 || cantidad <= 0) {
    alert('Por favor ingresa datos válidos en todos los campos.');
    return;
  }

  // Crear objeto producto
  const producto = {
    nombre: nombre,
    precio: precio,
    cantidad: cantidad
  };

  // Agregar al carrito
  carrito.push(producto);

  // Mostrar en consola
  console.log('🆕 Producto agregado:', producto);
  console.log('📦 Carrito actual:', carrito);

  // Limpiar formulario
  formulario.reset();

  // (En el siguiente paso lo mostraremos en pantalla y calcularemos total)
});

🧪 Resultado esperado

Al llenar el formulario y dar clic en “Agregar al carrito”:

Se imprime en consola:

🆕 Producto agregado: {nombre: 'Camiseta', precio: 250, cantidad: 2}
📦 Carrito actual: [ { ... } ]

✅ Lo aprendido en este paso

Cómo capturar y convertir valores de formularios

Validaciones básicas con isNaN() y comparaciones

Cómo construir y guardar objetos en un array

Buenas prácticas: limpiar el formulario después de usarlo

✅ Paso 3 – Mostrar productos en el DOM, calcular total y ocultar mensaje vacío
🎯 Objetivo

Mostrar los productos agregados al carrito dinámicamente.

Calcular el total de la compra (precio × cantidad).

Mostrar u ocultar el mensaje "No hay productos en el carrito" según si hay productos o no.

🧠 ¿Qué estamos practicando aquí?

Arrays (carrito) y objetos ({ nombre, precio, cantidad })

Manipulación del DOM (createElement, innerHTML)

Condicionales (if...else)

Operadores (*, +=, .toFixed())

Buenas prácticas visuales con TailwindCSS (hidden para mostrar/ocultar)

🧾 HTML necesario

Asegúrate de que tu HTML contenga este bloque con el id="mensaje-vacio":

<div id="mensaje-vacio" class="text-center py-12 text-gray-400 border-t border-gray-100">
  <p class="text-sm">No hay productos en el carrito</p>
</div>


Este mensaje se mostrará solo cuando no haya productos.

🧠 ⚠️ ¡Muy importante!

Tu código JavaScript debe ejecutarse después de que el DOM esté cargado, por eso usaremos:

document.addEventListener('DOMContentLoaded', function () {
  // Tu código aquí...
});

🧾 JavaScript: renderizarCarrito() con comentarios paso a paso
function renderizarCarrito() {
  // 1. Limpiamos el contenedor del carrito antes de volver a renderizar
  contCarrito.innerHTML = '';

  // 2. Capturamos el mensaje vacío del HTML
  const mensajeVacio = document.getElementById('mensaje-vacio');

  // 3. Inicializamos el total de la compra
  let total = 0;

  // 4. Verificamos si el carrito está vacío
  if (carrito.length === 0) {
    // 5. Si está vacío, mostramos el mensaje usando Tailwind
    mensajeVacio.classList.remove('hidden');
  } else {
    // 6. Si hay productos, ocultamos el mensaje
    mensajeVacio.classList.add('hidden');

    // 7. Recorremos cada producto del carrito
    carrito.forEach(function (producto) {
      // 8. Calculamos subtotal (precio × cantidad)
      const subtotal = producto.precio * producto.cantidad;

      // 9. Sumamos al total general
      total += subtotal;

      // 10. Creamos un div para representar visualmente el producto
      const div = document.createElement('div');
      div.className =
        'producto flex items-center justify-between p-4 border border-gray-200 rounded-md hover:border-gray-300 transition';

      // 11. Inyectamos los datos del producto en el HTML
      div.innerHTML = `
        <div class="flex-1">
          <h3 class="font-medium text-gray-900">${producto.nombre}</h3>
          <p class="text-sm text-gray-500 mt-1">
            ${producto.cantidad} × $${producto.precio.toFixed(2)} = $${subtotal.toFixed(2)}
          </p>
        </div>
        <button class="ml-4 text-red-600 hover:text-red-700 font-medium text-sm transition">
          Eliminar
        </button>
      `;

      // 12. Agregamos el producto al contenedor del carrito
      contCarrito.appendChild(div);
    });
  }

  // 13. Mostramos el total calculado con dos decimales
  contTotal.textContent = `Total: $${total.toFixed(2)}`;
}

📌 Recuerda:

El mensaje "No hay productos" debe tener la clase hidden por defecto si no hay productos, y se quita cuando el carrito está vacío.

El archivo app.js debe estar dentro de un DOMContentLoaded como este:

document.addEventListener('DOMContentLoaded', function () {
  // Aquí va todo tu código JS
});


✅ Paso 4 – Eliminar un producto individual del carrito
🎯 Objetivo

Permitir que al hacer clic en el botón “Eliminar” de cada producto, ese producto sea eliminado del array carrito y se actualice la interfaz automáticamente.

🧠 ¿Qué practicamos aquí?

Arrays y su método splice()

Delegación de eventos (addEventListener sobre el contenedor)

Atributos personalizados (data-index)

Actualización del DOM (renderizarCarrito())

🧩 Instrucciones paso a paso
1. Asignar un identificador a cada producto

Cuando renderices el carrito, en cada botón "Eliminar" debes asignar un data-index con el número de posición del producto en el array.

2. Escuchar el evento de clic

Colocamos un event listener al contenedor de productos (#carrito) y usamos delegación de eventos para detectar clics en botones con la clase btn-eliminar.

3. Eliminar el producto del array

Extraemos el index del botón, lo usamos con splice() para eliminar ese producto del array.

4. Actualizar el DOM

Llamamos a renderizarCarrito() para mostrar el carrito actualizado sin el producto eliminado.

🧾 Código para renderizarCarrito() actualizado

Asegúrate de que este método ya esté bien implementado así:

function renderizarCarrito() {
  contCarrito.innerHTML = '';
  let total = 0;

  if (carrito.length === 0) {
    mensajeVacio.classList.remove('hidden');
  } else {
    mensajeVacio.classList.add('hidden');

    carrito.forEach(function (producto, index) {
      const subtotal = producto.precio * producto.cantidad;
      total += subtotal;

      const div = document.createElement('div');
      div.className =
        'producto flex items-center justify-between p-4 border border-gray-200 rounded-md hover:border-gray-300 transition';

      div.innerHTML = `
        <div class="flex-1">
          <h3 class="font-medium text-gray-900">${producto.nombre}</h3>
          <p class="text-sm text-gray-500 mt-1">
            ${producto.cantidad} × $${producto.precio.toFixed(2)} = $${subtotal.toFixed(2)}
          </p>
        </div>
        <button data-index="${index}" class="btn-eliminar ml-4 text-red-600 hover:text-red-700 font-medium text-sm transition">
          Eliminar
        </button>
      `;

      contCarrito.appendChild(div);
    });
  }

  contTotal.textContent = `Total: $${total.toFixed(2)}`;
}

🧾 Código JS para detectar clic en “Eliminar”

Esto lo colocas dentro de tu DOMContentLoaded, justo después de declarar tu array carrito:

contCarrito.addEventListener('click', function (e) {
  // 1. Verificamos si el clic proviene de un botón con clase "btn-eliminar"
  if (e.target.classList.contains('btn-eliminar')) {
    // 2. Obtenemos el índice del producto a eliminar
    const index = e.target.dataset.index;

    // 3. Usamos splice para eliminar ese producto del array
    carrito.splice(index, 1);

    // 4. Re-renderizamos el carrito actualizado
    renderizarCarrito();
  }
});