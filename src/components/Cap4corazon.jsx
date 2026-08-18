import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionCorazon.css";

export const Cap4corazon = () => {

    const videoRef4 = useRef(null)

    const handlePlay = () => {
        videoRef4.current.play()
    }
    const handlePause = () => {
        videoRef4.current.pause()
    }

    return (
        <>
            <video
                ref={videoRef4}
                className='pantalla'>
                <source
                    src="./public/Videos/Corazón/Cap4.mp4"
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
