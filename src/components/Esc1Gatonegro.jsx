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
            <div className='d-flex justify-content-center'>
                <div>
                    <button onClick={handlePlay}>Play</button>
                </div>
                <div>
                    <button onClick={handlePause}>Detener</button>
                </div>
            </div>
        </>
    )
}
