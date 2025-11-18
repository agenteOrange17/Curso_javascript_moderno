function iniciarApp(){

    //Inyectamos la card
    const resultadoDiv = document.querySelector('#resultado');
    const selectCategorias = document.querySelector('#categorias');
        //Se utiliza change para que se ejecute cuando se seleccione algo en el select
    if (selectCategorias){
        selectCategorias.addEventListener('change', seleccionarCategoria);

        //Mandamos a llamar
    obtenerCategorias();
    }

    //Favoritos
    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }


    //Modal
    const modal = new bootstrap.Modal('#modal', {});  

    

    //Funcion para obtener categorias
    function obtenerCategorias(){
        //Usamos FetchAPI con Promises
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

        //Un fetch es como un llamado hacia una url
        fetch(url)
        //Un then es como un "entonces"
        //Entonces quiero un llamado de tipo json
            .then(respuesta => respuesta.json())
            //entonces quiero imprimir los resultados
            .then( resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach( categoria => {   
            
            //Aplicamos destructuring para no estar escribiendo 'categoria'
            const { strCategory } = categoria;

            const option = document.createElement('OPTION');
            //es el valor que se va a leer una vez que el usuario seleccione algo para enviar una peticion a la api
            option.value = strCategory;
            option.textContent = strCategory;
            selectCategorias.appendChild(option);
            
        })
    }

    function seleccionarCategoria(e){
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarRecetas(resultado.meals))
        
    }

    function mostrarRecetas(recetas = []){
        
        //Limpiar codigo HTML
        limpiarHTML(resultado);

        const heading = document.createElement('H2'); 
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados';
        resultadoDiv.appendChild(heading);

        //Iterar en los resultados
        recetas.forEach( receta => {

            const { idMeal, strMeal, strMealThumb} = receta;
            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card','mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.titulo}`;
            recetaImagen.src = strMealThumb ?? receta.img;
            

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger','w-100');
            recetaButton.textContent = 'Ver Receta';
            //Button para abrir modal
            recetaButton.dataset.bsTarget = '#modal';
            recetaButton.dataset.bsToggle = "modal";
            //Utilizamos onclick por que los elementos no existen por que se genera hasta que se de click en los elementos
            recetaButton.onclick = () => {
                seleccionarReceta(idMeal ?? receta.id);
            }


            //Inyectar en el codigo HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);


        })
    }

    function seleccionarReceta(id){
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarRecetaModal(resultado.meals[0]))
            
    }
    function mostrarRecetaModal(receta){     
         
        const { idMeal, strInstructions, strMeal, strMealThumb} = receta;

        //Agregar contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}">
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades</h3>
        `;


        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');

        //Mostrar cantidades e ingredientes
        
        for(let i = 1; i <= 20; i++){
            if(receta[`strIngredient${i}`]){
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
                
            }
        }

        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);


        //Botones de cerrar y favoritos
        //Boton favoritos
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito' ;

        //LocalStorage
        btnFavorito.onclick = () => {
            //Para ver que no se repitan mandamos a llamar la funcion
            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado Correctamente');
                return;
            }
            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb,
            })
            btnFavorito.textContent = 'Eliminar Favorito';
            mostrarToast('Agregado Correctamente');
        }

        //Boton Cerrar
        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = () => {
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);

        //Muestra el modal
        modal.show();
    }


    function agregarFavorito(receta){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; //En caso de que no exista favoritos sera un arreglo vacio por eso ?? 
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
    }

    function eliminarFavorito(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; //En caso de que no exista favoritos sera un arreglo vacio por eso ?? 
        const nuevosFavoritos = favoritos.filter( favorito => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    //Evitar elementos repetidos
    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some( favorito => favorito.id === id );
    }

    function mostrarToast(mensaje){
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv); //Dentro del (es donde quiero que vaya a mostrar )
        toastBody.textContent = mensaje; //Agregamos el mensaje que le pasamos por parametro

        toast.show();  //Mostrar
    }
    
    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if(favoritos.length){
            //Si hay algo en mis favoritos ejecuta el codigo
            mostrarRecetas(favoritos);
            //return si no hay
            return;
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay favoritos aún';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        favoritosDiv.appendChild(noFavoritos);
        
    }

    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }

}


document.addEventListener('DOMContentLoaded', iniciarApp);