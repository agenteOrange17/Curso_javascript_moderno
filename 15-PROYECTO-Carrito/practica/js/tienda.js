// ============================================
// PASO 1: VARIABLES BÁSICAS
// ============================================
// Un programador siempre empieza seleccionando los elementos
// que va a necesitar. Es como preparar las herramientas antes de trabajar.

const listaLibros = document.querySelector("#lista-libros");

// ¿Por qué querySelector y no getElementById?
// - querySelector es más moderno (ES6+)
// - Permite usar selectores CSS (#id, .class, etc.)
// - Es más flexible

console.log("🔍 PASO 1: Verificando que el elemento existe...");
//console.log("listaLibros:", listaLibros);

// ¿Por qué verificamos?
// - Si el elemento no existe, el código fallará
// - Es mejor detectar el error temprano

if (!listaLibros) {
  console.error("Error: No se encontro #lista-libros");
  console.error("Revisa que el HTML tenga ese ID");
} else {
  console.log("Paso 1: Elementos encontrado correctamente");
}

// ============================================
// PASO 2: DATOS DE PRUEBA (1 LIBRO)
// ============================================
// ¿Por qué empezar con UN solo libro?
// - Es más fácil debuggear
// - Si algo falla, sabemos dónde está el problema
// - Una vez que funciona con 1, funciona con muchos

const libros = [
  {
    id: "1",
    titulo: "El Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    precio: 25,
    imagen:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    categoria: "Clásico",
    descripcion:
      "La obra maestra de la literatura española que narra las aventuras de un hidalgo manchego que enloquece leyendo libros de caballerías.",
  },
  {
    id: "2",
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    precio: 28,
    imagen:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    categoria: "Realismo Mágico",
    descripcion:
      "La historia épica de la familia Buendía a lo largo de siete generaciones en el mítico pueblo de Macondo.",
  },
  {
    id: "3",
    titulo: "1984",
    autor: "George Orwell",
    precio: 22,
    imagen:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    categoria: "Ciencia Ficción",
    descripcion:
      "Una distopía sobre un futuro totalitario donde el Gran Hermano controla cada aspecto de la vida de las personas.",
  },
  {
    id: "4",
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 18,
    imagen:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    categoria: "Infantil",
    descripcion:
      "Un cuento poético y filosófico sobre un pequeño príncipe que viaja por diferentes planetas aprendiendo sobre la vida.",
  },
  {
    id: "5",
    titulo: "Orgullo y Prejuicio",
    autor: "Jane Austen",
    precio: 24,
    imagen:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    categoria: "Romance",
    descripcion:
      "La historia de Elizabeth Bennet y el señor Darcy, una de las novelas románticas más famosas de la literatura inglesa.",
  },
  {
    id: "6",
    titulo: "El Señor de los Anillos",
    autor: "J.R.R. Tolkien",
    precio: 35,
    imagen:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop",
    categoria: "Fantasía",
    descripcion:
      "La épica aventura de Frodo Bolsón y la Comunidad del Anillo en su misión para destruir el Anillo Único.",
  },
  {
    id: "7",
    titulo: "Crónica de una Muerte Anunciada",
    autor: "Gabriel García Márquez",
    precio: 20,
    imagen:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    categoria: "Realismo Mágico",
    descripcion:
      "Una novela que reconstruye el asesinato de Santiago Nasar, un crimen que todos sabían que iba a ocurrir.",
  },
  {
    id: "8",
    titulo: "Harry Potter y la Piedra Filosofal",
    autor: "J.K. Rowling",
    precio: 26,
    imagen:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    categoria: "Fantasía",
    descripcion:
      "El inicio de la aventura del joven mago Harry Potter en su primer año en la escuela de magia Hogwarts.",
  },
  {
    id: "9",
    titulo: "La Sombra del Viento",
    autor: "Carlos Ruiz Zafón",
    precio: 27,
    imagen:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    categoria: "Misterio",
    descripcion:
      "Una historia de misterio ambientada en la Barcelona de posguerra sobre un libro maldito y su autor desaparecido.",
  },
  {
    id: "10",
    titulo: "El Código Da Vinci",
    autor: "Dan Brown",
    precio: 23,
    imagen:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    categoria: "Thriller",
    descripcion:
      "Un thriller de misterio que combina arte, historia y religión en una búsqueda por un secreto milenario.",
  },
  {
    id: "11",
    titulo: "Los Juegos del Hambre",
    autor: "Suzanne Collins",
    precio: 21,
    imagen:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    categoria: "Ciencia Ficción",
    descripcion:
      "En un futuro distópico, Katniss Everdeen debe luchar por su vida en los Juegos del Hambre televisados.",
  },
  {
    id: "12",
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    precio: 19,
    imagen:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    categoria: "Filosofía",
    descripcion:
      "La historia de un joven pastor andaluz que viaja en busca de un tesoro y descubre su leyenda personal.",
  },
];

