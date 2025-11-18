
document.addEventListener('DOMContentLoaded', function() {

    // 1. captura de elemntos del DOM
    const btnLanzar = document.getElementById('btn-lanzar');
    const contResultado = document.getElementById('resultado');
    const contHistorial = document.getElementById('historial');
    const btnReiniciar = document.getElementById('btn-reiniciar');

    // 2. Array para guardar jugadas
    let historial = [];

    // 3. Confirmacion
    // console.log('Simulador iniciado');

    btnLanzar.addEventListener('click', function(){
        // 1. Generar numeros aleatorios para los dados
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;

        // 2. Determinar el resultado 
        let resultado = '';

        if(dado1 === dado2){
            resultado = "Empate";
        }else if(dado1 > dado2){
            resultado = '🎲 Gana el dado 1';
        }else{
            resultado = '🎲 Gana el dado 2';
        }

        // 3. Mostrar en pantallla
        contResultado.textContent = `
        Dado1: ${dado1} | Dado 2: ${dado2} -> ${resultado}
        `;

        // 4. Crear objeto de la jugada
        const jugada = {
            tirada: historial.length + 1,
            dado1: dado1, 
            dado2: dado2,
            resultado: resultado
        };

        // 5. Agregar al historial
        historial.push(jugada);

        // 6. Renderizar historial en pantalla
        renderizarHistorial();

        mostrarResumen();
    })


    function renderizarHistorial(){
        // 7. Limpiar historial anterior
        contHistorial.innerHTML = '';

        // 8. Recorrer hhistorial y mostrar cada jugada
        historial.forEach(function(jugada){
            const div = document.createElement('DIV');
            div.classList.add('historial-item');
            div.textContent = `Tirada #${jugada.tirada}: D1=${jugada.dado1}, D2=${jugada.dado2} -> ${jugada.resultado}`;
            contHistorial.appendChild(div);
        });
    }

    // 9. Mostrar resumen
    function mostrarResumen(){
        let ganadasDado1 = 0;
        let ganadasDado2 = 0;
        let empates = 0;

        // 10. Recorrer el historial y contar resultados
        historial.forEach(function (jugada){
            if(jugada.resultado.includes('Empate')){
                empates++;
            }else if(jugada.resultado.includes('Dado 1')){
                ganadasDado1++;
            }else{
                ganadasDado2++;
            }
        });    

        // 11. Mostrar resultados
        const resumenHTML = `
        <div class="table-resumen">
        <h2>Resumen de tiradas:</h2>
        <ul>
            <li>Gana Dado 1: ${ganadasDado1} veces</li>
            <li>Gana Dado 2: ${ganadasDado2} veces</li>
            <li>Empates: ${empates} veces</li>
        </ul>
        </div>
        `;

        document.getElementById('resumen').innerHTML = resumenHTML;
    }

    // 12. Reiniciar
    btnReiniciar.addEventListener('click', function(){
        // 13. Vaciar el array historial
        historial = [];
        
        // 14. Limpiar el contenido de cada seccion
        contResultado.textContent = '';
        contHistorial.innerHTML ='';
        document.getElementById('resumen').innerHTML = '';

        console.log('Simulador reiniciado');
    });
});