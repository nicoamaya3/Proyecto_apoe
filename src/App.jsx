
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header.jsx"
import { Home } from "./pages/Home.jsx"
import { Inicioseccion } from "./pages/Inicioseccion.jsx"
import { Nosotros } from "./pages/Nosotros.jsx"
import { Foter } from "./components/Foter.jsx"
import { Cuentocora } from "./pages/Cuentocora.jsx"
import { Cuentogato } from "./pages/Cuentogato.jsx"
import { Lect } from "./components/Lect.jsx"
import { Leyendo } from "./pages/Leyendo.jsx"
import { Gleyendo } from "./pages/Gleyendo.jsx"






export const App = () => {
  return (

    <>
      <BrowserRouter>

      <Header />

        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/Perfil" element= {<Inicioseccion />} />
          <Route path="/Nosotros" element= {<Nosotros />} />
          <Route path="/Delator" element= {<Cuentocora />} />
          <Route path="/GatoNegro" element= {<Cuentogato />} />
          <Route path="/LecturaC" element= {<Leyendo />} />
          <Route path="/LecturaG" element= {<Gleyendo />} />

        </Routes>

        <Foter />

      </BrowserRouter>


      
      
      
      
      
      
      
      
      


    </>

  )
}
