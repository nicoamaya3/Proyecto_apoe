import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import Cap2C from "../../public/Videos/Corazón/Capitulo2-Sec2.mp4";
import "../stylesheets/AnimacionCorazon.css";


export const Cap2corazon = () => {



    return (
        <>
            <video
                
                className='pantalla'>
                <source
                    src={Cap2C}
                />
            </video>
           
        </>
    )
}
