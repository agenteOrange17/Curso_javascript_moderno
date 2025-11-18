
// Primera forma en que la que comparten ambos los mismos valores
/*
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`nombre: ${info.nombre}`);
    }
})


function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

function Empleado(nombre, email, puesto){
    let puesto = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info)
    )
}

const cliente = Cliente('Elliot','Mrrobot@fsociety.com', 'Fuck Socity')
cliente.mostrarNombre();

const empleado = Empleado('Darlene','darlene@fsociety.com', 'Programador')
empleado.mostrarNombre();

*/


//Segunda forma en donde no tenemos emai y como seria definir una funcion a la cual le pasaria un valor

/*
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardar email en: ${info.nombre} `);
        info.email = email;
    }
})


//Mostrar Email
const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        //Para utilizar el email
        guardarEmail(info),

        //Para mostrar email
        obtenerEmail(info)

    )
}

function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        //Para mostrar email
        obtenerEmail(info)
    )
}

const cliente = Cliente('Gideon',null , 'All Safe')
cliente.mostrarNombre();
//Para autilizar email
cliente.agregarEmail('gideon@allsafe.com')
cliente.mostrarEmail()

const empleado = Empleado('Elliot',null, 'Programador')
empleado.mostrarNombre();
empleado.agregarEmail('mrrobot@fsociety.com')
empleado.mostrarEmail();
*/


// Tercer caso donde no comparten los mismos campos
const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardar email en: ${info.nombre} `);
        info.email = email;
    }
})


//Mostrar Email
const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})

//Obtener puesto
const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        //Para utilizar el email
        guardarEmail(info),
        //Para mostrar email
        obtenerEmail(info),
        //Obtener empresa
        obtenerEmpresa(info)


    )
}

function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        //Para mostrar email
        obtenerEmail(info),
        //Mostrar Puesto
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Gideon',null , 'All Safe')
cliente.mostrarNombre();
//Para autilizar email
cliente.agregarEmail('gideon@allsafe.com')
cliente.mostrarEmail()
cliente.mostrarEmpresa();

console.log('================================');


const empleado = Empleado('Elliot',null, 'Programador')
empleado.mostrarNombre();
empleado.agregarEmail('mrrobot@fsociety.com')
empleado.mostrarEmail();
empleado.mostrarPuesto();