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
