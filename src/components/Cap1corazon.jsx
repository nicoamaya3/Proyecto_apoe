import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionCorazon.css";

export const Cap1corazon = () => {

  const videooRef = useRef(null)

  const handlePlay = () => {
    videooRef.current.play()
  }
  const handlePause = () => {
    videooRef.current.pause()
  }

  return (

    <>
      <video
        ref={videooRef}
        className='pantalla'>
        <source
          src="./public/Videos/Corazón/Cap1.mp4"
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
