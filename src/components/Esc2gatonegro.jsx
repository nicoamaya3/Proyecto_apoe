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
