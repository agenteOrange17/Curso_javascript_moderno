//Implicint Binding
const usuario = {
    nombre: 'Elliot',
    edad: 28,
    informacion(){
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
    },
    mascota: {
        nombre: 'Toby',
        edad: 2,
        informacion(){
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();