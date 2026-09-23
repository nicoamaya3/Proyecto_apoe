import React, { useRef, useState } from 'react'
import { div } from 'motion/react-client'
import Cap4C from "../../public/Videos/Corazón/Cap4.mp4";
import "../stylesheets/AnimacionCorazon.css";

export const Cap4corazon = () => {

  

    return (
        <>
            <video
                
                className='pantalla'>
                <source
                    src={Cap4C}
                />
            </video>
            
        </>
    )
}
