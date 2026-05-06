import { useEffect, useState } from "react"

export const NicolasRMPages = () => {
  const [character, setCharacter] = useState([])

  const getCharacter = async () => {

    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = res.json()

    console.log(data)

  }

  useEffect(() => {
    getCharacter()
  }, [])
  ()


  return (
    <>
    
    </>
  )
}
