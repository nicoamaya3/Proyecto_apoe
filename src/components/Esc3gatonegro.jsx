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
