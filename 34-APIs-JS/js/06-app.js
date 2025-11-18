//Speech API

//Speech Recognition
const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');


microfono.addEventListener('click', ejecutarSpeechAPI);

//Speech Synthesis

function ejecutarSpeechAPI(){
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();//instancia de la clase SpeechRecognition


    recognition.start();

    recognition.onstart = function(){
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    };

    //Cuando terminemos de hablar
    recognition.onspeechend = function(){
        salida.textContent = 'Se dejo de hablar';
        recognition.stop();
    }

    recognition.onresult = function(e){
        console.log(e.results[0][0]);

        const {confidence, transcript} = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado ${transcript}`;
        const seguridad = document.createElement('p');
        seguridad.innerHTML = `Seguridad: ${parseInt( confidence * 100 ) } %`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);

    }


}