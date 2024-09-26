import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const  [usuario, setUsuario ] = useState('')
const  [clave, setClave ] = useState('')
const  [ textoAvoz, setTextoAvoz ] = useState('')
const [ vozATexto, setVozATexto ] = useState('')
const [logueado, setlogueado ] = useState('false')

function cambiarUsuario(evento) {
  setUsuario (evento.target.value)
}

  function cambiarClave(evento) {
    setClave (evento.target.value)
  }

  function ingresar() {
    if (usuario == "admin" && clave == "admin") {
      alert("ingresaste")
    }else{
      alert("usuario o clave incorrectos")
    }
  }
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
  
    {logueado ? (
       <>
       <br />
       <h3>conversor de texto a voz</h3>
       <input type="text" id="textoAvoz" value={textoAvoz} onchange={cambiarTexto} />
         <button onClick={convertirTextoAVoz}>convertir</button>
 
          <h3> conversor de voz a texto</h3>
         <button onClick={grabarVozATexto}>Grabar</button>
         {vozATexto}
      </>
    ) : (<>

    }
     <input type="text" name="usuario" id="usuario"  value={usuario} onChange={cambiarUsuario} />
     <input type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>ingresar</button>
      </>)}
      <br />
      <h3>conversor de texto a voz</h3>
      <input type="text" id="textoAvoz" value={textoAvoz} onchange={cambiarTexto} />
        <button onClick={convertirTextoAVoz}>convertir</button>

         <h3> conversor de voz a texto</h3>
        <button onClick={grabarVozATexto}>Grabar</button>
    </>

  )
}

export default App
