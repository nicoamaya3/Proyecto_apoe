import { useState } from "react"

export const StausGame = () => {
  const [gemas, setGemas] = useState(0)
  const [vidas, setVidas] = useState(0)
  const [character, setCharacter] = useState(0);

  return (
    <>

      <div className="gemas">
        <h1>Gemas</h1>
        <button>Gema 1</button>
        <button>Gema 2</button>
        <button>Gema 3</button>
      </div>


      <div className="vidas">
        <h1>Vidas</h1>
        <button onClick={() => setVidas(prev => prev + 1)}>Vida 1</button>
        <button onClick={() => setVidas(prev => prev + 3)}>Vida 2</button>
        <button onClick={() => setVidas(prev => prev + 2)}>Vida 3</button>
      </div>

    </>
  )
}
