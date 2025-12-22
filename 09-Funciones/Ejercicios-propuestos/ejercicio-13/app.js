/**
- Crea objeto con métodos arrow y propiedades.
- Implementa set nuevaCancion y get obtenerCancion y pruébalos.
**/

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproductiendo cancion con id: ${id}`),
    pausar: () => console.log(`Pausando cancion ...`),
    borrar: id => console.log(`Borrando cancion con id: ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist: ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`),

    //Agregar cancion
    set nuevaCancion(cancion){
        this.cancion = cancion;
    }
    ,
    //Obtener cancion
    get obtenerCancion(){
        return this.cancion;
    }

}


reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist('Rock Classics');
reproductor.reproducirPlaylist('Tame Impala Remix');
reproductor.nuevaCancion = 'Enter Sandman';
console.log(reproductor.cancion);
console.log(reproductor.obtenerCancion);

