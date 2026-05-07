import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const MarianaRMPage = () => {
    
    const [characters, setCharacters] = useState([])
    
    const getCharacters = async () => {

        const res  = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()

        setCharacters(data.results)

        console.log(data)
    }

    useEffect(() => {   
        getCharacters()
    }, [])
    
    const [pokemons, setPokemons] = useState([])
    
    const getPokemons = async () => {

        const res  = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await res.json()

        setPokemons(data.results)

        console.log(data)
    }

    useEffect(() => {   
        getPokemons()
    }, [])

  return (
    <>
    <div className='container d-flex flex-wrap'>

    <h1 className=' m-5 text-success  text-3xl fw-bold'>PERSONAJES DE RICK AND MORTY</h1>
    
      {characters.map((char, index) => (
    <div key={index} className="card m-5 p-1" style={{ width: '18rem' }}>
      <img src={char.image} className="card-img-top" alt=""/>
      <div className="card-body">
      <h5 className="card-title">{char.name}</h5>
      <p className="card-text">Status: {char.status}</p>
      <p className="card-text">Species: {char.species}</p>
      <p className="card-text">Gender: {char.gender}</p>
      </div>
    </div>
      ))}
    
    </div>


    <div className="container d-flex flex-wrap">

    <h1 className=' m-5 text-success text-center text-3xl fw-bold'>POKEMONES</h1>

     {pokemons.map((poke, index) => (
       <div key={index} className="card m-5 p-1" style={{ width: '18rem' }}>
      <img src={poke.url} className="card-img-top" alt=""/>
      <div className="card-body">
      <h5 className="card-title">{poke.name}</h5>
      <p className="card-text">Weight: {poke.weight}</p>
      </div>
    </div>
      ))}

      </div>
      
    </>
)
}
