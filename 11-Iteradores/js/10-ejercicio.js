const estudiantes = [
    { nombre: 'Juan', edad: 20, calificacion: 85 },
    { nombre: 'María', edad: 19, calificacion: 92 },
    { nombre: 'Pedro', edad: 21, calificacion: 78 },
    { nombre: 'Ana', edad: 20, calificacion: 95 }
];

/* PASO 2: 
    Recorre los estudiantes y muestra cada uno: "Nombre: [nombre] - Edad: [edad] - Calificación: [calificacion]"
    Calcula y muestra el promedio de calificaciones */

for(let i= 0; i < estudiantes.length; i++){
    console.log(`Nombre: ${estudiantes[i].nombre} - Edad: ${estudiantes[i].edad} - Calificación: ${estudiantes[i].calificacion}`);
}

let sumaCalificaciones = 0;
for(let i = 0; i < estudiantes.length; i++){
    sumaCalificaciones += estudiantes[i].calificacion;    
}
const promedio = sumaCalificaciones / estudiantes.length;
console.log(`Promedio de calificaciones: ${promedio}`);

/* PASO 3 Usando forEach:
    Muestra solo los nombres de los estudiantes en formato: "Estudiante: [nombre]"
*/
estudiantes.forEach(estudiantes =>{
    console.log(`Estudiante: ${estudiantes.nombre}`);
})


/* PASO 4 : Usando map
Crea un nuevo array nombresEstudiantes que contenga solo los nombres
Muestra el nuevo array
*/

const nombresEstudiantes = estudiantes.map(estudiantes => {
    return estudiantes.nombre;
})
console.log(nombresEstudiantes);

/* PASO 5 Usando for...of: 
Encuentra la calificación más alta y muestra: "La calificación más alta es: X"
*/
// Empezamos en 0 porque cualquier calificación será mayor
let calificacionMasAlta = 0;

// Paso 2: Recorrer todos los estudiantes
for(const estudiante of estudiantes){
    // Paso 3: Comparar: ¿Esta calificación es mayor que la que tengo guardada?
    if(estudiante.calificacion > calificacionMasAlta){
        // Si es mayor, la guardo como la nueva más alta
        calificacionMasAlta = estudiante.calificacion;
    }
}

console.log(`La calificacion mas alta es: ${calificacionMasAlta}`);


/* PASO 6 Usando while : 
Crea una cuenta regresiva del 3 al 1 mostrando: "Evaluación en X segundos..."
*/
let i = 3;
while(i >= 1){
    console.log(`Evaluacion en ${i} segundos...`);
    i--;
}
console.log("Comienza la evaluacion")

/* PASO  7 Bonus: 
Usando for...in, crea un objeto estadisticas con:
totalEstudiantes: cantidad de estudiantes
promedioEdad: promedio de edades
promedioCalificacion: promedio de calificaciones
Recorre ese objeto con for...in y muestra cada propiedad
*/

// Paso 1: Sumar todas las edades
let sumaEdades = 0;

for(let i = 0; i <  estudiantes.length; i++){
    sumaEdades = sumaEdades + estudiantes[i].edad;
}

// Paso 2: Dividir entre la cantidad de estudiantes
const promedioEdad = sumaEdades / estudiantes.length;

console.log(`Promedio de edades: ${promedioEdad}`);

const estadisticas = {
    totalEstudiantes: estudiantes.length,  // 4
    promedioEdad: promedioEdad,            // 20
    promedioCalificacion: promedio   
}

// 3. Mostrar cada propiedad del objeto
for(let propiedad in estadisticas){
    console.log(`${propiedad}: ${estadisticas[propiedad]}`);
}

// Lo que hace este paso
// Vuelta 1:
// propiedad = "totalEstudiantes"
// estadisticas["totalEstudiantes"] = 4
// Muestra: "totalEstudiantes: 4"

// Vuelta 2:
// propiedad = "promedioEdad"
// estadisticas["promedioEdad"] = 20
// Muestra: "promedioEdad: 20"

// Vuelta 3:
// propiedad = "promedioCalificacion"
// estadisticas["promedioCalificacion"] = 87.5
// Muestra: "promedioCalificacion: 87.5"