// ¿Por qué un array?
// - Podemos tener muchos libros
// - Es fácil agregar más después
// - Podemos recorrerlo con forEach, map, etc.
/*
console.log("✅ PASO 2: Libro de prueba cargado");
console.log("Libro:", libros[0]);
console.log("¿Es un array?", Array.isArray(libros));
*/

// ============================================
// PASO 3: FUNCIÓN PARA MOSTRAR UN LIBRO
// ============================================
// ¿Por qué crear una función?
// - Podemos reutilizarla
// - El código queda organizado
// - Es más fácil de mantener

function mostrarLibro() {
  console.log("Paso 3: Iniciando mostrarLibros");

  // ¿Por qué verificar de nuevo?
  // - Las funciones pueden llamarse desde cualquier lugar
  // - Es una buena práctica verificar siempre

  if (!listaLibros) {
    console.log("Error: ListaLibros no existe");
    return; // Salir de la funcion si no existe
  }

  // ¿Por qué limpiar el contenedor?
  // - Si llamamos la función varias veces, no queremos duplicados
  // - Empezamos con un contenedor limpio

  listaLibros.innerHTML = "";
  // console.log("✅ Contenedor limpiado");

  // ¿Por qué usar forEach?
  // - Recorre todos los libros del array
  // - Crea una tarjeta para cada libro
  // - Es más eficiente que repetir código

  libros.forEach((libro) => {
    // console.log("📖 Mostrando libro:", libro.titulo);

    // ¿Por qué createElement?
    // - Crea un elemento HTML real
    // - Podemos manipularlo antes de agregarlo al DOM

    const card = document.createElement("DIV");
    card.className = "book-card";
    // ¿Por qué template literals (backticks)?
    // - Permiten usar ${} para insertar variables
    // - Es más legible que concatenar strings
    // - ES6+ moderno
    card.innerHTML = `
      <div class="image">
      <img src="${libro.imagen}" alt="${libro.titulo}">
      </div>
      <div class="book-info">
          <span class="book-category">
              ${libro.categoria}
          </span>
          <h3 class="book-title">${libro.titulo}</h3>
          <p class="book-autor">${libro.autor}</p>
          <p class="book-description">${libro.descripcion}</p>
          <div class="book-footer">
              <span class="book-price">$${libro.precio} USD</span>
              <button class="btn-agregar agregar-carrito" data-id="${libro.id}">
              <i class="fas fa-cart-plus"></i>
              Agregar
              </button>
          </div>
      </div>
    `;

    // ¿Por qué appendChild?
    // - Agrega el elemento al DOM
    // - Hace que aparezca en la página
    listaLibros.appendChild(card);
  });

  console.log(`Paso 3: ${libros.length} libros renderizados`);
  // console.log("👁️ VERIFICA: ¿Aparecen las tarjetas en la página?");
}

// ¿Por qué DOMContentLoaded?
// - Espera a que el HTML esté completamente cargado
// - Si ejecutamos antes, los elementos podrían no existir
// - Es más seguro que window.onload
document.addEventListener("DOMContentLoaded", () => {
  // console.log("DOM cargado, ejecutando mostrarLibros()");
  mostrarLibro();
});

// ============================================
// PASO 4: FUNCIÓN PARA AGREGAR LIBRO AL CARRITO
// ============================================
// ¿Por qué crear esta función?
// - Detecta el click en el botón "Agregar"
// - Busca el libro en el array de libros
// - Lo agrega al array del carrito
// - Actualiza el carrito visualmente

