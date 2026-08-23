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
