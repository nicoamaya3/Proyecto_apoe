import { useState, useRef, useEffect } from "react";
import { Cap1corazon } from "../components/Cap1corazon.jsx";
import { Cap2corazon } from "../components/Cap2corazon.jsx";
import { Cap3corazon } from "../components/Cap3corazon.jsx";
import { Cap4corazon } from "../components/Cap4corazon.jsx";
import { Cap5corazon } from "../components/Cap5corazon.jsx";
import { ReproductorCap2 } from "../components/ReproductorCap2.jsx";
import { LotieFinalCorazon } from "../components/LotieFinalCorazon.jsx";
import SubtitulosCap1 from "../../public/Videos/DialogosCorazon/dialogoCap1.mp4";
import SubtitulosCap2 from "../../public/Videos/DialogosCorazon/dialogoCap2.mp4";
import SubtitulosCap3 from "../../public/Videos/DialogosCorazon/dialogoCap3.mp4";
import SubtitulosCap4 from "../../public/Videos/DialogosCorazon/dialogoCap4.mp4";
import SubtitulosCap5 from "../../public/Videos/DialogosCorazon/dialogoCap5.mp4";
import salir from "../assets/svg/salir.svg";
import "../stylesheets/AnimacionCorazon.css";
import { Link } from "react-router-dom"

