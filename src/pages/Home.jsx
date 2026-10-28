import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cuentos } from "../components/Cuentos"
import "../stylesheets/General.css"
import { motion } from "motion/react"
import { Footer } from '../components/Footer';
import dataCrow from "../assets/dataCrow.json"
import datafrank from "../assets/datafrank.json"
import dataTakeshi from "../assets/dataTakeshi.json"
import LottieModule from "lottie-react";
import { Banda } from '../components/Banda';

const Lottie = LottieModule.default;

export const Home = () => {

  const lottieRef = useRef()
  const lottieRefC = useRef()
  const lottieReff = useRef()
  const lottieReft = useRef()

  const manejarMouseEnter = () => {
    if (lottieRefC.current) {
      lottieRefC.current.stop();
      lottieRefC.current.play();
    }
  };

  const manejarMouseEnterf = () => {
    if (lottieReff.current) {
      lottieReff.current.stop();
      lottieReff.current.play();
    }
  };

  const manejarMouseEntert = () => {
    if (lottieReft.current) {
      lottieReft.current.stop();
      lottieReft.current.play();
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
      .fromTo(botonRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.4"
      );

  }, []);

  return (
    <>
      <section className="bg-black">

        <img className="deco" src="recursos/deco.png" alt="" />

        <div className="container-fluid foo">

          <section className="bg-transparent d-flex justify-content-center mb-5">
            <Banda />
          </section>
          <img className="poe" src="recursos/poe.png" alt="" />
          <div className="row">

            <div className="col p-5 d-flex align-items-center justify-content-center">
              <div className="info-home glow-box d-flex flex-row-reverse w-75 p-5 justify-content-end rounded-5">
                <div className="info d-flex align-items-center justify-content-center flex-column w-100">
                  <div className="">
                    <img className="apoel glow-img pb-3" src="iconos/logo.png" alt="" />
                  </div>
                  <p ref={textoRef} className="w-100 fs-5 text-center text-white">
                    <span className="linea-animada d-block">Reconecta con el placer de la lectura a través de</span>
                    <span className="linea-animada d-block"> cuentos ilustrados e interactivos basados en las</span>
                    <span className="linea-animada d-block"> obras maestras de Edgar Allan Poe.</span>
                  </p>
                  <button
                    ref={botonRef}
                    className="btn btn-danger glow-btn rounded-5 fw-light"
                    onClick={() => {
                      const seccion = document.getElementById('seccion-cuentos');
                      if (seccion) {
                        seccion.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Leer cuentos
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center z-3">
              <img
                src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
                alt="Animación"
                className="img-fluid rounded-4 glow-img glow-effect"
              />
            </div>
          </div>


          <section className='m-5 pt-5 section2 d-flex justify-content-center align-items-center z-3 flex-column h-100'>

            <section className='sectioncuervo'>

              {/* Cuervo de la parte inferior izquierda */}
              <div className='contcirculo3'>
                <div className='circ1 glow-box rounded-circle d-flex justify-content-center align-items-center'>
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

            </section>

            <div className='comentario1 p-3 text-white fontCa m-4 rounded-5 d-flex glow-box' style={{ fontSize: '18px' }}>Escucha con atención, cuervo lector... Tu travesía por los rincones más oscuros está por comenzar</div>

            <div className='glow-box tuto2 text-white d-flex flex-column p-4 rounded-5 align-items-center justify-content-center'>

              <h2 className=' glow-text w-75 text-center text-white t mb-4 pt-4'>¿Cómo funciona la interactividad de los cuentos?</h2>

              <div className='row align-items-center justify-content-center w-100 g-4 px-3'>

                <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
                  <div className="carousel-inner rounded-4 overflow-hidden">
                    <div className="carousel-item active">
                      <img className="d-block w-100 img-fluid" src="./public/cap1.png" alt="First slide" />
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-12 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start'>
                  <p className='fs-5 pt-4 mb-4'>
                    Cada relato cuenta con su propia página inmersiva para una lectura dinámica, encontrarás objetos alumbrados en los capítulos que revelan sorpresas interactivas al hacerles clic, y podrás compartir tus teorías e impresiones comentando en el foro de la comunidad sobre qué te pareció la obra.
                  </p>
                  <div className='d-flex justify-content-center align-items-center w-100'>
                  </div>
                </div>

              </div>
            </div>

          </section>

          <div onMouseEnter={manejarMouseEnterf}>
            <Lottie
              className="frank"
              lottieRef={lottieReff}
              animationData={datafrank}
              loop={false}
              autoplay={false}
            />
          </div>

          <div onMouseEnter={manejarMouseEntert}>
            <Lottie
              className="takeshitar"
              lottieRef={lottieReft}
              animationData={dataTakeshi}
              loop={false}
              autoplay={false}
            />
          </div>

          <div id="seccion-cuentos">
            <Cuentos />
          </div>

        </div>

        <div className="d-flex justify-content-center fondo">
          <Footer />
        </div>

      </section>
    </>
  )
}