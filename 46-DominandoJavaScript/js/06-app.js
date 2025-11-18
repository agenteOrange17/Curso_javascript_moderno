//New Binding
function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Camaro', 'Negro'); 

console.log(auto);


//Existe otro tipo de binding

//Window Binding

window.color = 'blanco';  
function hola(){
    console.log(color);
}

hola();