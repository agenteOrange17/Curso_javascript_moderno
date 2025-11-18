const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM DO YYYY h:mm:ss a'));

//Para imprimir la fecha en español
moment().format('LLLL');
console.log(moment().format('LLLL'));

console.log(moment().add(2, 'days').calendar());//para usarlo como un cupon que caduca en los dias