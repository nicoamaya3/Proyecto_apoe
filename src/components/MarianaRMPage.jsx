import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const MarianaRMPage = () => {
    
    const [characters, setCharacters] = useState([])
    
    const getCharacters = async () => {

        const res  = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()

        console.log(data)
    }

    useEffect(() => {   
        getCharacters()
    }, [])
    

  return (
    <>
    


    </>
)
}
