import { useEffect, useState } from "react"

export const NicolasRMPages = () => {
  const [character, setCharacter] = useState([])

  const getCharacter = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    setCharacter(data.results)
    console.log(data)

  }

  useEffect(() => {
    getCharacter()
  }, [])



  return (
    <>

      <h1>Personajes de Rick and  Morty </h1>

      <ul>
        {character.map((char, index) => (
          <li key={index} >
            <p> {char.name} </p>
          </li>
        ))}
      </ul>

      <div className="card" style={{width: "18rem;"}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </>
  )
}
