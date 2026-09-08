import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionGato.css";

export const Esc4gatonegro = () => {


    return (
        <>
            <video
               
                className='escenario'>
                <source
                    src="./public/Videos/GatoNegro/Esc4.mp4"
                />
            </video>

           
        </>
    )
}
