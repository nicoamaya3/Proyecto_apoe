import React from 'react'

export const ReproductorMari = () => {
  return (
    <>

    <h1>Reproductor de Mariana</h1>

    <video width={700}>
        <source 
        src='https://www.w3schools.com/Html/mov_bbb.mp4'
        type='Video/mp4' 
        />
    </video>

    <div>
        <button>Play</button>
        <button>Pause</button>
    </div>

    </>
  )
}


