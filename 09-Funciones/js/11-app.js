
// Parametros en un arrow Function...

//tradicional
/*
const aprendiendo = function(tecnologia, tecnologia2){ 
    console.log(`aprendiendo ${tecnologia} y ${tecnologia2}`)
}
aprendiendo('Javascript', 'Node.js')

const aprendiendo2 = () =>  'Aprendiendo Javascript 2';
console.log(aprendiendo2());
*/



// Parametros
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript 1');


// si es un solo parmetro no ocupamos el parentesis
const aprendiendo2 = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo2('JavaScript 2');

// multiples parametros si requieren parentesis
const aprendiendo3 = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo3('JS', 'ES',);

