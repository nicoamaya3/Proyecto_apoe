import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionCorazon.css";

export const Cap1corazon = () => {

  return (

    <>
      <video
        
        className='pantalla'>
        <source
          src="./public/Videos/Corazón/Cap1.mp4"
        />
      </video>

    </>

  )
}
