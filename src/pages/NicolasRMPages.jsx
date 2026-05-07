import { useEffect, useState } from "react"

export const NicolasRMPages = () => {
  const [character, setCharacter] = useState([])
   const [pokemon, setPokemon] = useState([])

  const getCharacter = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    setCharacter(data.results)
    console.log(data)

  }

  useEffect(() => {
    getCharacter()
  }, [])

  const getPokemon = async () => {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const data = await res.json()
    setPokemon(data.results)
    console.log(data)

  }

  useEffect(() => {
    getCharacter()
    getPokemon()
  }, [])




  return (
    <>

      <h1>Personajes de Rick and  Morty </h1>


      {character.map((char, index) => (
        <div key={index} className="card m-5 w-25 p-1" style={{ width: "18rem;" }}>
          <img src={char.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">{char.name}</h5>
            <p className="card-text ">Status:{char.status}</p>
            <p className="card-text ">Especies:{char.species}</p>
          </div>
        </div>
      ))}



    </>
  )
}
