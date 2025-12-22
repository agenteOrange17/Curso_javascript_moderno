/* 
- Crea iniciarApp(), cargarDatos(), autenticar(usuario) encadenadas.
- Muestra el flujo completo en consola.
*/

iniciarApp();

function iniciarApp(){
    console.log('Iniciando aplicacion...');
    cargarDatos();
}

function cargarDatos(){
    console.log('Cargando los datos...');    
    usuarioAuntenticar('Tyrell Wellick')
    
}

function usuarioAuntenticar(usuario){
    console.log('Autenticando Usuario...');
    console.log(`Autenticando ${usuario} con éxito`);
    entrandoAdmin();

}

function entrandoAdmin(usuario){
    console.log(`Bienvenido ${usuario} al sistema`);
}

