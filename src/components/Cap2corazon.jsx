import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionCorazon.css";


export const Cap2corazon = () => {

    const videoRef2 = useRef(null)

    const handlePlay = () => {
        videoRef2.current.play()
    }
    const handlePause = () => {
        videoRef2.current.pause()
    }

    return (
        <>
            <video
                ref={videoRef2}
                className='pantalla'>
                <source
                    src="./public/Videos/Corazón/Capitulo2-Sec2.mp4"
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
