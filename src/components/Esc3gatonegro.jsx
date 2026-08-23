import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionGato.css";


export const Esc3gatonegro = () => {

    const videoRefg = useRef(null)

    const handlePlay = () => {
        videoRefg.current.play()
    }
    const handlePause = () => {
        videoRefg.current.pause()
    }

    return (
        <>
            <video
                ref={videoRefg}
                className='escenario'>
                <source
                    src="./public/Videos/GatoNegro/Esc3.mp4"
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
