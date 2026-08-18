import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cuentos } from "../components/Cuentos"
import { Problemas } from "../components/Problemas"
import "../stylesheets/General.css"
import { motion } from "motion/react"


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

export default SkullCursorLink;

export const Home = () => {

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
                  <button ref={botonRef} className="btn btn-outline-danger">Leer cuentos</button>
                </div>
              </div>
            </div>
          </div>

          <section className='m-5 pt-5 section2 d-flex justify-content-center align-items-center z-3 flex-column h-100'>

            <div className='circ1'></div>

            <div className='comentario1 p-3 text-white fontCa fs-6 m-4 rounded-5 d-flex'>Escucha con atención, cuervo lector... Tu travesía por los rincones más oscuros está por comenzar</div>

            <div className='tuto2 text-white d-flex flex-column p-4 rounded-5 align-items-center '>
              <h2 className='w-75 text-center t'>¿Cómo funciona la initeractividad de los cuentos?</h2>
              <div className='d-flex align-items-center mt-4 gap-5'>
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="..." alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              <div>
                <p className='fs-5'>Cada relato cuenta con su propia página inmersiva para una lectura profunda, encontrarás objetos alumbrados en los capítulos que revelan sorpresas interactivas al hacerles clic, y podrás compartir tus teorías e impresiones comentando en el foro de la comunidad sobre qué te pareció la obra.</p>
                <button ref={botonRef}className="btn btn-outline-danger">Leer cuentos</button>
              </div>
              </div>
            </div>

            <div className='circ1'>
              <div className='circ2'>

              </div>
            </div>
          </section>
        </div>

        {/* <div className="d-flex  justify-content-center">
          <div className="problema w-75">
            <Problemas />
          </div>
        </div> */}


        <Cuentos />

        <div className="bg-black">

          <div className="container p-5">
            <div className="row">
              <div className="text-white">
                <div className="text-center">
                  <h2 className="fw-bold fontTitu">NOSOTROS</h2>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="col-12 col-md-12 mt-4 w-25 text-center p-5 ">
                    <div className="cc p-2 bg-success rounded">
                      <img className="dd  w-50 " src="./usuario.png" alt="" />
                    </div>
                    <h5 className="fontCard">Nicolás Atehortúa</h5>
                    <p>Desarrollo Web</p>
                  </div>
                  <div className="col-12 col-md-12 mt-4  w-25 text-center p-5 ">
                    <div className="cc p-2 bg-success rounded">
                      <img className="dd  w-50 " src="./usuario.png" alt="" />
                    </div>
                    <h5 className="fontCard">Mariana Martínez</h5>
                    <p>Diseño & Contenido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <section className="navbar rounded-top-5 position-relative bg-black ">
            <div className="col text-center">
              <h2 className="fontCard footer fs-4 fw-bold">
                APOE! · SENA · Producción Multimedia · 2025
              </h2>
            </div>
          </section>
        </div>

      </section>


    </>
  )
}

