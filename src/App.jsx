import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { ContactosFijos } from "./components/contactofijo.jsx";
import { Home } from "./pages/Home.jsx";
import { Inicioseccion } from "./pages/Inicioseccion.jsx";
import { Nosotros } from "./pages/Nosotros.jsx";
import { Cuentocora } from "./pages/Cuentocora.jsx";
import { Cuentogato } from "./pages/Cuentogato.jsx";
import { Leyendo } from "./pages/Leyendo.jsx";
import { Gleyendo } from "./pages/Gleyendo.jsx";
import { Cuentos } from "./components/Cuentos.jsx";
import { LotieNicolas } from "./components/LotieNicolas.jsx";
import { LootieMari } from "./components/LootieMari.jsx";
import { Poe } from "./pages/Poe.jsx";
import SplashCursor from './SplashCursor';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' 
    });
  }, [pathname]);

  return null;
};

export const App = () => {

  useEffect(() => {
    const handleGlobalClick = () => {
      const audio = new Audio('/sonidos/click.mp3'); 
      audio.volume = 0.4;
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.log("Audio en espera de interacción", error);
      });
    };

    window.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <>
      <SplashCursor
        rainbow={false}
        colors={['#40131f', '#9f2c2cb8', '#edddd561']}
        colorSpeed={1}
        intensity={1}
        size={1}
        force={1}
        swirl={3}
        trail={1}
        clickSplash={true}
        momentum={1}
        shading={1}
        quality="high"
        intro
        contained={false}
      />

      <BrowserRouter>
        <ContactosFijos/>
        <ScrollToTop />
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Perfil" element={<Inicioseccion />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Delator" element={<Cuentocora />} />
          <Route path="/GatoNegro" element={<Cuentogato />} />
          <Route path="/LecturaC" element={<Leyendo />} />
          <Route path="/LecturaG" element={<Gleyendo />} />
          <Route path="/Cuentos" element={<Cuentos />} />
          <Route path="/Poe" element={<Poe />} />
          <Route path="/LootieNico" element={<LotieNicolas />} />
          <Route path="/LootieMari" element={<LootieMari />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};