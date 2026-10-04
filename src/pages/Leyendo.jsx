import { useState, useRef, useEffect } from "react";
import { Cap1corazon } from "../components/Cap1corazon.jsx";
import { Cap2corazon } from "../components/Cap2corazon.jsx";
import { Cap3corazon } from "../components/Cap3corazon.jsx";
import { Cap4corazon } from "../components/Cap4corazon.jsx";
import { Cap5corazon } from "../components/Cap5corazon.jsx";
import { PortadaCorazon } from "../components/PortadaCorazon.jsx";
import { Portadacorazon1 } from "../components/Portadacorazon1.jsx";
import { Portadacorazon2 } from "../components/Portadacorazon2.jsx";
import { Portadacorazon3 } from "../components/Portadacorazon3.jsx";
import { Portadacorazon4 } from "../components/Portadacorazon4.jsx";
import { ReproductorCap2 } from "../components/ReproductorCap2.jsx";
import { LotieFinalCorazon } from "../components/LotieFinalCorazon.jsx";
import "../stylesheets/AnimacionCorazon.css";

export const Leyendo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Estados para el progreso del video
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasVideo, setHasVideo] = useState(false);

  const carouselInnerRef = useRef(null);

  const slides = [
    { component: <Portadacorazon1 />, title: "Arrepentimiento" },
    { component: <Cap1corazon />, title: "El Corazón Delator: Escena 01" },
    { component: <PortadaCorazon />, title: "El inicio" },
    { component: <ReproductorCap2 />, title: "El Corazón Delator: Escena 02" },
    { component: <Cap2corazon />, title: "El Corazón Delator: Escena 02" },
    { component: <Portadacorazon2 />, title: "La noche" },
    { component: <Cap3corazon />, title: "El Corazón Delator: Escena 03" },
    { component: <Portadacorazon3 />, title: "Plan maestro" },
    { component: <Cap4corazon />, title: "El Corazón Delator: Escena 04" },
    { component: <Portadacorazon4 />, title: "La caida" },
    { component: <Portadacorazon4 />, title: "La caida" },
    { component: <Cap5corazon />, title: "El Corazón Delator: Escena 05" },
    { component: <LotieFinalCorazon />, title: "El Corazón Delator: Escena 05" },
  ];

  // Busca el elemento <video> dentro de la escena activa
  const getActiveVideo = () => {
    if (!carouselInnerRef.current) return null;
    return carouselInnerRef.current.querySelector('.carousel-item.active video');
  };

  // Escuchar eventos del video de la diapositiva activa
  useEffect(() => {
    const video = getActiveVideo();

    if (!video) {
      setHasVideo(false);
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
      return;
    }

    setHasVideo(true);
    setIsPlaying(!video.paused);
    setDuration(video.duration || 0);
    setCurrentTime(video.currentTime || 0);

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, [currentIndex]);

  // Detiene la reproducción del video
  const stopCurrentVideo = () => {
    const video = getActiveVideo();
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Reproducir / Pausar
  const togglePlayPause = (e) => {
    e.stopPropagation();
    const video = getActiveVideo();
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Reiniciar
  const handleRestart = (e) => {
    e.stopPropagation();
    const video = getActiveVideo();
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  // Siguiente Escena
  const handleNext = (e) => {
    if (e) e.stopPropagation();
    stopCurrentVideo();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  // Escena Anterior
  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    stopCurrentVideo();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Pantalla Completa
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

  // Buscar tiempo al hacer clic/arrastrar la barra de progreso
  const handleSeek = (e) => {
    const video = getActiveVideo();
    if (video && duration > 0) {
      const newTime = parseFloat(e.target.value);
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Formateador de segundos a MM:SS
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

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
            </div>
          </div>
        </div>

        {/* Barra de Controles e Indicadores */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10">
            <div 
              className="d-flex flex-column gap-2 px-4 py-3 rounded-4 shadow"
              style={{ backgroundColor: '#2e6930', zIndex: 20, position: 'relative' }}
            >
              {/* Barra de Progreso del Video (solo se muestra si la diapositiva tiene video) */}
              {hasVideo ? (
                <div className="d-flex align-items-center gap-2">
                  <span className="small text-white-50 font-monospace">
                    {formatTime(currentTime)}
                  </span>
                  
                  <div className="position-relative flex-grow-1 d-flex align-items-center">
                    <input
                      type="range"
                      className="form-range custom-progress-range"
                      min="0"
                      max={duration || 100}
                      step="0.1"
                      value={currentTime}
                      onChange={handleSeek}
                      style={{
                        cursor: "pointer",
                        accentColor: "#ffffff",
                        zIndex: 2
                      }}
                    />
                    <div 
                      className="progress position-absolute w-100" 
                      style={{ height: '6px', pointerEvents: 'none', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                    >
                      <div 
                        className="progress-bar bg-white" 
                        role="progressbar" 
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div>

                  <span className="small text-white-50 font-monospace">
                    {formatTime(duration)}
                  </span>
                </div>
              ) : (
                <div className="text-center text-white-50 small italic">
                  Esta diapositiva no contiene video
                </div>
              )}

              {/* Fila Inferior: Título + Botones */}
              <div className="d-flex flex-row justify-content-between align-items-center mt-1">
                {/* Texto de la escena actual */}
                <div className="text-white fw-bold fs-5">
                  <span>{slides[currentIndex].title}</span>
                </div>

                {/* Botones de Control */}
                <div className="d-flex align-items-center gap-3">
                  <button 
                    type="button" 
                    className="btn p-0 border-0 bg-transparent" 
                    onClick={handleRestart} 
                    title="Reiniciar"
                    disabled={!hasVideo}
                  >
                    <img 
                      src="src/assets/svg/volver.svg" 
                      alt="Reiniciar" 
                      style={{ width: '28px', cursor: hasVideo ? 'pointer' : 'default', opacity: hasVideo ? 1 : 0.5 }} 
                    />
                  </button>

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

                  <button 
                    type="button" 
                    className="btn p-0 border-0 bg-transparent" 
                    onClick={togglePlayPause} 
                    title={isPlaying ? "Pausar" : "Play"}
                    disabled={!hasVideo}
                  >
                    <img 
                      src={isPlaying ? "src/assets/svg/detener.svg" : "src/assets/svg/play.svg"} 
                      alt={isPlaying ? "Pausa" : "Play"} 
                      style={{ width: '28px', cursor: hasVideo ? 'pointer' : 'default', opacity: hasVideo ? 1 : 0.5 }} 
                    />
                  </button>

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

                  <button 
                    type="button" 
                    className="btn p-0 border-0 bg-transparent" 
                    onClick={handleFullscreen} 
                    title="Pantalla Completa"
                    disabled={!hasVideo}
                  >
                    <img 
                      src="src/assets/svg/expandir.svg" 
                      alt="Pantalla completa" 
                      style={{ width: '28px', cursor: hasVideo ? 'pointer' : 'default', opacity: hasVideo ? 1 : 0.5 }} 
                    />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};