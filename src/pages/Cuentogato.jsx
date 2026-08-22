import React from 'react'
import { Cuentoc } from '../components/Cuentoc'

export const Cuentogato = () => {
  return (
    <>
            <Cuentoc fon="url(./gatoN.jpg)" cat="Terror Psicológico
       " titu="EL GATO NEGRO" sinop="Frank, un niño conocido por su bondad y amor por los animales en Boston, se convierte en un hombre monstruoso consumido por el alcohol. Su primer acto de maldad es arrancar un ojo a su querido gato negro Plutón, y más tarde lo ahorca. Un segundo gato aparece con una mancha en forma de horca, y el odio crece hasta que asesina a su esposa Katherine. Oculta el cadáver tras una pared falsa, pero un escalofriante maullido del gato emparedado revela su terrible crimen." img1="./fra.png" img2="./cat.png" img3="./kat.png" linkk="/LecturaG" txbtn="Empezar a leer" />

       <div style={{ position: 'fixed', top: '30px', right: '20px', zIndex: '9999', width: '369px' }}>

    <iframe 
        data-testid="embed-iframe" 
        src="https://open.spotify.com/embed/track/1CqetFVvQeVIFwjVGk4WGr?utm_source=generator&si=d1a1675989144089" 
        width="100%" 
        height="152" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        style={{ borderRadius: '12px' }}
        title="Spotify Track"
    ></iframe>

    <img
        src="https://imgbb.host/images/MgfCi.png"
        alt="Overlay"
        className="img-fluid"
        style={{ position: 'absolute', top: '0', left: '0', zIndex: '-1', width: '100%', height: '100%' }}
    />

</div>


    </>
  )
}
