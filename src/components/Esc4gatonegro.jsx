import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionGato.css";

export const Esc4gatonegro = () => {

    const videoRefg2 = useRef(null)

    const handlePlay = () => {
        videoRefg2.current.play()
    }
    const handlePause = () => {
        videoRefg2.current.pause()
    }

    return (
        <>
            <video
                ref={videoRefg2}
                className='escenario'>
                <source
                    src="./public/Videos/GatoNegro/Esc4.mp4"
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
