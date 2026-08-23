import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionGato.css";

export const Esc1Gatonegro = () => {

    const videoRef = useRef(null)

    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <>
            <video
                ref={videoRef}
                className='escenario'>
                <source
                    src="./public/Videos/GatoNegro/Esc1.mp4"
                />
            </video>
            <div className='position-relative iniciar'>
                <div className="position-absolute play">
                    <img onClick={handlePlay} src="src/assets/svg/play.svg" alt="Play" style={{ width: '25px', cursor: 'pointer' }} />
                </div>

                <div className='position-absolute detener'>
                    <button onClick={handlePause}>Detener</button>
                </div>
            </div>
        </>
    )
}
