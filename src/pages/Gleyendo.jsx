import { useState, useRef } from "react";
import { Esc1Gatonegro } from "../components/Esc1Gatonegro.jsx";
import { Esc2gatonegro } from "../components/Esc2gatonegro.jsx";
import { Esc3gatonegro } from "../components/Esc3gatonegro.jsx";
import { Esc4gatonegro } from "../components/Esc4gatonegro.jsx";
import { Lect } from "../components/Lect";
import { ReproductorGa } from "../components/ReproductorGa.jsx";
import { Tutorial } from "../components/Tutorial.jsx";

export const Gleyendo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const carouselInnerRef = useRef(null);

  // Lista de componentes para este cuento y sus respectivos títulos
  const slides = [
    { component: <ReproductorGa />, title: "El gato negro: Portada" },
    { component: <Esc1Gatonegro />, title: "El gato negro: Escena 01" },
    { component: <Esc2gatonegro />, title: "El gato negro: Escena 02" },
    { component: <Esc3gatonegro />, title: "El gato negro: Escena 03" },
    { component: <Esc4gatonegro />, title: "El gato negro: Escena 04" }
  ];

  // Busca el elemento <video> dentro de la escena activa
  const getActiveVideo = () => {
    if (!carouselInnerRef.current) return null;
    return carouselInnerRef.current.querySelector('.carousel-item.active video');
  };

  // Detiene la reproducción del video actual
  const stopCurrentVideo = () => {
    const video = getActiveVideo();
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Acción de Reproducir / Pausar
  const togglePlayPause = (e) => {
    e.stopPropagation();
    const video = getActiveVideo();
    if (!video) {
      console.warn("No se encontró un elemento <video> en la escena activa.");
      return;
    }

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Acción de Reiniciar el video activo
  const handleRestart = (e) => {
    e.stopPropagation();
    const video = getActiveVideo();
    if (video) {
      video.currentTime = 0;
      video.play();
      setIsPlaying(true);
    }
  };

  // Acción de Siguiente Escena
  const handleNext = (e) => {
    if (e) e.stopPropagation();
    stopCurrentVideo();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Acción de Anterior Escena
  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    stopCurrentVideo();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Acción de Pantalla Completa
  const handleFullscreen = (e) => {
    e.stopPropagation();
    const video = getActiveVideo();
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="bg-black min-vh-100 text-white position-relative">
      <div className="container py-4">
        <div className="row justify-content-center">
          
          {/* Contenedor del Carrusel */}
          <div className="col-12 col-md-10 position-relative">
            
            {/* <Tutorial /> */}

            <div id="carouselExample" className="carousel slide position-relative">
              
              <div className="carousel-inner" ref={carouselInnerRef}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                  >
                    {slide.component}
                  </div>
                ))}
              </div>

              {/* Botón flotante lateral izquierdo (Retroceder) */}
              <button 
                type="button" 
                onClick={handlePrev}
                aria-label="Anterior"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10px',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  background: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src="src/assets/svg/retroceder.svg" 
                  alt="Retroceder" 
                  style={{ width: '24px', filter: 'invert(1)' }} 
                />
              </button>

              {/* Botón flotante lateral derecho (Avanzar) */}
              <button 
                type="button" 
                onClick={handleNext}
                aria-label="Siguiente"
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  zIndex: 10,
                  background: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src="src/assets/svg/siguiente.svg" 
                  alt="Avanzar" 
                  style={{ width: '24px', filter: 'invert(1)' }} 
                />
              </button>

            </div>

          </div>
        </div>

        {/* Barra Inferior Verde de Controles */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10">
            <div 
              className="d-flex flex-row justify-content-between align-items-center px-4 py-3 rounded-pill shadow"
              style={{ backgroundColor: '#2e6930', zIndex: 20, position: 'relative' }}
            >

              {/* Texto de la escena actual */}
              <div className="text-white fw-bold fs-5">
                <span>{slides[currentIndex].title}</span>
              </div>

              {/* Controles multimedia */}
              <div className="d-flex align-items-center gap-3">

                {/* Reiniciar */}
                <button 
                  type="button" 
                  className="btn p-0 border-0 bg-transparent" 
                  onClick={handleRestart} 
                  title="Reiniciar"
                >
                  <img 
                    src="src/assets/svg/volver.svg" 
                    alt="Reiniciar" 
                    style={{ width: '28px', cursor: 'pointer' }} 
                  />
                </button>

                {/* Anterior */}
                <button 
                  type="button" 
                  className="btn p-0 border-0 bg-transparent" 
                  onClick={handlePrev} 
                  title="Anterior"
                >
                  <img 
                    src="src/assets/svg/retroceder.svg" 
                    alt="Anterior" 
                    style={{ width: '28px', cursor: 'pointer' }} 
                  />
                </button>

                {/* Play / Pausa */}
                <button 
                  type="button" 
                  className="btn p-0 border-0 bg-transparent" 
                  onClick={togglePlayPause} 
                  title={isPlaying ? "Pausar" : "Play"}
                >
                  <img 
                    src={isPlaying ? "src/assets/svg/pausa.svg" : "src/assets/svg/play.svg"} 
                    alt={isPlaying ? "Pausa" : "Play"} 
                    style={{ width: '28px', cursor: 'pointer' }} 
                  />
                </button>

                {/* Siguiente */}
                <button 
                  type="button" 
                  className="btn p-0 border-0 bg-transparent" 
                  onClick={handleNext} 
                  title="Siguiente"
                >
                  <img 
                    src="src/assets/svg/siguiente.svg" 
                    alt="Siguiente" 
                    style={{ width: '28px', cursor: 'pointer' }} 
                  />
                </button>

                {/* Pantalla Completa */}
                <button 
                  type="button" 
                  className="btn p-0 border-0 bg-transparent" 
                  onClick={handleFullscreen} 
                  title="Pantalla Completa"
                >
                  <img 
                    src="src/assets/svg/expandir.svg" 
                    alt="Pantalla completa" 
                    style={{ width: '28px', cursor: 'pointer' }} 
                  />
                </button>

              </div>

            </div>
          </div>
        </div>

        {/* Componente Lect de tu cuento original */}
        <Lect cuento="url(./gatoN.jpg)" llin="/GatoNegro" nombreCap="Capítulo I — " />

      </div>
    </div>
  );
};