function agregarLibro(e) {
  e.preventDefault(); // Evita que se recargue la página si está en un form

  // ¿Por qué closest()?
  // - El click puede ser en el botón o en el icono dentro
  // - closest() busca el ancestro más cercano con esa clase
  const botonAgregar = e.target.closest(".agregar-carrito");

  // Si el click no fue en el botón, salir
  if (!botonAgregar) return;

  // Obtener el ID del libro
  const libroId = botonAgregar.dataset.id;
  console.log("🔍 Agregando libro ID:", libroId);

  // Buscar el libro en el array de libros
  const libroSeleccionado = libros.find((libro) => libro.id === libroId);

  if (!libroSeleccionado) {
    console.error("❌ ERROR: Libro no encontrado con ID:", libroId);
    return;
  }

  console.log("✅ Libro encontrado:", libroSeleccionado.titulo);

  // Verificar si el libro ya existe en el carrito
  const existe = articulosCarrito.some((libro) => libro.id === libroId);
  console.log("🔍 ¿Libro ya existe en carrito?", existe);

  if (existe) {
    console.log("➕ Libro existe, aumentando cantidad...");

    // Aumentar la cantidad
    articulosCarrito = articulosCarrito.map((libro) => {
      if (libro.id === libroId) {
        console.log(`📊 Cantidad anterior: ${libro.cantidad}`);
        libro.cantidad++;
        console.log(`📊 Cantidad nueva: ${libro.cantidad}`);
        return libro;
      }
      return libro;
    });

    console.log("✅ Cantidad aumentada");
  } else {
    console.log("🆕 Libro nuevo, agregando...");

    // Crear objeto para el carrito
    // IMPORTANTE: El precio debe ser un NÚMERO, no un string
    const infoLibro = {
      id: libroSeleccionado.id,
      titulo: libroSeleccionado.titulo,
      precio: libroSeleccionado.precio, // Ya es número del array
      imagen: libroSeleccionado.imagen,
      cantidad: 1,
    };

    // Agregar al array usando spread operator
    articulosCarrito = [...articulosCarrito, infoLibro];
    console.log("✅ Libro agregado al array");
  }

  console.log("📦 Carrito completo:", articulosCarrito);
  console.log("📊 Total items:", articulosCarrito.length);

  // Actualizar el carrito visualmente
  actualizarCarrito();
  console.log("✅ Carrito actualizado visualmente");
}

// Conectar la función al contenedor
if (listaLibros) {
  // Remover el listener anterior si existe
  listaLibros.removeEventListener("click", agregarLibro);
  // Agregar el nuevo listener
  listaLibros.addEventListener("click", agregarLibro);
  console.log("✅ PASO 4: Listener agregado para agregar libros");
}

// ============================================
// PASO 5: CREAR EL ARRAY DEL CARRITO
// ============================================
// ¿Por qué crear el array aquí?
// - cart.js solo maneja abrir/cerrar
// - Toda la lógica del carrito va en tienda.js
// - El array debe estar donde lo vamos a usar

let articulosCarrito = []; // Inicia vacío porque se va a ir llenando

console.log("✅ PASO 5: Array articulosCarrito creado");
console.log("Estado inicial:", articulosCarrito);
console.log("¿Es array?", Array.isArray(articulosCarrito));
console.log("Total items:", articulosCarrito.length);

// ============================================
// PASO 6: SELECCIONAR ELEMENTOS DEL CARRITO
// ============================================
// ¿Por qué seleccionar estos elementos?
// - Necesitamos el contenedor para mostrar los items
// - Necesitamos el total para mostrar el precio
// - Necesitamos el contador para mostrar la cantidad
// - Necesitamos el botón vaciar para limpiar todo

const contenedorCarrito = document.querySelector("#lista-carrito");
const totalElement = document.querySelector("#total");
const cartCount = document.querySelector("#cart-count");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

console.log("🔍 PASO 6: Verificando elementos del carrito...");
console.log("Contenedor carrito:", contenedorCarrito);
console.log("Total:", totalElement);
console.log("Contador:", cartCount);
console.log("Botón vaciar:", vaciarCarritoBtn);

// Verificar que todos existan
if (!contenedorCarrito) {
  console.error("❌ ERROR: #lista-carrito no encontrado");
}
if (!totalElement) {
  console.error("❌ ERROR: #total no encontrado");
}
if (!cartCount) {
  console.error("❌ ERROR: #cart-count no encontrado");
}
if (!vaciarCarritoBtn) {
  console.error("❌ ERROR: #vaciar-carrito no encontrado");
}

if (contenedorCarrito && totalElement && cartCount && vaciarCarritoBtn) {
  console.log("✅ PASO 6: Todos los elementos encontrados");
}

