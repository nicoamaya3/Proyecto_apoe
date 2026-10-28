import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import Cap3C from "../../public/Videos/Corazón/Cap3.mp4";
import "../stylesheets/AnimacionCorazon.css";

export const Cap3corazon = () => {


    return (
        <>
            <video
               
                className='pantalla'>
                <source
                    src={Cap3C}
                />
            </video>
        
        </>
    )
}
