const out = document.getElementById('output');
function print(msg) {
  out.textContent += (typeof msg === 'string' ? msg : String(msg)) + '\n';
  console.log(msg);
}
function clearOutput() { out.textContent = ''; }
function setActive(id) {
  document.querySelectorAll('.acciones button').forEach(b => b.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

function ejercicioDeclaracionExpresion() {
  clearOutput();
  function sumar() { return 2 + 2; }
  const sumar2 = function() { return 3 + 3; };
  print(sumar());
  print(sumar2());
}

function ejercicioHoisting() {
  clearOutput();
  print(sumarHoist());
  function sumarHoist() { return 2 + 2; }
  const sumarExp = function() { return 3 + 3; };
  print(sumarExp());
  print('Llamar una expresión antes de declararla da error');
}

function ejercicioFuncionesLenguaje() {
  clearOutput();
  print(parseInt('20'));
  print(parseInt('1'));
}

function ejercicioMetodoVsFuncion() {
  clearOutput();
  const numero1 = 20;
  const numero2 = '20';
  print(parseInt(numero2));
  print(numero1.toString());
}

function ejercicioParametrosArgumentos() {
  clearOutput();
  function saludar(nombre, apellido) { return `Hola ${nombre} ${apellido}`; }
  print(saludar('Agent', 'Orange'));
  print(saludar());
}

function ejercicioParametrosDefault() {
  clearOutput();
  function saludar(nombre = 'Desconocido', apellido = '') { return `Hola ${nombre} ${apellido}`; }
  print(saludar('Agent', 'Orange'));
  print(saludar('Agent'));
  print(saludar());
}

function ejercicioComunicacion() {
  clearOutput();
  function iniciarApp() { print('Iniciando App...'); segundaFuncion(); }
  function segundaFuncion() { print('Desde la segunda función...'); usuarioAutenticado('Agent'); }
  function usuarioAutenticado(usuario) { print('Autenticando usuario...'); print(`Usuario autenticado con éxito: ${usuario}`); }
  iniciarApp();
}

function ejercicioRetornoValores() {
  clearOutput();
  function sumar(a, b) { return a + b; }
  const resultado = sumar(3, 2);
  print(resultado);
  let total = 0;
  function agregarCarrito(precio) { total += precio; return total; }
  function calcularImpuesto(t) { return 2 * t; }
  total = agregarCarrito(200);
  total = agregarCarrito(300);
  total = agregarCarrito(400);
  print(total);
  const totalPagar = calcularImpuesto(total);
  print(`El total a pagar es de: $${totalPagar}`);
}

function ejercicioMetodosPropiedad() {
  clearOutput();
  const reproductor = {
    reproducir: function(id) { print(`Reproduciendo canción con el id ${id}`); },
    pausar: function() { print('pausando...'); },
    borrar: function(id) { print(`Borrando canción con id: ${id}`); },
    crearPlaylist: function(nombre) { print(`Creando la Playlist ${nombre}`); },
    reproducirPlaylist: function(nombre) { print(`Reproduciendo la Playlist ${nombre}`); }
  };
  reproductor.reproducir(30);
  reproductor.pausar();
  reproductor.borrar(20);
  reproductor.crearPlaylist('Heavy Metal');
  reproductor.reproducirPlaylist('Heavy Metal');
}

function ejercicioArrowBasico() {
  clearOutput();
  const aprendiendo = function() { print('Aprendiendo JavaScript'); };
  const aprendiendo2 = () => { print('Aprendiendo JavaScript2'); };
  const aprendiendo3 = () => 'Aprendiendo JavaScript 3';
  print(aprendiendo3());
  aprendiendo2();
  aprendiendo();
}

function ejercicioArrowParametros() {
  clearOutput();
  const aprendiendo = (tecnologia) => print(`aprendiendo ${tecnologia}`);
  aprendiendo('JavaScript 1');
  const aprendiendo2 = tecnologia => print(`aprendiendo ${tecnologia}`);
  aprendiendo2('JavaScript 2');
  const aprendiendo3 = (tecn1, tecn2) => print(`Aprendiendo ${tecn1} ${tecn2}`);
  aprendiendo3('JS', 'ES');
}

function ejercicioArrayArrow() {
  clearOutput();
  const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 }
  ];
  const nuevoArray = carrito.map(producto => `Articulo: ${producto.nombre} Precio: $${producto.precio}`);
  nuevoArray.forEach(print);
  carrito.forEach(producto => print(`Articulo: ${producto.nombre} Precio: $${producto.precio}`));
}

function ejercicioArrowMetodosSetGet() {
  clearOutput();
  const reproductor = {
    cancion: '',
    reproducir: id => print(`Reproduciendo canción id ${id}`),
    pausar: () => print('pausando...'),
    borrar: id => print(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre => print(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre => print(`Reproduciendo la Playlist ${nombre}`),
    set nuevaCancion(c) { this.cancion = c; print(`Añadiendo ${c}`); },
    get obtenerCancion() { print(`${this.cancion}`); }
  };
  reproductor.reproducir(30);
  reproductor.pausar();
  reproductor.borrar(20);
  reproductor.crearPlaylist('Heavy Metal');
  reproductor.reproducirPlaylist('Heavy Metal');
  reproductor.nuevaCancion = 'Master Of Puppets';
  reproductor.obtenerCancion;
}

document.getElementById('ej1').addEventListener('click', () => { setActive('ej1'); ejercicioDeclaracionExpresion(); });
document.getElementById('ej2').addEventListener('click', () => { setActive('ej2'); ejercicioHoisting(); });
document.getElementById('ej3').addEventListener('click', () => { setActive('ej3'); ejercicioFuncionesLenguaje(); });
document.getElementById('ej4').addEventListener('click', () => { setActive('ej4'); ejercicioMetodoVsFuncion(); });
document.getElementById('ej5').addEventListener('click', () => { setActive('ej5'); ejercicioParametrosArgumentos(); });
document.getElementById('ej6').addEventListener('click', () => { setActive('ej6'); ejercicioParametrosDefault(); });
document.getElementById('ej7').addEventListener('click', () => { setActive('ej7'); ejercicioComunicacion(); });
document.getElementById('ej8').addEventListener('click', () => { setActive('ej8'); ejercicioRetornoValores(); });
document.getElementById('ej9').addEventListener('click', () => { setActive('ej9'); ejercicioMetodosPropiedad(); });
document.getElementById('ej10').addEventListener('click', () => { setActive('ej10'); ejercicioArrowBasico(); });
document.getElementById('ej11').addEventListener('click', () => { setActive('ej11'); ejercicioArrowParametros(); });
document.getElementById('ej12').addEventListener('click', () => { setActive('ej12'); ejercicioArrayArrow(); });
document.getElementById('ej13').addEventListener('click', () => { setActive('ej13'); ejercicioArrowMetodosSetGet(); });
document.getElementById('reset').addEventListener('click', () => { setActive('reset'); clearOutput(); });
