Conceptos Clave de Functional JS

- Inmutabilidad - Los datos no deben modificarse (Utilizar Const casi siempre)
- Separar funciones de datos
- Firs-class functions

Inmmutabilidad
- Un dato no puede cambiarse, no puedes tener:

let cliente = "Elliot";
cliente = "Tyrell"


Separar Funciones de datos
Se utiliza mucho funciones que retornan un nuevo dato o Array Methods, de esa forma tendremos funciones que entregan un resulado nuevo pero nunca modifican los datos


First-Class Function

Es poder crear funciones que parezcan cualquier variable como lo es function expression
Ejemplo:

const suma = function(a, b) {
    return a + b;
}

const resultado = suma;




//Closure
Un closure en JavaScript es una función que recuerda y tiene acceso a las variables del entorno léxico en el cual fue creada, incluso después de que el entorno de ejecución externo haya finalizado. En otras palabras, un closure es una función que puede recordar y acceder a variables y argumentos de su función externa, incluso si la función externa ha terminado de ejecutarse. Esto permite a los desarrolladores mantener un estado privado y encapsular la lógica de programación, facilitando técnicas como la programación funcional y patrones como módulos o factories.


//Curring y Partial
Curring en JavaScript es una técnica de transformar una función que toma múltiples argumentos en una serie de funciones que toman un solo argumento. Cada función devuelve otra función que toma el siguiente argumento, y esto continúa hasta que todos los argumentos han sido proporcionados. Esto permite la creación de funciones más específicas a partir de una función más general.

Partial Application se refiere a la técnica de fijar un número de argumentos para una función, creando una nueva función que tiene algunos de los argumentos pre-establecidos. Esto es útil cuando tienes una función que espera varios argumentos y quieres crear una nueva función que ya tiene algunos de estos argumentos fijados por adelantado.