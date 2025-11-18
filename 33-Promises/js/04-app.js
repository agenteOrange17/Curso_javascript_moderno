//CallBack to Promises

const paises = [];

const nuevoPais = pais => new Promise(resolve => { //El promise es un callback y en este caso solo usare callback
    setTimeout(() => {
        paises.push(pais); //Le pasamos el pais que se arregle
        resolve(`Agregado: ${pais}`);//Si se cumple el promise, decimos que se agrego al pais
    }, 3000)
})


nuevoPais('Alemania')
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);

        return nuevoPais('Japon');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);

    })