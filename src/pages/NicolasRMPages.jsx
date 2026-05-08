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
          type: detalles.type[0].type.name

        }

      })



    )



    setPokemon(detallesPokemon.results)
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
        <div key={index} className="card m-5 w-25 p-1" style={{ width: "10rem" }}>
          <img src={char.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">{char.name}</h5>
            <p className="card-text ">Status:{char.status}</p>
            <p className="card-text ">Especies:{char.species}</p>
          </div>
        </div>
      ))}

      <h1>Tarjetas Pokemon (Nicolás) </h1>

      {pokemon.map((poke, index) => (
        <div key={index} className="card" style={{width: "10rem"}}>
          <img src={poke.image} class="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{poke.name}</h5>
              <p className="card-text">{poke.id}</p>
              <p className="card-text">{poke.type}</p>
              
            </div>
        </div>
      ))}


    </>
  )
}
