import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const MarianaRMPage = () => {

  const [characters, setCharacters] = useState([])

  const getCharacters = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()

    setCharacters(data.results)

    console.log(data)
  }

 

  const [pokemon, setPokemon] = useState([])

  const getPokemon = async () => {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
    const data = await res.json()

    const detallesPokemon = await Promise.all(

      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const detalles = await res.json()

        return {
          id: detalles.id,
          name: detalles.name,
          image: detalles.sprites.other["official-artwork"].front_default,
          type: detalles.types[0].type.name,
        }
      })

    )


    setPokemon(detallesPokemon)
    
  }

   useEffect(() => {
    getCharacters()
    getPokemon()
  }, [])


  return (
    <>
      <div className='container'>
        <div className="row">

          <h1 className='m-5 text-success  text-3xl fw-bold'>PERSONAJES DE RICK AND MORTY (Mariana)</h1>

          {characters.map((char, index) => (
            <div key={index} className="card m-5 p-1" style={{ width: '18rem' }}>
              <img src={char.image} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">Status: {char.status}</p>
                <p className="card-text">Species: {char.species}</p>
                <p className="card-text">Gender: {char.gender}</p>
              </div>
            </div>
          ))}
        </div>

      </div>


      <div className="container ">
          <div className="row">


        <h1 className=' m-5 text-success text-center text-3xl fw-bold'>POKEMONES (Mariana)</h1>


        {pokemon.map((poke, index) => (
          <div key={index} className="card m-5 p-1" style={{ width: '18rem' }}>
            <img src={poke.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{poke.name}</h5>
              <p className="card-text">Type: {poke.type}</p>
            </div>
          </div>
        ))}
        </div>

      </div>

    </>
  )
}
