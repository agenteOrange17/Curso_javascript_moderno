document.addEventListener("DOMContentLoaded", function () {
  // 1. Captura de elementos del DOM
  const formulario = document.getElementById("formulario-producto");
  const inputNombre = document.getElementById("nombre");
  const inputPrecio = document.getElementById("precio");
  const inputCantidad = document.getElementById("cantidad");
  const contCarrito = document.getElementById("carrito");
  const contTotal = document.getElementById("total");
  const mensajeVacio = document.getElementById("mensaje-vacio");
  const btnVaciar = document.getElementById("vaciar");

  // 2. Inicializar carrito
  let carrito = [];

  // 3. Mensaje de prueba
  // console.log('Carrito iniciado');

  // 4. Crear formulario
  formulario.addEventListener("submit", function (e) {
    // Prevenir que se dispare el formulario
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const precio = parseFloat(inputPrecio.value);
    const cantidad = parseInt(inputCantidad.value);

    // 5 Validacion básica
    if (
      nombre === "" ||
      isNaN(precio) ||
      isNaN(cantidad) ||
      precio <= 0 ||
      cantidad <= 0
    ) {
      alert("Por favor ingresa datos validos en todo los campos");
      return;
    }

    // 6. Crear objeto producto
    const producto = {
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
    };

    // 7. Agregar al carrito
    carrito.push(producto);

    // 8. Mostrar en consola
    console.log("Producto agregado: ", producto);
    console.log("Carrito Actual: ", carrito);

    // 9. Limpiar formulario
    formulario.reset();

    // 10. Renderizamos el carrito
    renderizarCarrito();
  });

  // Eliminar producto 
      // 12. Eliminar producto
    contCarrito.addEventListener('click', function(e){
        // 1. Verificamos si el clic proviene de un boton con clase btn-eliminar
        if(e.target.classList.contains('btn-eliminar')){            
            const index = e.target.dataset.index;
            // 4. Renderizamos el carrito actualizado
            eliminarProducto(index);
        }
    })

  // 11. Renderizar Carrito
  function renderizarCarrito() {
    // 1. Limpiamos el contenedor de productos antes de volver a renderizar
    contCarrito.innerHTML = "";

    // 3. Inicializamos el total en cero
    let total = 0;

    // 4. Verificamos si el carrito tiene productos
    if (carrito.length === 0) {
      // Si el carrito está vacío, mostramos el mensaje
      mensajeVacio.classList.remove("hidden");
    } else {
      // Si hay productos, ocultamos el mensaje vacío
      mensajeVacio.classList.add("hidden");

      // 5. Recorremos el array del carrito
      carrito.forEach(function (producto, index) {
        // 6. Calculamos subtotal del producto
        const subtotal = producto.precio * producto.cantidad;

        // 7. Sumamos al total general
        total += subtotal;

        // 8. Creamos el div contenedor del producto
        const div = document.createElement("div");
        div.className =
          "producto flex items-center justify-between p-4 border border-gray-200 rounded-md hover:border-gray-300 transition";

        // 9. Insertamos el contenido HTML del producto
        div.innerHTML = `
        <div class="flex-1">
          <h3 class="font-medium text-gray-900">${producto.nombre}</h3>
          <p class="text-sm text-gray-500 mt-1">
            ${producto.cantidad} × $${producto.precio.toFixed(
          2
        )} = $${subtotal.toFixed(2)}
          </p>
        </div>
        <button 
        data-index="${index}"         
        class="btn-eliminar ml-4 text-red-600 hover:text-red-700 font-medium text-sm transition">
          Eliminar
        </button>
      `;

        // 10. Agregamos el div al contenedor principal
        contCarrito.appendChild(div);
      });
    }

    // 11. Mostramos el total general en el contenedor correspondiente
    contTotal.textContent = `Total: $${total.toFixed(2)}`;
  }

  // 12. eliminar producto
  function eliminarProducto(index){
    carrito.splice(index, 1);
    renderizarCarrito();
  }
});
