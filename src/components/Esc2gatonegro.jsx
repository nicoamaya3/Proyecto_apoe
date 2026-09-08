import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionGato.css";

export const Esc2gatonegro = () => {

   
    return (
        <>

            <video
                className='escenario'>
                <source
                    src="./public/Videos/GatoNegro/Esc2.mp4"
                />
            </video>


        </>

    )
}
