import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import "../stylesheets/AnimacionGato.css";

export const Esc1Gatonegro = () => {


    return (
        <>
            <video
                className='escenario'>
                <source
                    src="./public/Videos/GatoNegro/Esc1.mp4"
                />
            </video>
        </>
    )
}