// ============================================
// PASO 7: FUNCIÓN PARA LIMPIAR HTML DEL CARRITO
// ============================================
// ¿Por qué crear esta función?
// - La usaremos cada vez que actualicemos el carrito
// - Es mejor tenerla separada para reutilizarla
// - Es más fácil de mantener

function limpiarCarritoHTML() {
  console.log("🔍 PASO 7: Limpiando HTML del carrito...");

  if (!contenedorCarrito) {
    console.error("❌ ERROR: contenedorCarrito no existe");
    return;
  }

  // ¿Por qué while en lugar de innerHTML = ''?
  // - Es más eficiente para muchos elementos
  // - Elimina uno por uno hasta que no quede ninguno
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }

  console.log("✅ PASO 7: HTML limpiado");
  console.log("Hijos restantes:", contenedorCarrito.children.length);
}

// ============================================
// PASO 8: FUNCIÓN PARA MOSTRAR ITEMS EN EL CARRITO
// ============================================
// ¿Por qué crear esta función?
// - Toma el array articulosCarrito y crea el HTML
// - Se llamará cada vez que agreguemos o eliminemos un item
// - Mantiene el carrito actualizado visualmente

function carritoHTML() {
  console.log("🔍 PASO 8: Mostrando items del carrito...");
  console.log("Items en array:", articulosCarrito.length);

  if (!contenedorCarrito) {
    console.error("❌ ERROR: contenedorCarrito no existe");
    return;
  }

  // Limpiar primero
  limpiarCarritoHTML();

  // Si está vacío, mostrar mensaje
  if (articulosCarrito.length === 0) {
    console.log("ℹ️ Carrito vacío, mostrando mensaje");
    const mensajeVacio = document.createElement("li");
    mensajeVacio.className = "carrito-vacio";
    mensajeVacio.textContent = "Tu carrito está vacío";
    contenedorCarrito.appendChild(mensajeVacio);
    return;
  }

  // Recorrer cada item del carrito
  articulosCarrito.forEach((item, index) => {
    console.log(`📦 Renderizando item ${index + 1}:`, item.titulo);

    // ¿Por qué destructuring?
    // - Extrae las propiedades del objeto
    // - Es más legible que escribir item.imagen, item.titulo, etc.
    const { imagen, titulo, precio, id, cantidad } = item;

    // Crear elemento li
    const row = document.createElement("li");
    row.className = "carrito-item";

    // Crear HTML del item
    row.innerHTML = `
            <div class="item-imagen">
                <img src="${imagen}" alt="${titulo}">
            </div>
            <div class="item-info">
                <h4 class="item-titulo">${titulo}</h4>
                <p class="item-precio">Precio: $${precio}</p>
                <p class="item-cantidad">Cantidad: ${cantidad}</p>
            </div>
            <button class="borrar-item" data-id="${id}" aria-label="Eliminar">
                <i class="fas fa-times"></i>
            </button>
        `;

    // Agregar a la lista
    contenedorCarrito.appendChild(row);
    console.log(`✅ Item ${index + 1} agregado al HTML`);
  });

  console.log("✅ PASO 8: Carrito HTML actualizado");
  console.log("Total items mostrados:", contenedorCarrito.children.length);
}

// ============================================
// PASO 9: FUNCIÓN PARA CALCULAR Y MOSTRAR EL TOTAL
// ============================================
// ¿Por qué crear esta función?
// - Suma precio * cantidad de cada item
// - Actualiza el elemento HTML con el total
// - Se llamará cada vez que cambie el carrito

function actualizarTotal() {
  console.log("🔍 PASO 9: Calculando total...");

  if (!totalElement) {
    console.error("❌ ERROR: totalElement no existe");
    return;
  }

  // ¿Por qué reduce()?
  // - Recorre el array y acumula un valor
  // - Inicia en 0 (segundo parámetro)
  // - Por cada item, suma: precio * cantidad
  const total = articulosCarrito.reduce((suma, item) => {
    const subtotal = item.precio * item.cantidad;
    console.log(
      `💰 ${item.titulo}: $${item.precio} x ${item.cantidad} = $${subtotal}`,
    );
    return suma + subtotal;
  }, 0); // 0 es el valor inicial

  // Actualizar el HTML
  totalElement.textContent = total.toFixed(2);

  console.log("✅ PASO 9: Total calculado: $", total.toFixed(2));
  console.log("Total en HTML:", totalElement.textContent);
}

// Probar manualmente:
// actualizarTotal();

