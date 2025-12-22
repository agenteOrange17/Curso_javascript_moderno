/*
- Crea objeto reproductor con métodos reproducir, pausar, borrar(id).
- Añade crearPlaylist(nombre) y reproducirPlaylist(nombre).
 */

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo la cancion con el: ${id}`);
    },
    pausar: function(){
        console.log('Pausando la cancion...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Comenzando a reproducir playlist: ${nombre}`);
    },
    borrar: function(id){
        console.log(`Borrando la cancion con id: ${id}`);
    }
    
}

// Mandamos a llamar el método reproducir
reproductor.reproducir(50);
reproductor.pausar();
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Indie Rock');
reproductor.borrar(50);