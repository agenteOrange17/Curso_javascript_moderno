function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    
}


Cliente.prototype.tipoCliente = function(){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo > 5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }

    return tipo;
    //Va a evaluar el saldo que colocamos y retorna que tipo de cliente
}

//Podria utilziar un arrow function siempre y cuando no haga referencia a un this
Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente() }`;
}

//Imaginando que es un banco
Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}


//Instanciarlo
const elliot = new Cliente('Elliot', 6000);
console.log(elliot.tipoCliente()); //Desde el nuevo proto
console.log(elliot.nombreClienteSaldo()); //Desde el nuevo proto
elliot.retiraSaldo(500);
console.log(elliot.nombreClienteSaldo()); //Desde el nuevo proto


console.log(elliot);

