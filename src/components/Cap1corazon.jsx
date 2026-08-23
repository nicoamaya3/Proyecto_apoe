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
