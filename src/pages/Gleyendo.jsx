import { useState, useRef, useEffect } from "react";
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

  // Estados para el progreso del video
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasVideo, setHasVideo] = useState(false);

  const carouselInnerRef = useRef(null);
  const progressBarRef = useRef(null); // Referencia para hacer clic en la barra

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

  // Escuchar eventos del video de la escena activa
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
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Acción de Reiniciar el video activo
  const handleRestart = (e) => {
    e.stopPropagation();
    const video = getActiveVideo();
    if (video) {
      video.currentTime = 0;
      video.play();
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

  // Permite hacer clic en cualquier parte de la barra para adelantar o retroceder el video
  const handleBarClick = (e) => {
    const video = getActiveVideo();
    if (!video || !duration || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width; // Posición porcentual del clic (0 a 1)
    const newTime = clickPosition * duration;

    video.currentTime = newTime;
    setCurrentTime(newTime);
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
    <div className="bg-black min-vh-100 text-white position-relative">
      <div className="container py-4">
        <div className="row justify-content-center">
          
          {/* Contenedor del Carrusel */}
          <div className="col-12 col-md-10 position-relative">
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

        {/* Barra Inferior Verde de Controles */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10">
            <div 
              className="d-flex flex-column gap-2 px-4 py-3 rounded-4 shadow"
              style={{ backgroundColor: '#2e6930', zIndex: 20, position: 'relative' }}
            >

              {/* Barra de Progreso del Video Interactiva */}
              {hasVideo ? (
                <div className="d-flex align-items-center gap-2">
                  <span className="small text-white-50 font-monospace">
                    {formatTime(currentTime)}
                  </span>
                  
                  {/* Contenedor clickeable de la barra de progreso */}
                  <div 
                    ref={progressBarRef}
                    onClick={handleBarClick}
                    className="progress flex-grow-1 rounded-pill position-relative" 
                    style={{ 
                      height: '10px', 
                      cursor: 'pointer', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)' 
                    }}
                    title="Hacer clic para adelantar/retroceder"
                  >
                    <div 
                      className="progress-bar rounded-pill" 
                      role="progressbar" 
                      style={{ 
                        width: `${progressPercent}%`, 
                        backgroundColor: '#3F131F',
                        transition: 'width 0.1s linear' // Suaviza el movimiento del llenado
                      }}
                    ></div>
                  </div>

                  <span className="small text-white-50 font-monospace">
                    {formatTime(duration)}
                  </span>
                </div>
              ) : (
                <div className="text-center text-white-50 small italic">
                  Esta escena no contiene video
                </div>
              )}

              {/* Fila Inferior: Título + Botones */}
              <div className="d-flex flex-row justify-content-between align-items-center mt-1">
                
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
                    disabled={!hasVideo}
                  >
                    <img 
                      src="src/assets/svg/volver.svg" 
                      alt="Reiniciar" 
                      style={{ width: '28px', cursor: hasVideo ? 'pointer' : 'default', opacity: hasVideo ? 1 : 0.5 }} 
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
                    disabled={!hasVideo}
                  >
                    <img 
                      src={isPlaying ? "src/assets/svg/Detener.svg" : "src/assets/svg/play.svg"} 
                      alt={isPlaying ? "Pausa" : "Play"} 
                      style={{ width: '28px', cursor: hasVideo ? 'pointer' : 'default', opacity: hasVideo ? 1 : 0.5 }} 
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