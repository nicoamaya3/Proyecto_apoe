import { useState } from "react"

export const StausGame = () => {
  const [gemas, setGemas] = useState(0)
  const [vidas, setVidas] = useState()
  const [character, setCharacter] = useState(0);

  return (
    <>

      <div className="gemas">
        <h1>Gemas</h1>
        <button onClick={() => setGemas(prev => prev + 1)}>Gema 1</button>
        <button onClick={() => setGemas(prev => prev + 2)}>Gema 2</button>
        <button onClick={() => setGemas(prev => prev + 3)}>Gema 3</button>
      </div>


      <div className="vidas">
        <h1>Vidas</h1>
        <button>Vida 1</button>
        <button>Vida 2</button>
        <button>Vida 3</button>
      </div>

    </>
  )
}
