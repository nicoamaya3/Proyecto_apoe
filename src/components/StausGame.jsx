import { useState } from "react"

export const StausGame = () => {
  const [gemas, setGemas] = useState(0)
  const [vidas, setVidas] = useState()
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
        <button>Vida 1</button>
        <button>Vida 2</button>
        <button>Vida 3</button>
      </div>

    </>
  )
}
