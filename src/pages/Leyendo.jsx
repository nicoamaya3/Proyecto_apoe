import { useState, useRef } from "react";
import { Cap1corazon } from "../components/Cap1corazon.jsx";
import { Cap2corazon } from "../components/Cap2corazon.jsx";
import { Cap3corazon } from "../components/Cap3corazon.jsx";
import { Cap4corazon } from "../components/Cap4corazon.jsx";
import { Lect } from "../components/Lect";
import { PortadaCorazon } from "../components/PortadaCorazon.jsx";
import { Portadacorazon1 } from "../components/Portadacorazon1.jsx";
import { Portadacorazon2 } from "../components/Portadacorazon2.jsx";
import { Portadacorazon3 } from "../components/Portadacorazon3.jsx";
import { ReproductorCap2 } from "../components/ReproductorCap2.jsx";
import "../stylesheets/AnimacionCorazon.css";

export const Leyendo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const carouselInnerRef = useRef(null);

  // Lista ordenada de tus componentes y títulos
  const slides = [
    { component: <Portadacorazon1 />, title: "El gato negro: Escena 01" },
    { component: <Cap1corazon />, title: "El gato negro: Escena 01" },
    { component: <PortadaCorazon />, title: "Portada Corazón" },
    { component: <ReproductorCap2 />, title: "El gato negro: Escena 02" },
    { component: <Cap2corazon />, title: "El gato negro: Escena 02" },
    { component: <Portadacorazon2 />, title: "Portada 2" },
    { component: <Cap3corazon />, title: "El gato negro: Escena 03" },
    { component: <Portadacorazon3 />, title: "Portada 3" },
    { component: <Cap4corazon />, title: "El gato negro: Escena 04" }
  ];

  // Busca el elemento <video> dentro de la escena activa
  const getActiveVideo = () => {
    if (!carouselInnerRef.current) return null;
    return carouselInnerRef.current.querySelector('.carousel-item.active video');
  };

  // Detiene la reproducción del video
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
      console.warn("No se encontró un elemento <video> en la diapositiva activa.");
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

  // Acción de Reiniciar
  const handleRestart = (e) => {
    e.stopPropagation();
    const video = getActiveVideo();
    if (video) {
      video.currentTime = 0;
      video.play();
      setIsPlaying(true);
    }
  };

  // Acción de Ir a la Siguiente Escena
  const handleNext = (e) => {
    if (e) e.stopPropagation();
    stopCurrentVideo();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Acción de Volver a la Escena Anterior
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
    <div className="fondo position-relative min-vh-100 bg-black text-white">
      <div className="container py-4">
        <div className="row justify-content-center">
          
          <div className="col-12 col-md-10 position-relative">
            
            {/* Carrusel Principal */}
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

              {/* Botones Flotantes Laterales sobre la imagen/video (Forzados con CSS visible) */}
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

        {/* Barra Verde Inferior de Controles (Como la imagen de referencia) */}
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

              {/* Botones de Control en la barra verde */}
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

                {/* Retroceder (Escena anterior) */}
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
                    src={isPlaying ? "src/assets/svg/detener.svg" : "src/assets/svg/play.svg"} 
                    alt={isPlaying ? "Pausa" : "Play"} 
                    style={{ width: '28px', cursor: 'pointer' }} 
                  />
                </button>

                {/* Avanzar (Escena siguiente) */}
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

      </div>
    </div>
  );
};