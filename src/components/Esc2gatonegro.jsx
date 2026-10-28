import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import Cap2G from "../../public/Videos/GatoNegro/Capi2.mp4";
import "../stylesheets/AnimacionGato.css";

export const Esc2gatonegro = () => {

   
    return (
        <>

            <video
                className='escenario'>
                <source
                    src={Cap2G}
                />
            </video>


        </>

    )
}
