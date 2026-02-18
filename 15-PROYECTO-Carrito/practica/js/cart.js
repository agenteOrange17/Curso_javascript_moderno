// ============================================
// PASO 1: SELECCIONAR ELEMENTOS
// ============================================

const carrito = document.querySelector('#carrito');
const imgCarrito = document.querySelector('#img-carrito');
const cerrarCarritoBtn = document.querySelector('#cerrar-carrito');

/*
console.log('Paso 1: Elementos seleccionados');
console.log('Carrito: ', carrito);
console.log('Boton abrir', imgCarrito);
console.log('Boton cerrar:', cerrarCarritoBtn);
*/
// ============================================
// PASO 2: ABRIR EL CARRITO
// ============================================

const abrirCarrito = () => {
    if(!carrito){
        console.error('Carrito no encontrado');
        return;
    }

    carrito.classList.add('activo');
   // console.log('Carrito Abierto');
};

// Conectar al boton del carrito
if(imgCarrito){
    imgCarrito.addEventListener('click', abrirCarrito);
    //console.log('Listener agregado al boton abrir');
}

// ============================================
// PASO 3: CERRAR EL CARRITO
// ============================================

const cerrarCarrito = () => {
    if(!carrito){
        //console.error('Carrito no encontrado');
        return;
    }

    carrito.classList.remove('activo');
    //console.log('Carrito Cerrado');
}

// Conectar al boton cerrar
if(cerrarCarritoBtn){
    cerrarCarritoBtn.addEventListener('click', cerrarCarrito);
    // console.log('Listener agregado al boton cerrar');
}


// ============================================
// PASO 4: CERRAR AL HACER CLIC FUERA
// ============================================
document.addEventListener('click', (e) => {
    if(!carrito || !carrito.classList.contains('activo')){
        return;
    }

    // Verificar que el clic no fue dentro del carrito
    const clickDentroCarrito = carrito.contains(e.target);

    // Verificar que el clic no fue en el boton del carrito
    const clickEnBotonCarrito = imgCarrito && imgCarrito.contains(e.target);

    // Si el clic fue fuera, cerrar
    if(!clickDentroCarrito && !clickEnBotonCarrito){
        cerrarCarrito();
    }
})

// console.log('✅ Listener para click fuera configurado');