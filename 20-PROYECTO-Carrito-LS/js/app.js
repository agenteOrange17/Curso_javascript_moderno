//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
let articulosCarrito = []; //Inicia vacio por que se va ir llenando
 
//Creamos la funcion para cargar todos los listener
cargarEventListeners();

function cargarEventListeners() {
  // Cuando agregas un curso presionando agregar al carrito
  listaCursos.addEventListener("click", agregarCurso);

  //Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso); //Cuando es mucho codigo separarlo

  document.getElementById("cerrar-carrito").addEventListener("click", () => {
    ocultarCarrito();
  });


  
  //Muestra los cursos del local Storage
  document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito') ) || [];

    //Mandamos a llamar carrito
    carritoHTML();
  })

  // Vaciar el Carrito
  vaciarCarritoBtn.addEventListener("click", () => {
    //Cuando es poco codigo es mejor hacer esto
    articulosCarrito = []; //Reseeteamos el arreglo

    //Limpiamos el HTML
    limpiartHTML(); // Eliminamos todo el HTML
  });
}

//Funciones
function agregarCurso(e) {
  e.preventDefault(); //Evita que se refresque la pagina
  if (e.target.classList.contains("agregar-carrito")) {
    //creamos la variable que contiene los datos del curso
    const cursoSeleccionado = e.target.parentElement.parentElement;

    leerDatosCurso(cursoSeleccionado);
  }
}

//Elimina un curso del carrito
function eliminarCurso(e) {
  if (e.target.classList.contains("borrar-curso")) {
    const cursoId = e.target.getAttribute("data-id");

    //Elimina del arreglo de articulosCarrito por el data-id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId); //Iteramos por cada arreglo

    //cargar nuevamente el html
    carritoHTML(); //Iterar sobre el carrito e iterar sobre el HTML
  }
}

//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
  // console.log(curso);

  //Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //Revisa si un elemento ya existe en el carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    //actualizamos la cantidad
    const cursos = articulosCarrito.map((curso) => {
      //Va ir iterando en el carrito hasta encontrar el que cupla
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso; //Este retorna el objeto actualizado
      } else {
        return curso; // Este retorna el objeto que no son los duplicados
      }
    });
    articulosCarrito = [...cursos]; //Con el spread operator tomamos una copia para no perder la referencia de los cursos ya agregados
  } else {
    //Agrega elementos al arreglo del carrito
    articulosCarrito = [...articulosCarrito, infoCurso]; //Con el spread operator tomamos una copia para no perder la referencia de los cursos ya agregados
  }

  console.log(articulosCarrito);

  //Mandamos a llamar el carritoHTML
  carritoHTML();
}


//Muestra el carrito de compras en el HTML
function carritoHTML() {
  //Limpiar el HTML para posterior generar el HTML
  limpiartHTML();

  //Recorremos el carrito y genera el html
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, id, cantidad } = curso;
    //Por cada elemento en el carrito
    const row = document.createElement("li");
    row.innerHTML = `
        <div class="item-box">
        <div class="item-cart">
                <img src="${imagen}" width="100">
                <h4>${titulo}</h4>
            </div>
            <div class="item-cart">
                <p class="precio">Precio: ${precio}</p>
                <p class="cantidad">Cantidad: ${cantidad}</p>
                </div>
                </div>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
        `;

    //Agrega el html del carrito en el tbody
    contenedorCarrito.appendChild(row);
  });


  //Agregar el carrito de compras al Storage
  sincronizarStorage();
}

//Funcion de sincronizar
function sincronizarStorage(){
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiartHTML() {
  //Forma lenta
  //contenedorCarrito.innerHTML = '';

  //forma rapida
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
  //Lo que hace el codigo supon
  /*
    
    Estamos revisando mientras que haya un hijo la condicion se cumple por lo tanto el elemento padre elimina un hijo y vuelve a repetir hasta que ya no haya un hijo se deja de ejecutar
    <div> //Padre
        <p>1</p> hijo
        <p>2</p> hijo
        <p>3</p> hijo
    </div>
    */
}

// Función para mostrar el carrito en la barra lateral
function mostrarCarrito() {
  carrito.style.right = "0"; // Muestra el carrito ajustando el right a 0 para que aparezca en pantalla
}

// Función para ocultar el carrito en la barra lateral
function ocultarCarrito() {
  carrito.style.right = "-350px"; // Oculta el carrito ajustando el right a -300px para que desaparezca fuera del borde derecho de la pantalla
}

// Evento click en el botón del carrito para mostrar u ocultar el carrito
document.getElementById("img-carrito").addEventListener("click", () => {
  const carritoVisible = carrito.style.right === "0px";
  if (carritoVisible) {
    ocultarCarrito();
  } else {
    mostrarCarrito();
  }
});

// Llamada a la función para cargar los listeners
cargarEventListeners();
