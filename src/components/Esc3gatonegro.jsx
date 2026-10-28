import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import Cap3G from "../../public/Videos/GatoNegro/Capi3.mp4";
import "../stylesheets/AnimacionGato.css";


export const Esc3gatonegro = () => {


    return (
        <>
            <video
               
                className='escenario'>
                <source
                     src={Cap3G}
                />
            </video>
        </>
    )
}
