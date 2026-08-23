import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { Footer } from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import dataCrow from "../assets/dataCrow.json"
import LottieModule from "lottie-react";

const Lottie = LottieModule.default;

export const Cuentogato = () => {

const lottieRef = useRef()
  const lottieRefC = useRef()

  const manejarMouseEnter = () => {
    if (lottieRefC.current) {
      lottieRefC.current.stop();
      lottieRefC.current.play();
    }
  };

  useEffect(() => {
    // Creamos e inyectamos el script de Cusdis de manera segura
    const script = document.createElement('script');
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;

    const container = document.getElementById('cusdis_thread');
    if (container && !container.hasChildNodes()) {
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Creamos e inyectamos el script de Cusdis de manera segura
    const script = document.createElement('script');
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    
    const container = document.getElementById('cusdis_thread');
    if (container && !container.hasChildNodes()) {
      document.body.appendChild(script);
    }
  }, []);

  // 1. Inicializamos el estado leyendo de localStorage (o en 0 si no hay nada guardado)
  const [conteo, setConteo] = useState(() => {
    const guardado = localStorage.getItem('emojis_gato_negro');
    if (guardado) {
      return JSON.parse(guardado);
    }
    return {
      asustado: 0,
      enojado: 0,
      triste: 0,
      sorprendido: 0,
      aterrorizado: 0
    };
  });

  // 2. Cada vez que el conteo cambia, lo guardamos automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem('emojis_gato_negro', JSON.stringify(conteo));
  }, [conteo]);

  // Función para incrementar el contador de la emoción seleccionada
  const incrementar = (emocion) => {
    setConteo({
      ...conteo,
      [emocion]: conteo[emocion] + 1
    });
  };

  return (
    <div className="fondo3 d-flex flex-column justify-content-center align-items-center">

      <img className="deco position-absolute top-0 start-0" src="recursos/deco3.png" alt="" />

      <div className="volver container pt-4">
        <div className="row ps-3 justify-content-start">
          <div className="col-12 ms-5 ps-5 mb-5 mt-4">
            <Link className="btn btn-success rounded-pill px-4 fw-bold" to='/'> Volver</Link>
          </div>
        </div>
      </div>

      <section className='bg-black section3 rounded-5 d-flex flex-column justify-content-center align-items-center'>
        {/* Botón Volver arriba a la derecha / izquierda según diseño */}

        <div className="container mt-4 py-4">

          {/* TARJETA SUPERIOR PRINCIPAL (Con bordes grandes redondeados) */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 fondoTarjeta rounded-5 p-4 col-lg-10">
              <div className="p-5 rounded-5 border border-secondary shadow bg-dark text-center position-relative overflow-hidden"
                style={{ backgroundImage: 'url(./portadagato.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: 450, }}>

                {/* Capa oscura semitransparente para legibilidad */}
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', zIndex: '1' }}></div>

                <div className="position-relative w-50 mt-5 pt-5" style={{ zIndex: '2' }}>
                  <h1 className="fw-bold text-white t mb-4" style={{ fontSize: 60 }}>El gato negro</h1>
                  <p className="text-light mb-4">
                    Frank, un niño conocido por su bondad y amor por los animales en Boston, se convierte en un hombre monstruoso consumido por el alcohol...
                  </p>
                  <Link className="btn btn-danger rounded-pill px-4 py-2" to="/LecturaG">Empezar a leer</Link>
                </div>

              </div>
            </div>
          </div>

          {/* TÍTULO: PERSONAJES */}
          <div className="row text-center mb-4">
            <div className="col-12">
              <h2 className="fw-bold fontTitu" style={{ fontSize: '2rem' }}>PERSONAJES</h2>
            </div>
          </div>

          {/* BLOQUE DE FRANK (Imagen ovalada + Nombre y descripción) */}
          <div className="row justify-content-center align-items-center mb-4 g-4">
            <div className="col-12 col-lg-3 text-center">
              <div className="mx-auto rounded-pill border border-secondary d-flex align-items-center justify-content-center bg-black overflow-hidden" style={{ width: '130px', height: '200px' }}>
                <img src="./fra.png" alt="Frank" className="img-fluid" style={{ objectFit: 'cover', height: '100%' }} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h3 className="fontCa mb-2" style={{ fontSize: '1.8rem' }}>Frank</h3>
              <p className="font-monospace text-white-50">
                Descripción detallada de Frank y su transformación psicológica a lo largo de la historia de terror.
              </p>
            </div>
          </div>

          {/* TARJETA ALARGADA CENTRAL */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-9">
              <div className="p-3 h-100 rounded-pill border border-secondary bg-black text-center shadow">
                <span className="text-white">BANNER 3D</span>
              </div>
            </div>
          </div>

          {/* SECCIÓN INFERIOR (Caja con miniatura y puntos de carrusel) */}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9">

              <div className="d-flex align-items-center justify-content-between p-3 rounded-4 bg-black border border-secondary mb-4">
                <div className="d-flex align-items-center gap-3 w-100">
                  <div className="rounded-circle border border-danger p-1 bg-black" style={{ width: '60px', height: '60px' }}>
                    <img src="./cat.png" alt="Gato" className="rounded-circle w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                  <div className="w-100 pe-3">
                    <div className="progress bg-secondary" style={{ height: '8px' }}>
                      <div className="progress-bar bg-danger" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Puntos indicadores */}
              <div className="d-flex justify-content-center gap-3 mb-5">
                <span className="badge rounded-circle bg-danger p-2"></span>
                <span className="badge rounded-circle bg-secondary p-2"></span>
                <span className="badge rounded-circle bg-secondary p-2"></span>
                <span className="badge rounded-circle bg-secondary p-2"></span>
                <span className="badge rounded-circle bg-secondary p-2"></span>
              </div>

            </div>
          </div>

        </div>

        {/* REPRODUCTOR DE SPOTIFY FLOTANTE (Esquina superior derecha) */}
        <div style={{ position: 'fixed', top: '30px', right: '20px', zIndex: '9999', width: '369px' }}>
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/track/1CqetFVvQeVIFwjVGk4WGr?utm_source=generator&si=d1a1675989144089"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px' }}
            title="Spotify Track"
          ></iframe>

          <img
            src="https://imgbb.host/images/MgfCi.png"
            alt="Overlay"
            className="img-fluid"
            style={{ position: 'absolute', top: '0', left: '0', zIndex: '-1', width: '100%', height: '100%' }}
          />
        </div>

        <div className='contcirculo2 '>
              <div className='circ1 rounded-circle d-flex justify-content-center align-items-center'>
                <div className='circ2 rounded-circle d-flex justify-content-center align-items-center'>
                  <div onMouseEnter={manejarMouseEnter}>
                    <Lottie
                      className="crow"
                      lottieRef={lottieRefC}
                      animationData={dataCrow}
                      loop={false}
                      autoplay={false}
                    />
                  </div>
                </div>
              </div>
            </div>

        <div className='comentario2 p-3 text-white fontCa fs-6 m-4 mx-5 rounded-5 d-flex'>Escucha con atención, cuervo lector... Tu travesía por los rincones más oscuros está por comenzar</div>

        <div className='emojis mb-5'>
            {/* Contenedor flexible para distribuir los 5 emojis */}
              <div className="d-flex justify-content-around align-items-center flex-wrap gap-3">

                {/* Botón 1: Terrorífico / Grito */}
                <button
                  onClick={() => incrementar('aterrorizado')}
                  className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm"
                >
                  <span style={{ fontSize: '1.5rem' }}>😍</span>
                  <span className="badge bg-danger rounded-pill">{conteo.aterrorizado}</span>
                </button>

                {/* Botón 2: Enojado / Furioso */}
                <button
                  onClick={() => incrementar('enojado')}
                  className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm"
                >
                  <span style={{ fontSize: '1.5rem' }}>😡</span>
                  <span className="badge bg-danger rounded-pill">{conteo.enojado}</span>
                </button>

                {/* Botón 3: Triste */}
                <button
                  onClick={() => incrementar('triste')}
                  className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm"
                >
                  <span style={{ fontSize: '1.5rem' }}>😢</span>
                  <span className="badge bg-danger rounded-pill">{conteo.triste}</span>
                </button>

                {/* Botón 4: Asustado / Tensión */}
                <button
                  onClick={() => incrementar('asustado')}
                  className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm"
                >
                  <span style={{ fontSize: '1.5rem' }}>😨</span>
                  <span className="badge bg-danger rounded-pill">{conteo.asustado}</span>
                </button>

                {/* Botón 5: Sorprendido / Impactado */}
                <button
                  onClick={() => incrementar('sorprendido')}
                  className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm"
                >
                  <span style={{ fontSize: '1.5rem' }}>😲</span>
                  <span className="badge bg-danger rounded-pill">{conteo.sorprendido}</span>
                </button>

              </div>
        </div>


        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 fondo mb-5 col-lg-8 p-4 rounded-4 border border-secondary">
              <h3 className="text-white mb-4 fw-bold">Comentarios</h3>

              {/* Contenedor de Cusdis */}
              <div id="cusdis_thread"
                data-host="https://cusdis.com"
                data-app-id="acc6b049-f587-43b7-b8ba-b05918a2a6ff"
                data-page-id="cuento-gato"
                data-page-url={window.location.href}
                data-page-title="El Gato Negro"
              ></div>

            </div>
          </div>
        </div>


      </section>

      <div className="mt-5 w-100 d-flex justify-content-center align-items-end">
        <Footer />
      </div>

    </div>
  )
}