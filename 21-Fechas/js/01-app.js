//Formas para saber que dia naciste
const diaHoy = new Date('2-17-1995');

let valor;

valor = diaHoy;
valor = diaHoy.getFullYear();//Crea el año actual
valor = diaHoy.getMonth();//Crea el mes actual
valor = diaHoy.getMinutes();//Crea los minutos actual
valor = diaHoy.getHours();//Crea las horas actual
valor = diaHoy.getTime();//Crea el tiempo actual
//Si en consola escribo Date.now() me da el tiempo actual y no requiere instancearse osea crear una cosntante para poder utilizarlo
console.log( valor);