//Vamos a crear el boton de footer para que se muestre

//Primero seleccionamos el boton
const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
    //Aqui va ir toda la logica
    //Para activar el boton
    if (footer.classList.contains("activo")) { //Usuamos contains para saber si ya tiene la clase activo
        
        //Para desactivar el boton
        footer.classList.remove("activo");
        //Para desactivar el color del boton
        this.classList.remove("activo");//Usamos this hacemos referencia a lo que mandamos a llamar en este caso estamos mandando a llamar btnFlotante y en vez de usar btnFlotante con this nos ahorramos eso
        //Agregamos el texto
        this.textContent = "Idioma y Moneda";
    }else{
        //Para Agregar la clase
        footer.classList.add("activo"); 

        //Para activar el color al boton 
        this.classList.add("activo");//Usamos this hacemos referencia a lo que mandamos a llamar en este caso estamos mandando a llamar btnFlotante y en vez de usar btnFlotante con this nos ahorramos eso

        //Crear un boton llamado cerrar cuando este activo el footer
        this.textContent = "X Cerrar";
    }


}