export const Leyendo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Estado para activar/desactivar subtítulos
  const [showSubtitles, setShowSubtitles] = useState(false);

  // Estados para el progreso del video
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasVideo, setHasVideo] = useState(false);

  const carouselInnerRef = useRef(null);
  const subtitleVideoRef = useRef(null);
  const progressBarRef = useRef(null);

  // Mapeo de subtítulos por índice de diapositiva (Índice 1: ReproductorCap2 excluido)
  const subtitlesMap = {
    0: SubtitulosCap1, // Cap1corazon
    // 1: ReproductorCap2 (Sin subtítulo)
    2: SubtitulosCap2, // Cap2corazon
    3: SubtitulosCap3, // Cap3corazon
    4: SubtitulosCap4, // Cap4corazon
    5: SubtitulosCap5, // Cap5corazon
  };

  const currentSubtitleSrc = subtitlesMap[currentIndex];

  const slides = [
    { component: <Cap1corazon showSubtitles={showSubtitles} subtitleSrc={SubtitulosCap1} />, title: "Capítulo 1: Arrepentimiento" },
    { component: <ReproductorCap2 />, title: "Capítulo 2: El inicio" },
    { component: <Cap2corazon />, title: "Capítulo 2: El inicio" },
    { component: <Cap3corazon />, title: "Capítulo 3: La noche" },
    { component: <Cap4corazon />, title: "Capítulo 4: Plan maestro" },
    { component: <Cap5corazon />, title: "Capítulo 5: La caída" },
    { component: <LotieFinalCorazon />, title: "Capítulo 5: El final" },
  ];

  const getActiveVideo = () => {
    if (!carouselInnerRef.current) return null;
    return carouselInnerRef.current.querySelector('.carousel-item.active video');
  };

  // Sincronización del video de subtítulos
  useEffect(() => {
    const mainVideo = getActiveVideo();
    const subVideo = subtitleVideoRef.current;

    if (mainVideo && subVideo && currentSubtitleSrc) {
      if (isPlaying) {
        subVideo.play().catch(() => { });
      } else {
        subVideo.pause();
      }
      subVideo.currentTime = mainVideo.currentTime;
    }
  }, [isPlaying, currentTime, currentIndex, currentSubtitleSrc]);

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

  const stopCurrentVideo = () => {
    const video = getActiveVideo();
    if (video) {
      video.pause();
      setIsPlaying(false);
    }
    if (subtitleVideoRef.current) {
      subtitleVideoRef.current.pause();
    }
  };

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

  const toggleSubtitles = (e) => {
    e.stopPropagation();
    setShowSubtitles((prev) => !prev);
  };

  const handleRestart = (e) => {
    e.stopPropagation();
    const video = getActiveVideo();
    if (video) {
      video.currentTime = 0;
      video.play();
    }
    if (subtitleVideoRef.current) {
      subtitleVideoRef.current.currentTime = 0;
    }
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    stopCurrentVideo();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    stopCurrentVideo();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

  const handleBarClick = (e) => {
    const video = getActiveVideo();
    if (!video || !duration || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = clickPosition * duration;

    video.currentTime = newTime;
    if (subtitleVideoRef.current) {
      subtitleVideoRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSalir = () => {
    stopCurrentVideo();
    console.log("Saliendo...");
  };

  return (
    <div className="fondo bg-black text-white d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', width: '100%' }}>
      <div className="container-fluid py-4 px-3 px-md-5" style={{ maxWidth: '1200px' }}>
        <div className="row justify-content-center align-items-center">

          <div className="col-12 col-xl-10 position-relative">

            {/* Botón Salir en la esquina superior derecha */}
            <Link to="/Delator"
              type="button"
              className="btn p-0 border-0 bg-transparent position-absolute"
              onClick={handleSalir}
              title="Salir"
              style={{
                top: '10px',
                right: '-270px',
                zIndex: 30,
              }}
            >
              <img
                src={salir}
                alt="Salir"
                style={{ width: '60px', cursor: 'pointer' }}
              />
            </Link>

            {/* Carrusel Principal */}
            <div id="carouselExample" className="carousel slide position-relative">

              {/* MARCO DECORATIVO */}
             <img
                src="/ladoizq.png"
                alt="Marco decorativo"
                className="position-absolute"
                style={{
                  top: -25,
                  left: -100,
                  width: '50%',
                  height: '110%',
                  pointerEvents: 'none', 
                  objectFit: 'fill',
                  opacity:'70%'     
                }}
              /> 
              <img
                src="/ladoder.png"
                alt="Marco decorativo"
                className="position-absolute"
                style={{
                  top: -25,
                  right: -100,
                  width: '50%',
                  height: '110%',
                  pointerEvents: 'none', 
                  objectFit: 'fill',
                  opacity:'70%'     
                }}
              /> 

              <div className="carousel-inner" ref={carouselInnerRef}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? "active" : ""} position-relative`}
                  >
                    {slide.component}

                    {/* Subtítulos superpuestos completos */}
                    {index === currentIndex && showSubtitles && currentSubtitleSrc && (
                      <div
                        className="position-absolute d-flex align-items-center justify-content-center"
                        style={{
                          bottom: '3.5%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '61.5%',
                          height: '21.5%',
                          backgroundColor: 'black',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          opacity: 0.8,
                          zIndex: 10,
                          pointerEvents: 'none'
                        }}
                      >
                        <video
                          ref={subtitleVideoRef}
                          src={currentSubtitleSrc}
                          className="w-100 h-100"
                          style={{
                            objectFit: 'contain'
                          }}
                          muted
                          playsInline
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barra Verde Inferior de Controles */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-xl-10">
            <div
              className="d-flex flex-column gap-2 px-4 py-3 rounded-4 shadow"
              style={{ backgroundColor: '#2e6930', zIndex: 20, position: 'relative' }}
            >

              {/* Barra de Progreso del Video */}
              {hasVideo ? (
                <div className="d-flex align-items-center gap-2">
                  <span className="small text-white-50 font-monospace">
                    {formatTime(currentTime)}
                  </span>

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
                        transition: 'width 0.1s linear'
                      }}
                    ></div>
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

                <div className="text-white fw-bold fs-5">
                  <span>{slides[currentIndex].title}</span>
                </div>

                <div className="d-flex align-items-center gap-3">

                  {/* Botón CC */}
                  {currentSubtitleSrc && (
                    <button
                      type="button"
                      className={`btn btn-sm ${showSubtitles ? 'btn-light text-dark fw-bold' : 'btn-outline-light'} px-2 py-1`}
                      onClick={toggleSubtitles}
                      title={showSubtitles ? "Ocultar Subtítulos" : "Mostrar Subtítulos"}
                      style={{ fontSize: '12px', borderRadius: '6px' }}
                    >
                      CC {showSubtitles ? "ON" : "OFF"}
                    </button>
                  )}

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
                      src={isPlaying ? "src/assets/svg/detener.svg" : "src/assets/svg/play.svg"}
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