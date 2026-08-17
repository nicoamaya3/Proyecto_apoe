import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionCorazon.css";

export const Cap3corazon = () => {

    const videoRef3 = useRef(null)
    
        const handlePlay = () => {
            videoRef3.current.play()
        }
        const handlePause = () => {
            videoRef3.current.pause()
        }

  return (
    <>
    <video
                    ref={videoRef3}
                    className='pantalla'>
                    <source
                        src="./public/Videos/Corazón/Cap3.mp4"
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
