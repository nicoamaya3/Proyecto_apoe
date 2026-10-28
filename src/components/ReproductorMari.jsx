import { div, video } from 'motion/react-client'
import React, { useRef } from 'react'

export const ReproductorMari = () => {

    const [mostrarMensaje, setMostrarMensaje] = useState(false)
    const [detener, setDetener] = useState(false)

    const videoRef = useRef (null)

    const handlePlay = () => {
        videoRef.current.play()
    }
    
    const handlePause = () => {
        videoRef.current.pause()
    }

    const handleAvanzar = () => {
        videoRef.current.currentTime = 6
    }

    const handleUpdate = () => {
        if( videoRef.current.currentTime >= 5 && !detener){
            videoRef.current.pause()
            setMostrarMensaje(true)
            setDetener(true)
        }
    }

    const handleContinuar = () => {
        setMostrarMensaje(false)
        videoRef.current.play()
    }



  return (
    <>

    <h1>Reproductor de Mariana</h1>

    <video 
        ref = {videoRef}
        width={700}
        oneTimeUpdate={handleUpdate}
        >

        <source 
        src='https://www.w3schools.com/Html/mov_bbb.mp4'
        type='Video/mp4' 

    />
    </video>

    {
        mostrarMensaje && (
            <div>
                <h2>Video detenido en el Seg 5</h2>
            </div>
        )
    }

    <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleAvanzar}>Ir al Seg 6</button>
        <button onClick={handleContinuar}>Continuar</button>

    </div>

    </>
  )
}


