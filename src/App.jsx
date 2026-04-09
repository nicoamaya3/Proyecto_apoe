
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header.jsx"
import { Home } from "./pages/Home.jsx"
import { Inicioseccion } from "./pages/Inicioseccion.jsx"
import { Nosotros } from "./pages/Nosotros.jsx"
import { Foter } from "./components/Foter.jsx"






export const App = () => {
  return (

    <>
    <BrowserRouter>
    
    <Routes>


      <Route/>

    </Routes>
    
    
    
    </BrowserRouter>


      <Header />
      <Home />
      <Inicioseccion />
      <Nosotros />
      <Foter/>


    </>

  )
}
