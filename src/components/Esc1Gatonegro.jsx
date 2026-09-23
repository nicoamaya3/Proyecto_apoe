import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import Cap1G from "../../public/Videos/GatoNegro/Esc1.mp4";
import "../stylesheets/AnimacionGato.css";

export const Esc1Gatonegro = () => {


    return (
        <>
            <video
                className='escenario'>
                <source
                    src={Cap1G}
                />
            </video>
        </>
    )
}
