import React from 'react'
import Cap5C from "../../public/Videos/Corazón/Cap5.mp4";
import "../stylesheets/AnimacionCorazon.css";

export const Cap5corazon = () => {
    return (
        <>

            <video
                className='pantalla'>
                <source
                    src={Cap5C}
                />
            </video>

        </>
    )
}