// ============================================
// PASO 10: FUNCIÓN PARA ACTUALIZAR EL CONTADOR
// ============================================
// ¿Por qué crear esta función?
// - Suma todas las cantidades de los items
// - Muestra el número en el icono del carrito
// - Se llamará cada vez que cambie el carrito

function actualizarContador() {
  console.log("🔍 PASO 10: Actualizando contador...");

  if (!cartCount) {
    console.error("❌ ERROR: cartCount no existe");
    return;
  }

  // Calcular total de items (sumando cantidades)
  const totalItems = articulosCarrito.reduce((suma, item) => {
    return suma + item.cantidad;
  }, 0);

  // Actualizar el HTML
  cartCount.textContent = totalItems;

  console.log("✅ PASO 10: Contador actualizado:", totalItems);
  console.log("Contador en HTML:", cartCount.textContent);
}

// Probar manualmente:
// actualizarContador();

// ============================================
// PASO 11: FUNCIÓN PARA ACTUALIZAR TODO EL CARRITO
// ============================================
// ¿Por qué crear esta función?
// - Actualiza HTML, total y contador de una vez
// - Es más fácil llamar una función que tres
// - Mantiene todo sincronizado

function actualizarCarrito() {
  console.log("🔄 Actualizando carrito completo...");

  carritoHTML(); // Actualizar el HTML
  actualizarTotal(); // Actualizar el total
  actualizarContador(); // Actualizar el contador

  console.log("✅ Carrito actualizado completamente");
}

// Probar manualmente:
// actualizarCarrito();

// ============================================
// PASO 12: FUNCIÓN PARA ELIMINAR UN ITEM
// ============================================
// ¿Por qué crear esta función?
// - Se llama cuando el usuario hace click en el botón X
// - Elimina el item del array
// - Actualiza el carrito visualmente

function eliminarItem(e) {
  e.preventDefault();

  // ¿Por qué stopPropagation()?
  // - Detiene la propagación del evento hacia elementos padres
  // - Evita que el click active otros listeners (como cerrar el carrito)
  // - Es esencial para que el carrito no se cierre al eliminar
  e.stopPropagation();

  // Verificar si el click fue en el boton eliminar
  const botonEliminar = e.target.closest(".borrar-item");

  // Si no fue en el boton, salir
  if (!botonEliminar) return;

  //Obtener el ID del item
  const itemId = botonEliminar.dataset.id;
  console.log("Eliminando item ID:", itemId);

  // Filtrar: Mantener solo los items que no tiene ese ID
  articulosCarrito = articulosCarrito.filter((item) => item.id !== itemId);

  console.log("✅ Item eliminado. Items restantes:", articulosCarrito.length);

  // Actualizar el carrito
  actualizarCarrito();
}

// ============================================
// PASO 13: FUNCIÓN PARA VACIAR EL CARRITO
// ============================================
// ¿Por qué crear esta función?
// - Se llama cuando el usuario hace click en "Vaciar Carrito"
// - Limpia todo el array
// - Actualiza el carrito visualmente

function vaciarCarrito(e) {
    // Si viene un evento (click), prevenir comportamiento por defecto
    if (e) {
        e.preventDefault();
        // ¿Por qué stopPropagation()?
        // - Detiene la propagación del evento
        // - Evita que el carrito se cierre al vaciar
        e.stopPropagation();
    }
    
    console.log("🗑️ Vaciando carrito completo...");
    
    // Limpiar el array
    articulosCarrito = [];
    
    // Actualizar el carrito
    actualizarCarrito();
    
    console.log("✅ Carrito vaciado completamente");
}

// ============================================
// PASO 14: CONECTAR EVENT LISTENERS
// ============================================
// ¿Por qué necesitamos estos listeners?
// - Sin ellos, los botones no hacen nada
// - Conectan las funciones a los eventos del usuario

// Listener para eliminar items
// ¿Por qué delegación de eventos?
// - Los botones se crean dinámicamente en carritoHTML()
// - Si agregamos el listener directamente, no funcionaría
// - Al ponerlo en el contenedor padre, funciona siempre
// Listener para eliminar items
if (contenedorCarrito) {
    contenedorCarrito.addEventListener("click", eliminarItem);
    console.log("✅ Listener agregado para eliminar items");
}

// Listener para vaciar carrito
if (vaciarCarritoBtn) {
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
    console.log("✅ Listener agregado para vaciar carrito");
}
