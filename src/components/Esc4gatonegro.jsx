import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import Cap4G from "../../public/Videos/GatoNegro/Esc4.mp4";
import "../stylesheets/AnimacionGato.css";

export const Esc4gatonegro = () => {


    return (
        <>
            <video
               
                className='escenario'>
                <source
                    src={Cap4G}
                />
            </video>

           
        </>
    )
}
