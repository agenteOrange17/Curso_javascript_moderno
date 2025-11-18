/**
 * DOMContentLoaded: Esperamos a que el HTML esté completamente cargado
 * antes de ejecutar el JavaScript. Esto evita errores al intentar acceder
 * a elementos que aún no existen en el DOM.
 */
document.addEventListener("DOMContentLoaded", function () {
  
  /* ============================================================
     1. CAPTURA DE ELEMENTOS DEL DOM
     Guardamos referencias a todos los elementos HTML que vamos
     a manipular. Esto evita buscarlos repetidamente (mejor rendimiento)
     y hace el código más legible y mantenible.
     ============================================================ */
  const formulario = document.getElementById("form-generador");
  const inputLongitud = document.getElementById("longitud");
  const chkMayusculas = document.getElementById("mayusculas");
  const chkNumeros = document.getElementById("numeros");
  const chkSimbolos = document.getElementById("simbolos");
  const contResultado = document.getElementById("resultado");
  const btnCopiar = document.getElementById('copiar');

  /* ============================================================
     2. CONJUNTOS DE CARACTERES
     Definimos los diferentes tipos de caracteres que pueden formar
     parte de la contraseña. Los almacenamos como arrays para poder
     acceder a cada carácter por índice y facilitar la selección aleatoria.
     .split('') convierte el string en un array de caracteres individuales.
     ============================================================ */
  const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz".split("");
  const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const numeros = "0123456789".split("");
  const simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>/?".split("");

  /* ============================================================
     3. ESTADO DE LA APLICACIÓN
     Guardamos la última contraseña generada en una variable.
     Esto es necesario para la funcionalidad de copiar al portapapeles,
     ya que no queremos copiar directamente del DOM (puede tener
     formato HTML o espacios extras).
     ============================================================ */
  let ultimaPassword = '';

  /* ============================================================
     4. DEBUGGING Y VERIFICACIÓN
     Estos console.log nos ayudan a verificar durante el desarrollo
     que los arrays de caracteres se crearon correctamente y que
     el script se inicializó sin problemas.
     ============================================================ */
  console.log("Generador iniciado...");
  console.log("Letras minúsculas:", letrasMinusculas);
  console.log("Letras mayúsculas:", letrasMayusculas);
  console.log("Números:", numeros);
  console.log("Símbolos:", simbolos);

  /* ============================================================
     5. EVENTO PRINCIPAL: GENERAR CONTRASEÑA
     Escuchamos el evento 'submit' del formulario. Esto se activa
     cuando el usuario presiona Enter o hace clic en el botón de envío.
     ============================================================ */
  formulario.addEventListener('submit', function(e){
    
    /**
     * preventDefault(): Evita que el formulario recargue la página
     * (comportamiento por defecto de los formularios HTML). Necesitamos
     * esto para manejar la generación con JavaScript sin perder el estado.
     */
    e.preventDefault();

    /**
     * CAPTURA DE OPCIONES DEL USUARIO
     * - Number() convierte el valor del input (string) a número para poder
     *   usarlo en operaciones matemáticas y comparaciones.
     * - .checked retorna un booleano (true/false) indicando si el checkbox
     *   está marcado. Es la forma estándar de leer el estado de checkboxes.
     */
    const longitud = Number(inputLongitud.value);
    const incluirMayus = chkMayusculas.checked;
    const incluirNum = chkNumeros.checked;
    const incluirSimb = chkSimbolos.checked;

    /**
     * VALIDACIÓN DE LONGITUD
     * Verificamos que la longitud sea válida antes de proceder:
     * - isNaN() detecta si el valor no es un número válido
     * - longitud < 4 asegura un mínimo de seguridad en la contraseña
     * Si falla, alertamos al usuario y detenemos la ejecución con return.
     */
    if(isNaN(longitud) || longitud < 4){
        alert('La longitud mínima es de 4 caracteres');
        return;
    }

    /**
     * CONSTRUCCIÓN DEL POOL DE CARACTERES
     * Creamos un array con todos los caracteres disponibles según
     * las opciones seleccionadas por el usuario.
     * 
     * [...letrasMinusculas] usa el spread operator para crear una
     * COPIA del array original. Esto es importante porque vamos a
     * modificar este array y no queremos alterar el original.
     * 
     * Siempre incluimos minúsculas como base para garantizar que
     * siempre haya al menos un tipo de carácter disponible.
     */
    let caracteresDisponibles = [...letrasMinusculas];
    
    /**
     * CONCATENACIÓN CONDICIONAL
     * Usamos .concat() para agregar arrays completos al pool de caracteres.
     * Solo agregamos los tipos de caracteres que el usuario seleccionó
     * mediante los checkboxes. concat() no modifica los arrays originales,
     * sino que retorna un nuevo array combinado, por eso reasignamos
     * el resultado a la variable.
     */
    if(incluirMayus) caracteresDisponibles = caracteresDisponibles.concat(letrasMayusculas);
    if(incluirNum) caracteresDisponibles = caracteresDisponibles.concat(numeros);
    if(incluirSimb) caracteresDisponibles = caracteresDisponibles.concat(simbolos);

    /**
     * VALIDACIÓN DE SEGURIDAD
     * Aunque es poco probable (porque siempre incluimos minúsculas),
     * verificamos que haya caracteres disponibles. Esta es una buena
     * práctica de programación defensiva: prevenir errores antes de que ocurran.
     */
    if(caracteresDisponibles.length === 0){
        alert('Selecciona al menos un tipo de carácter');
        return;    
    }

    /**
     * GENERACIÓN ALEATORIA DE LA CONTRASEÑA
     * Usamos un bucle for tradicional porque necesitamos ejecutar
     * una acción un número exacto de veces (longitud de la contraseña).
     * 
     * Inicializamos password como string vacío y vamos concatenando
     * caracteres aleatorios uno por uno.
     */
    let password = '';
    for(let i = 0; i < longitud; i++){
        /**
         * SELECCIÓN ALEATORIA:
         * - Math.random() genera un número decimal entre 0 y 0.999...
         * - Multiplicamos por .length para escalar al rango del array
         * - Math.floor() redondea hacia abajo para obtener un índice válido
         * 
         * Ejemplo: si tenemos 52 caracteres disponibles:
         * Math.random() * 52 = número entre 0 y 51.999...
         * Math.floor() = índice entre 0 y 51 (válido para el array)
         */
        const indice = Math.floor(Math.random() * caracteresDisponibles.length);
        
        /**
         * Accedemos al carácter en la posición aleatoria y lo agregamos
         * a nuestra contraseña usando el operador += (concatenación).
         */
        password += caracteresDisponibles[indice];
    }

    /**
     * ACTUALIZACIÓN DEL ESTADO Y LA UI
     * - Guardamos la contraseña en la variable para usarla en la función copiar
     * - textContent actualiza el texto visible en el DOM de forma segura
     *   (a diferencia de innerHTML, no interpreta HTML, previniendo XSS)
     * - console.log para debugging y verificar que se generó correctamente
     */
    ultimaPassword = password;
    contResultado.textContent = password;
    console.log('Contraseña generada:', password);

  });

  /* ============================================================
     6. FUNCIONALIDAD DE COPIAR AL PORTAPAPELES
     Permite al usuario copiar la contraseña generada con un solo clic.
     Esto mejora significativamente la experiencia del usuario (UX).
     ============================================================ */
  btnCopiar.addEventListener('click', function(){
    
    /**
     * VALIDACIÓN: Verificamos que exista una contraseña antes de copiar.
     * !ultimaPassword es true si la variable está vacía o es undefined.
     * Esto previene intentar copiar un valor vacío o indefinido.
     */
    if(!ultimaPassword){
        alert('Primero genera una contraseña');
        return;
    }

    /**
     * CLIPBOARD API
     * navigator.clipboard es la API moderna del navegador para
     * interactuar con el portapapeles. Es asíncrona y retorna una Promise.
     * 
     * .writeText() copia texto plano al portapapeles. Es más seguro
     * y confiable que el método antiguo (document.execCommand('copy')).
     * 
     * IMPORTANTE: Esta API requiere HTTPS o localhost por seguridad.
     */
    navigator.clipboard.writeText(ultimaPassword)
        /**
         * .then() se ejecuta cuando la copia fue exitosa.
         * Mostramos un mensaje de confirmación al usuario para
         * darle feedback de que la acción se completó.
         */
        .then(() => {
            mostrarMensaje('Contraseña copiada al portapapeles ✓');
        })
        /**
         * .catch() captura cualquier error que pueda ocurrir
         * (ej: permisos denegados, navegador antiguo, no HTTPS).
         * Registramos el error en consola para debugging.
         */
        .catch(err => {
            console.error('Error al copiar:', err);
            alert('No se pudo copiar. Intenta manualmente.');
        });
  });

  /* ============================================================
     7. FUNCIÓN AUXILIAR: MOSTRAR MENSAJE TEMPORAL
     Muestra un mensaje de confirmación que desaparece automáticamente.
     Esto proporciona feedback visual al usuario sin requerir interacción.
     ============================================================ */
  function mostrarMensaje(texto){
    
    /**
     * CREACIÓN DINÁMICA DE ELEMENTO
     * createElement('p') crea un nuevo elemento <p> en memoria
     * (aún no está visible en la página). Usamos <p> porque es
     * semánticamente correcto para mostrar un mensaje de texto.
     */
    const mensaje = document.createElement('p');
    
    /**
     * CONFIGURACIÓN DEL CONTENIDO
     * textContent es más seguro que innerHTML cuando solo mostramos texto,
     * ya que previene inyección de código malicioso (XSS).
     */
    mensaje.textContent = texto;
    
    /**
     * ESTILIZACIÓN INLINE
     * Aplicamos estilos directamente con JavaScript para este elemento
     * temporal. Usamos .style porque no queremos crear una clase CSS
     * solo para este mensaje efímero. Los estilos inline tienen la
     * mayor especificidad y garantizan que se apliquen.
     */
    mensaje.style.color = 'green';
    mensaje.style.fontWeight = 'bold';
    mensaje.style.marginTop = '10px';
    
    /**
     * INSERCIÓN EN EL DOM
     * insertAdjacentElement('afterend', elemento) inserta el mensaje
     * inmediatamente DESPUÉS del contenedor de resultado.
     * Es más preciso que appendChild() porque podemos controlar
     * exactamente dónde aparece el mensaje.
     * 
     * Opciones de insertAdjacentElement:
     * - 'beforebegin': Antes del elemento
     * - 'afterbegin': Como primer hijo
     * - 'beforeend': Como último hijo  
     * - 'afterend': Después del elemento (el que usamos)
     */
    contResultado.insertAdjacentElement('afterend', mensaje);

    /**
     * ELIMINACIÓN AUTOMÁTICA CON TIMEOUT
     * setTimeout() ejecuta una función después de un tiempo específico
     * (3000 ms = 3 segundos). Esto crea el efecto de mensaje temporal.
     * 
     * .remove() elimina completamente el elemento del DOM, liberando
     * memoria y manteniendo limpia la interfaz. Es preferible a solo
     * ocultar el elemento (display: none).
     */
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
  }
});