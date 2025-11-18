//Variables

const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  //Es similar a DOMContentLoaded
  formulario.addEventListener("submit", buscarClima); //Cuando tengamos un submit buscamos el clima
});

function buscarClima(e) {
  e.preventDefault(); //Evita que se recargue la pagina

  //Validar
  const ciudad = document.querySelector("#ciudad").value; //para obtener el valor que usuario haya escrito ponemos.value
  const pais = document.querySelector("#pais").value;

  if (ciudad === "" || pais === "") {
    //Hubo un error
    mostrarError("Ambos campos son obligatorios");

    return; //detenemos la ejecucion del codigo con un return
  }

  //Consultariamos la API
  consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
  const alerta = document.querySelector(".bg-red-100");

  if (!alerta) {
    //Crear una alerta
    const alerta = document.createElement("div");

    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alerta.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block">${mensaje}</span>
    `;

    container.appendChild(alerta);

    //Se elimine la alerta despues de 5 minutos
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function consultarAPI(ciudad, pais) {
  //Enviar los datos estructurados

  const appId = "6dfa971f9001506f8660eaae639934d1";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&appid=${appId}`;

  Spinner(); //Mostrar un spinner mientras se consulta la API  
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      console.log(datos);
      limpiarHTML(); //Limpiar el HTML previo
      if (datos.cod === "404") {
        mostrarError("Ciudad no encontrada");
        return;
      }

      //Imprime la respuesta en el HTML
      mostrarClima(datos);
    });
}

function mostrarClima(datos) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = datos;

  const centigrados = kelvinACentigrados(temp);
  const max = kelvinACentigrados(temp_max);
  const min = kelvinACentigrados(temp_min);

  //Ciudad
  const nombreCiudad = document.createElement("p");
  nombreCiudad.textContent = `Clima en ${name}`;
  nombreCiudad.classList.add(
    "font-bold",
    "text-3xl",
    "text-center",
    "text-white"
  );

  //Temperatura
  const actual = document.createElement("p");

  actual.innerHTML = `${centigrados} &#8451;`;
  actual.classList.add("font-bold", "text-6xl");

  //Temperatura Maxima
  const tempMaxima = document.createElement("p");
  tempMaxima.innerHTML = `Temperatura Max: ${max} &#8451;`;
  tempMaxima.classList.add("text-xl");

  //Temperatura Minima
  const tempMinima = document.createElement("p");
  tempMinima.innerHTML = `Temperatura Min: ${min} &#8451;`;
  tempMinima.classList.add("text-xl");

  const resultadoDiv = document.createElement("div");
  resultadoDiv.classList.add("text-center", "text-white");
  resultadoDiv.appendChild(actual);
  resultadoDiv.appendChild(tempMaxima);
  resultadoDiv.appendChild(tempMinima);
  resultado.appendChild(nombreCiudad);

  resultado.appendChild(resultadoDiv);
}

//Helpers una funcion que hace una sola accion
const kelvinACentigrados = (grados) => parseInt(grados);

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function Spinner() {

    limpiarHTML();
  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-chase",'text-center');

  divSpinner.innerHTML = `    
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
  <div class="sk-chase-dot"></div>
    `;

    resultado.appendChild(divSpinner);
}
