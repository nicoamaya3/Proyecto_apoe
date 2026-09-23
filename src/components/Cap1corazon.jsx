import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import Cap1C from "../../public/Videos/Corazón/Cap1.mp4";
import "../stylesheets/AnimacionCorazon.css";

export const Cap1corazon = () => {

  return (

    <>
      <video
        
        className='pantalla'>
        <source
          src={Cap1C}
        />
      </video>

    </>

  )
}
