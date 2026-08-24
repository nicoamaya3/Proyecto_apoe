import React from 'react'
import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { Footer } from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "motion/react"


export const Poe = () => {
  return (
    <div className="fondo5 d-flex flex-column justify-content-center align-items-center position-relative min-vh-100">

      <img className="deco position-absolute top-0 start-0" src="recursos/deco3.png" alt="" />

      <motion.div className="w-25 position-absolute top-0 start-50 translate-middle-x"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ zIndex: 10 }}>
        <div className="banda bg-black rounded-bottom-5 w-100">
          <p className="p-home text-white fs-6 pt-3 text-center">Apoe!</p>
        </div>
      </motion.div>

      <div className="container mt-5 py-5 w-100 d-flex flex-column align-items-center ">

        {/* SECCIÓN 1: AUTOR */}
        <section className="row justify-content-center align-items-center mb-5 w-75">
          <div className="col-12 col-lg-10 rounded-5 p-4 position-relative overflow-hidden bg-black border border-secondary shadow">
            
            <div className="row align-items-center">
              {/* Título y descripción simulada con líneas */}
              <div className="col-12 col-md-6 text-center text-md-start ps-md-5 mb-4 mb-md-0">
                <h2 className="fontTitu text-white text-center" style={{ fontSize: '3rem' }}>AUTOR</h2>
                <img
            src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
            alt="Animación"
            className="img-fluid mb-5"
          />
                <h3 className="text-white text-center t mb-4" >Edgar Allan Poe</h3>
                
                <p className='text-white text-center'>Edgar Allan Poe (1809/1849) fue un maestro indiscutible del cuento corto, la poesía y el relato de terror psicológico. Considerado uno de los grandes innovadores del género fantástico y precursor de la literatura detectivesca moderna, su pluma exploró magistralmente la culpa, la locura, lo macabro y las sombras más profundas del alma humana a través de obras inmortales como El cuervo y El corazón delator.</p>

                <div className="mt-4 d-flex justify-content-center">
                  <button className="btn btn-danger rounded-pill px-4 py-2 fw-bold shadow">Leer revista</button>
                </div>
              </div>

              {/* Imagen del autor / elemento gráfico */}
              <div className="col-12 col-md-6 text-center position-relative">
                <img 
                  src="./edgar.jpg" 
                  alt="Edgar Allan Poe" 
                  className="img-fluid rounded-5" 
                  style={{ maxHeight: '420px', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"; }} 
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 2: BIOGRAFÍA (Con diseño de tarjetas curvadas / estilo referencia) */}
        <section className="row justify-content-center align-items-center my-5 py-5 position-relative" style={{ backgroundColor: '#f2e8dc', borderRadius: '4rem' }}>
          <div className="col-12 text-center mb-4">
            <h2 className="fontTitu text-dark" style={{ fontSize: '3rem', fontFamily: 'serif' }}>Biografía</h2>
          </div>

          <div className="col-12 col-lg-10">
            <div className="row g-4 justify-content-center">
              
              {/* Tarjeta 1 */}
              <div className="col-12 col-md-6">
                <div className="p-4 rounded-5 shadow border border-secondary d-flex flex-column justify-content-center" style={{ backgroundColor: '#4a1525', minHeight: '380px' }}>
                  <p className="text-white text-center opacity-75">Contenido de la biografía o extracto histórico principal sobre su vida y obra oscura...</p>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="col-12 col-md-6">
                <div className="p-4 rounded-5 shadow border border-secondary d-flex flex-column justify-content-center" style={{ backgroundColor: '#9c858a', minHeight: '380px' }}>
                  <p className="text-dark text-center fw-semibold">Detalles complementarios, influencias literarias y legado del autor...</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECCIÓN 3: LÍNEAS INFERIORES / TEXTO SECUNDARIO */}
        <section className="row justify-content-center my-5 py-4">
          <div className="col-12 col-lg-8 bg-dark p-5 rounded-5 border border-secondary shadow text-center">
            <div className="d-flex flex-column gap-3 my-2">
              <div className="bg-secondary rounded-pill w-100 mx-auto" style={{ height: '3px', opacity: 0.5 }}></div>
              <div className="bg-secondary rounded-pill w-90 mx-auto" style={{ height: '3px', opacity: 0.5 }}></div>
              <div className="bg-secondary rounded-pill w-95 mx-auto" style={{ height: '3px', opacity: 0.5 }}></div>
              <div className="bg-secondary rounded-pill w-80 mx-auto" style={{ height: '3px', opacity: 0.5 }}></div>
              <div className="bg-secondary rounded-pill w-85 mx-auto" style={{ height: '3px', opacity: 0.5 }}></div>
              <div className="bg-secondary rounded-pill w-70 mx-auto" style={{ height: '3px', opacity: 0.5 }}></div>
              <div className="bg-secondary rounded-pill w-75 mx-auto" style={{ height: '3px', opacity: 0.5 }}></div>
              <div className="bg-secondary rounded-pill w-60 mx-auto" style={{ height: '3px', opacity: 0.5 }}></div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="mt-5 w-100 d-flex justify-content-center align-items-end">
        <Footer />
      </div>

    </div>
  )
}