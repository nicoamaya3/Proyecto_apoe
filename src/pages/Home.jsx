import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cuentos } from "../components/Cuentos"
import "../stylesheets/General.css"
import { motion } from "motion/react"
import { Footer } from '../components/Footer';
import dataCrow from "../assets/dataCrow.json"
import LottieModule from "lottie-react";



function SkullCursorLink() {
  return (
    <a
      href="https://www.cursors-4u.com/cursor/2009/10/14/thick-skeleton-skull.html"
      target="_blank"
      rel="noopener noreferrer"
      title="Thick Skeleton Skull"
    >
      <img
        src="https://cur.cursors-4u.net/cursor.png"
        alt="Thick Skeleton Skull"
        style={{ position: 'absolute', top: '0px', right: '0px' }}
      />
    </a>
  );
}

const Lottie = LottieModule.default;

export default SkullCursorLink;


export const Home = () => {

  const lottieRef = useRef()
  const lottieRefC = useRef()

  const manejarMouseEnter = () => {
    if (lottieRefC.current) {
      lottieRefC.current.stop();
      lottieRefC.current.play();
    }
  };

  const textoRef = useRef(null);
  const botonRef = useRef(null)

  useEffect(() => {
    const lineas = textoRef.current.querySelectorAll('.linea-animada');
    const tl = gsap.timeline();

    tl.fromTo(lineas,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: "power2.out" }
    )
      // 2. Agregamos la animación del botón justo después
      .fromTo(botonRef.current,
        { opacity: 0, scale: 0.5 }, // Comienza invisible y pequeño
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, // Aparece con un rebote suave
        "-=0.4" // Esto hace que la animación del botón empiece un poco antes de que termine la del texto para fluir mejor
      );

  }, []);

  return (
    <>

      <section className="bg-black">

        <img className="deco" src="recursos/deco.png" alt="" />

        <div className="container-fluid foo">

          <section className="bg-transparent d-flex justify-content-center">
            <motion.div className="w-25"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", duration: 1 }}>
              <div className="banda bg-black d-flex align-items-center justify-content-center me-5 rounded-bottom-5 w-100 h-50 pb-2 pt-2 ">
                <p className=" p-home text-white fs-6  text-center pt-3">Apoe!</p>
              </div>
            </motion.div>
          </section>
          <img className="poe" src="recursos/poe.png" alt="" />
          <div className="row">
            <div className="col p-5 d-flex align-items-center justify-content-center">
              <div className="info-home d-flex flex-row-reverse w-75 p-5 justify-content-end rounded-5">
                <div className="info d-flex align-items-center justify-content-center flex-column w-100">
                  <div className="">
                    <img className="apoel pb-3" src="iconos/logo.png" alt="" />
                  </div>
                  <p ref={textoRef} className="w-100 fs-5 text-center text-white">
                    <span className="linea-animada d-block">Reconecta con el placer de la lectura a través de</span>
                    <span className="linea-animada d-block"> cuentos ilustrados e interactivos basados en las</span>
                    <span className="linea-animada d-block"> obras maestras de Edgar Allan Poe.</span>
                  </p>
                  <button ref={botonRef} className="btn btn-danger rounded-5">Leer cuentos</button>
                </div>
              </div>
            </div>
          </div>

          <section className='m-5 pt-5 section2 d-flex justify-content-center align-items-center z-3 flex-column h-100'>

            <div className='contcirculo'>
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

            <div className='comentario1 p-3 text-white fontCa fs-6 m-4 rounded-5 d-flex'>Escucha con atención, cuervo lector... Tu travesía por los rincones más oscuros está por comenzar</div>

            <div className='tuto2 text-white d-flex flex-column p-4 rounded-5 align-items-center justify-content-center'>

              {/* Título */}
              <h2 className='w-75 text-center text-white t mb-4'>¿Cómo funciona la interactividad de los cuentos?</h2>

              {/* Contenedor en fila de Bootstrap para organizar carrusel y texto lado a lado */}
              <div className='row align-items-center justify-content-center w-100 g-4 px-3'>

                {/* Columna del Carrusel */}
                <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
                  <div id="carouselExampleControls" className="carousel slide w-100" data-ride="carousel" style={{ maxWidth: '450px', boxShadow: '0 4px 40px rgba(0, 0, 0, 0.2)' }}>
                    <div className="carousel-inner rounded-4 overflow-hidden">
                      <div className="carousel-item active">
                        <img className="d-block w-100 img-fluid" src="./public/cap1.png" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src="..." alt="Second slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src="..." alt="Third slide" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>

                {/* Columna del Texto y Botón */}
                <div className='col-lg-6 col-md-12 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start'>
                  <p className='fs-6 mb-4'>
                    Cada relato cuenta con su propia página inmersiva para una lectura profunda, encontrarás objetos alumbrados en los capítulos que revelan sorpresas interactivas al hacerles clic, y podrás compartir tus teorías e impresiones comentando en el foro de la comunidad sobre qué te pareció la obra.
                  </p>
                  <div className='d-flex justify-content-center align-items-center w-100'>
                    <button className="btn btn-danger rounded-5 px-4 py-2">
                      Leer cuentos
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </section>



          <Cuentos />

        </div>

        <div className="d-flex justify-content-center fondo">
          <Footer />
        </div>



      </section>


    </>
  )
}

