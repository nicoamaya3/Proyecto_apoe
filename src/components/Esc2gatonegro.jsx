import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionGato.css";

export const Esc2gatonegro = () => {

    const videoRefg1 = useRef(null)

    const handlePlay = () => {
        videoRefg1.current.play()
    }
    const handlePause = () => {
        videoRefg1.current.pause()
    }

    return (
        <>

            <video
                ref={videoRefg1}
                className='escenario'>
                <source
                    src="./public/Videos/GatoNegro/Esc2.mp4"
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
