import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function conversor() {

const  [ textoAvoz, setTextoAvoz ] = useState('')
const [ vozATexto, setVozATexto ] = useState('')


  
  function cambiarTexto(evento) {
    setTextoAvoz (evento.target.value)
  }

    function convertirTextoAVoz() {
      const synth = window.speechSynthesis
      const utterThis = new SpeechSynthesisUtterance(textoAvoz)
      synth.speak(utterThis)

      function resultado(event){
        setVozATexto(event.results[0][0].transcript)

    }
    function grabarVozATexto() {
      const recognition = new window.webkitSpeechRecognition()
      recognition.lang= "es-ES"
      recognition.start()
      recognition.onresult= resultado
        
    }

  return (
    <>
    <h1>conversor tts y stt</h1>
<br />
  <h3>conversor de texto a voz</h3>
  <input type="text" id="textoAvoz" value={textoAvoz} onchange={cambiarTexto} />
    <button onClick={convertirTextoAVoz}>convertir</button>

     <h3> conversor de voz a texto</h3>
    <button onClick={grabarVozATexto}>Grabar</button>

</>
  );

}
}

  
  

  


export default conversor
