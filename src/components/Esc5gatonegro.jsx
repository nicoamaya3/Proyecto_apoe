import React from 'react'
import Cap5G from "../../public/Videos/GatoNegro/Capi5.mp4";
import "../stylesheets/AnimacionGato.css";

export const Esc5gatonegro = () => {
    return (
        <>

            <video

                className='escenario'>
                <source
                    src={Cap5G}
                />
            </video>

        </>
    )
}
