function conectarDB() {
  //Para abrir la conexion y conectarnos
  const abrirConexion = window.indexedDB.open("crm", 1);

  //Si hay un error
  abrirConexion.onerror = function () {
    console.log("Hubo un error al conectarse...");
  };

  //Si todo sale bien mensaje de exito
  abrirConexion.onsuccess = function () {
    DB = abrirConexion.result;
  };
}

//Validar alerta
function imprimirAlerta(mensaje, tipo) {
  //
  const alerta = document.querySelector(".alerta");

  if (!alerta) {
    //si no hay una alerta previa entonces muestre la alerta

    //Crear la alerta
    const divMensaje = document.createElement("div");
    divMensaje.classList.add(
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center",
      "border",
      "alerta"
    ); //Agregando estilos utilizando tailwind

    //Si es de tipo error
    if (tipo === "error") {
      divMensaje.classList.add("bg-red-100", "border-red-400", "text-red-700");
    } else {
      divMensaje.classList.add(
        "bg-green-100",
        "border-green-400",
        "text-green-700"
      );
    }

    divMensaje.textContent = mensaje;

    formulario.appendChild(divMensaje); // para agregarlo al DOM

    //Quitar alerta despues de 3 segundo
    setTimeout(() => {
      divMensaje.remove(); //Para eliminarlo del DOM
    }, 3000);
  }
}
