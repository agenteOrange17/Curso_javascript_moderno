/**
 * DOMContentLoaded: Esperamos a que el HTML esté completamente cargado
 * antes de ejecutar el JavaScript. Esto evita errores al intentar acceder
 * a elementos que aún no existen en el DOM.
 */
document.addEventListener("DOMContentLoaded", function () {
  
  /* ============================================================
     1. CAPTURA DE ELEMENTOS DEL DOM
     Guardamos referencias a los elementos HTML que vamos a manipular.
     Esto evita buscarlos repetidamente en el DOM (mejor rendimiento)
     y hace el código más legible.
     ============================================================ */
     
  const formulario = document.getElementById("formulario-alumno");
  const inputNombre = document.getElementById("nombre");
  const inputCalificacion = document.getElementById("calificacion");
  const contLista = document.getElementById("lista-alumnos");
  const contPromedio = document.getElementById("promedio");
  const btnLimpiar = document.getElementById("limpiar");

  /* ============================================================
     2. ESTADO DE LA APLICACIÓN
     Inicializamos un array vacío para almacenar los datos de los alumnos.
     Este array actúa como nuestra "base de datos" en memoria.
     ============================================================ */
  let alumnos = [];

  /* ============================================================
     3. MENSAJE DE CONFIRMACIÓN
     Este console.log nos ayuda a verificar que el script se cargó
     correctamente. Útil para debugging durante el desarrollo.
     ============================================================ */
  console.log("Calculadora iniciada");

  /* ============================================================
     4. EVENTO PRINCIPAL: AGREGAR ALUMNO
     Escuchamos el evento 'submit' del formulario para capturar
     los datos cuando el usuario presiona Enter o hace clic en enviar.
     ============================================================ */
  formulario.addEventListener("submit", function (e) {
    
    /**
     * e.preventDefault(): Evita que el formulario recargue la página
     * (comportamiento por defecto). Necesitamos esto para manejar
     * los datos con JavaScript sin perder el estado de la aplicación.
     */
    e.preventDefault();

    /**
     * Obtenemos y limpiamos los valores del formulario:
     * - .trim() elimina espacios al inicio y final (evita nombres como "  Juan  ")
     * - Number() convierte el string a número para hacer cálculos matemáticos
     */
    const nombre = inputNombre.value.trim();
    const calificacion = Number(inputCalificacion.value);

    /**
     * VALIDACIÓN: Verificamos que los datos sean correctos antes de procesarlos.
     * - nombre === '' : evita agregar alumnos sin nombre
     * - isNaN() : detecta si la calificación no es un número válido
     * Si hay error, mostramos un alert y detenemos la ejecución con return.
     */
    if (nombre === "" || isNaN(calificacion)) {
      alert("Por favor completar todos los campos");
      return;
    }

    /**
     * LÓGICA DE NEGOCIO: Determinamos si el alumno aprobó.
     * Usamos una constante booleana (true/false) para facilitar
     * la lectura del código y reutilizar esta información.
     */
    const aprobo = calificacion >= 60;

    /**
     * CREACIÓN DEL OBJETO: Agrupamos toda la información del alumno
     * en un objeto. Esto mantiene los datos organizados y relacionados.
     * Usamos shorthand property (nombre en vez de nombre: nombre).
     */
    const alumno = {
      nombre,
      calificacion,
      aprobo,
    };

    /**
     * ACTUALIZACIÓN DEL ESTADO: Agregamos el nuevo alumno al array.
     * .push() añade elementos al final del array, manteniendo el orden
     * cronológico de registro.
     */
    alumnos.push(alumno);

    /**
     * DEBUGGING: Mostramos en consola para verificar que los datos
     * se están guardando correctamente durante el desarrollo.
     */
    console.log("Alumno agregado: ", alumno);

    /**
     * ACTUALIZACIÓN DE LA INTERFAZ: Llamamos a las funciones que
     * refrescan lo que el usuario ve en pantalla. Esto aplica el
     * patrón "Single Source of Truth" - los datos están en el array
     * y la UI se regenera desde ahí.
     */
    renderAlumnos();
    calcularPromedio();

    console.log("Lista actual:", alumnos);

    /**
     * LIMPIEZA DEL FORMULARIO: Vaciamos los campos para que el usuario
     * pueda agregar un nuevo alumno fácilmente. Mejora la UX.
     */
    inputNombre.value = "";
    inputCalificacion.value = "";
    
    /* Opcional: Regresamos el foco al primer campo para agilizar la captura */
    inputNombre.focus();
  });

  /* ============================================================
     5. FUNCIÓN DE RENDERIZADO
     Esta función actualiza la lista visual de alumnos en el HTML.
     La separamos en una función para poder reutilizarla cada vez
     que el array de alumnos cambie (agregar, eliminar, limpiar).
     ============================================================ */
  function renderAlumnos() {
    
    /**
     * CASO ESPECIAL: Si no hay alumnos, mostramos un mensaje
     * en lugar de dejar el contenedor vacío. Esto mejora la UX
     * al darle feedback visual al usuario.
     */
    if (alumnos.length === 0) {
      contLista.innerHTML = "<p>No hay alumnos registrados.</p>";
      return; // Detenemos la ejecución aquí
    }

    /**
     * LIMPIEZA PREVIA: Vaciamos el contenedor antes de regenerar
     * todo el contenido. Esto evita duplicados y asegura que la UI
     * refleje exactamente el estado actual del array.
     */
    contLista.innerHTML = "";

    /**
     * ITERACIÓN Y CREACIÓN DINÁMICA: Recorremos cada alumno del array
     * y creamos un elemento HTML por cada uno. .forEach() es ideal
     * cuando necesitamos hacer algo con cada elemento sin crear un nuevo array.
     */
    alumnos.forEach((alumno) => {
      
      /**
       * createElement: Creamos elementos del DOM de forma programática.
       * Usamos DIV como contenedor para cada alumno porque es un
       * elemento semántico neutro y flexible para estilos.
       */
      const div = document.createElement("DIV");
      
      /**
       * Agregamos una clase CSS para poder estilizar estos elementos.
       * .add() es más seguro que manipular className directamente.
       */
      div.classList.add("alumno");

      /**
       * RENDERIZADO CONDICIONAL: Asignamos clases y texto diferentes
       * según si el alumno aprobó o no. Esto permite aplicar estilos
       * CSS distintos (ej: verde para aprobado, rojo para reprobado).
       */
      const clase = alumno.aprobo ? "Aprobado" : "Reprobado";
      const estado = alumno.aprobo ? "Aprobado" : "Reprobado";

      /**
       * TEMPLATE LITERALS: Usamos backticks (`) para crear HTML dinámico.
       * Esto es más legible que concatenar strings con +, y nos permite
       * insertar variables con ${variable}.
       */
      div.innerHTML = `
            <strong>${alumno.nombre}</strong> - 
            Calificación: ${alumno.calificacion}
            <span class="${clase}">${estado}</span>
      `;

      /**
       * INSERCIÓN EN EL DOM: Agregamos el elemento creado al contenedor.
       * .appendChild() añade el elemento al final, manteniendo el orden.
       */
      contLista.appendChild(div);
    });
  }

  /* ============================================================
     6. FUNCIÓN DE CÁLCULO DE PROMEDIO
     Calcula el promedio aritmético de todas las calificaciones
     y lo muestra en pantalla. Separamos esta lógica en una función
     para mantener el código organizado y reutilizable.
     ============================================================ */
  function calcularPromedio() {
    
    /**
     * VALIDACIÓN: Si no hay alumnos, no tiene sentido calcular
     * un promedio. Mostramos un mensaje apropiado al contexto.
     */
    if (alumnos.length === 0) {
      contPromedio.textContent = "No hay promedio calculado aún";
      return;
    }

    /**
     * ACUMULADOR: Inicializamos una variable en 0 para ir
     * sumando todas las calificaciones. Este es el patrón
     * clásico de acumulación en programación.
     */
    let suma = 0;
    
    /**
     * SUMA ITERATIVA: Recorremos cada alumno y sumamos su calificación.
     * Usamos += que es equivalente a: suma = suma + alumno.calificacion
     */
    alumnos.forEach((alumno) => {
      suma += alumno.calificacion;
    });

    /**
     * CÁLCULO DEL PROMEDIO: Dividimos la suma entre la cantidad de alumnos.
     * .toFixed(2) limita el resultado a 2 decimales para mejor legibilidad
     * (ej: 85.33 en lugar de 85.333333333).
     */
    const promedio = (suma / alumnos.length).toFixed(2);

    /**
     * ACTUALIZACIÓN DE LA UI: Mostramos el promedio al usuario.
     * textContent es más seguro que innerHTML cuando solo insertamos texto.
     */
    contPromedio.textContent = `Promedio general: ${promedio}`;
  }

  /* ============================================================
     7. EVENTO DE LIMPIEZA
     Permite borrar todos los alumnos de la lista. Incluimos
     validaciones y confirmación para evitar pérdidas accidentales.
     ============================================================ */
  btnLimpiar.addEventListener("click", function () {
    
    /**
     * VALIDACIÓN: Si ya no hay alumnos, informamos al usuario
     * en lugar de mostrar una confirmación innecesaria.
     */
    if (alumnos.length === 0) {
      alert("No hay alumnos para eliminar");
      return;
    }

    /**
     * CONFIRMACIÓN: confirm() muestra un diálogo nativo del navegador.
     * Esto previene que el usuario borre accidentalmente todos los datos.
     * Retorna true si acepta, false si cancela.
     */
    const confirmar = confirm("¿Seguro que deseas borrar todos los alumnos?");
    
    /**
     * Si el usuario cancela (!confirmar), detenemos la ejecución.
     * return; es una forma limpia de salir de la función.
     */
    if (!confirmar) return;

    /**
     * REINICIO DEL ESTADO: Vaciamos el array asignándole un array nuevo.
     * Esto borra todas las referencias a los objetos de alumnos anteriores.
     */
    alumnos = [];

    /**
     * SINCRONIZACIÓN DE LA UI: Actualizamos la pantalla para reflejar
     * que ya no hay alumnos. Reutilizamos las funciones existentes
     * en lugar de duplicar código.
     */
    renderAlumnos();
    calcularPromedio();

    /**
     * LOG INFORMATIVO: Confirmamos en consola que la operación
     * se completó exitosamente.
     */
    console.log("Lista de alumnos vaciada.");
  });
});