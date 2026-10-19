import React from 'react'
import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { Footer } from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "motion/react"
import HTMLFlipBook from 'react-pageflip'

// Componente necesario para que react-pageflip asigne las referencias correctas del DOM
const Page = React.forwardRef((props, ref) => {
  return (
    <div 
      className="page-wrapper" 
      ref={ref} 
      style={{
        backgroundColor: props.bgColor || '#f4ede2',
        color: props.textColor || '#111',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="h-100 p-4 d-flex flex-column justify-content-between border border-secondary border-opacity-25">
        {props.children}
      </div>
    </div>
  );
});

export const Poe = () => {
  return (
    <div className="fondo5 d-flex flex-column justify-content-center align-items-center position-relative min-vh-100">

      <img className="deco position-absolute top-0 start-0" src="recursos/deco3.png" alt="" />

      {/* Franja Superior */}
      <motion.div className="w-25 position-absolute top-0 start-50 translate-middle-x"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ zIndex: 10 }}>
        <div className="banda bg-black rounded-bottom-5 w-100">
          <p className="p-home text-white fs-6 pt-3 text-center">Apoe!</p>
        </div>
      </motion.div>

      <div className="container mt-5 py-5 w-100 d-flex flex-column align-items-center">

        {/* SECCIÓN 1: AUTOR */}
        <section className="row justify-content-center align-items-center mb-5 w-75">
          <div className="col-12 col-lg-10 rounded-5 p-4 position-relative overflow-hidden bg-black border border-secondary shadow">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 text-center text-md-start ps-md-5 mb-4 mb-md-0">
                <h2 className="fontTitu text-white text-center" style={{ fontSize: '3rem' }}>AUTOR</h2>
                <img
                  src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
                  alt="Animación"
                  className="img-fluid mb-5"
                />
                <h3 className="text-white text-center mb-4">Edgar Allan Poe</h3>
                <p className='text-white text-center'>
                  Edgar Allan Poe (1809/1849) fue un maestro indiscutible del cuento corto, la poesía y el relato de terror psicológico. Considerado uno de los grandes innovadores del género fantástico y precursor de la literatura detectivesca moderna.
                </p>
                <div className="mt-4 d-flex justify-content-center">
                  <button className="btn btn-danger rounded-pill px-4 py-2 fw-bold shadow">Leer revista</button>
                </div>
              </div>

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

        {/* SECCIÓN 2: LIBRO INTERACTIVO AMPLIADO (FLIPBOOK) */}
        <section className="row justify-content-center align-items-center my-5 py-4 w-100">
          <div className="col-12 text-center mb-4">
            <h2 className="fontTitu text-white" style={{ fontSize: '2.8rem', letterSpacing: '3px' }}>
              Grimorio de Anotaciones
            </h2>
            <p className="text-white-50">Arrastra las esquinas de las páginas o haz clic en los bordes para hojear</p>
          </div>

          <div className="col-12 d-flex justify-content-center">
            <HTMLFlipBook 
              width={380} 
              height={520} 
              size="fixed"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={650}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="shadow-lg rounded-3 overflow-hidden"
            >
              
              {/* --- PORTADA --- */}
              <Page bgColor="#0d0d0d" textColor="#ffffff">
                <div className="w-100 border border-warning p-4 h-100 d-flex flex-column justify-content-center align-items-center text-center rounded-3">
                  <span className="text-warning fs-2 mb-2">✦ 🪶 ✦</span>
                  <h1 className="fontTitu text-warning display-4 mb-2">APOE!</h1>
                  <h6 className="text-white-50 font-monospace text-uppercase tracking-wide mb-4">Cuervos Lectores</h6>
                  <div className="my-3 border-top border-bottom border-warning py-2 px-3">
                    <p className="mb-0 text-white small font-monospace">ANÁLISIS DE OBRAS</p>
                    <p className="mb-0 text-warning fw-bold small">EL GATO NEGRO & EL CORAZÓN DELATOR</p>
                  </div>
                  <small className="text-muted mt-4">Haz clic en la esquina para abrir →</small>
                </div>
              </Page>

              {/* --- PÁGINA 1: PRÓLOGO --- */}
              <Page bgColor="#f4ede2" textColor="#1a1a1a">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-dark pb-2 mb-3">
                    <span className="badge bg-dark text-warning font-monospace">Pág. 1</span>
                    <small className="font-monospace text-muted">PRÓLOGO</small>
                  </div>
                  <h4 className="fw-bold text-dark mb-3" style={{ fontFamily: 'serif' }}>La Mente Psicológica de Poe</h4>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', lineHeight: '1.5' }}>
                    Edgar Allan Poe no buscaba asustar con monstruos lejanos, sino con los fantasmas que habitan en la mente humana. Tanto en <em>El gato negro</em> como en <em>El corazón delator</em>, los protagonistas caen víctimas de su propio autoengaño, la culpa incontrolable y la perversidad inherente al ser humano.
                  </p>
                </div>
                <div className="p-2 bg-dark text-light rounded-3 text-center">
                  <small className="font-monospace text-warning" style={{ fontSize: '0.78rem' }}>"La perversidad es uno de los impulsos primitivos del corazón humano."</small>
                </div>
              </Page>

              {/* --- PÁGINA 2: EL GATO NEGRO - ORIGEN Y SIMBOLOGÍA --- */}
              <Page bgColor="#f4ede2" textColor="#1a1a1a">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-dark pb-2 mb-3">
                    <span className="badge bg-dark text-warning font-monospace">Pág. 2</span>
                    <small className="font-monospace text-muted">OBRA 01</small>
                  </div>
                  <h4 className="fw-bold text-dark mb-1" style={{ fontFamily: 'serif' }}>El Gato Negro (1843)</h4>
                  <p className="text-danger small font-monospace mb-2">Simbología y Descenso a la Locura</p>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Publicado en <em>The Saturday Evening Post</em>. Muestra cómo un hombre dócil y amante de los animales es consumido por el alcoholismo y la ira, arrancándole el ojo a su gato Plutón y posteriormente ahorcándolo.
                  </p>
                </div>
                <div className="p-2 border border-secondary rounded bg-white text-dark">
                  <small className="fw-bold text-danger d-block mb-1">🐈‍⬛ Plutón / El Segundo Gato:</small>
                  <small style={{ fontSize: '0.78rem' }}>Plutón alude al dios del inframundo. El parche blanco en el pecho del segundo gato se transforma progresivamente en la figura de la horca.</small>
                </div>
              </Page>

              {/* --- PÁGINA 3: EL GATO NEGRO - CULPA Y EMPAREDAMIENTO --- */}
              <Page bgColor="#f4ede2" textColor="#1a1a1a">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-dark pb-2 mb-3">
                    <span className="badge bg-dark text-warning font-monospace">Pág. 3</span>
                    <small className="font-monospace text-muted">ANÁLISIS</small>
                  </div>
                  <h4 className="fw-bold text-dark mb-3" style={{ fontFamily: 'serif' }}>El Muro de la Conciencia</h4>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Al asesinar a su esposa en un arrebato de rabia, el protagonista empareda su cuerpo en la bodega. Creyéndose a salvo, su orgullo lo lleva a golpear exactamente la pared secreta ante los policías, desencadenando el aullido del gato atrapado.
                  </p>
                </div>
                <div className="p-2 bg-dark text-white rounded">
                  <small className="text-warning font-monospace" style={{ fontSize: '0.78rem' }}>🧱 Clave Didáctica:</small>
                  <p className="mb-0 opacity-75" style={{ fontSize: '0.75rem' }}>El muro no escondía un cadáver, sino la culpa que el asesino no podía callar.</p>
                </div>
              </Page>

              {/* --- PÁGINA 4: EL CORAZÓN DELATOR - LA PARANOIA --- */}
              <Page bgColor="#f4ede2" textColor="#1a1a1a">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-dark pb-2 mb-3">
                    <span className="badge bg-dark text-warning font-monospace">Pág. 4</span>
                    <small className="font-monospace text-muted">OBRA 02</small>
                  </div>
                  <h4 className="fw-bold text-dark mb-1" style={{ fontFamily: 'serif' }}>El Corazón Delator (1843)</h4>
                  <p className="text-danger small font-monospace mb-2">La Paranoia del Ojo de Buitre</p>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Un narrador insistente en negar su locura planea metódicamente durante siete noches el asesinato de un anciano con el que convive, motivado únicamente por el rechazo hacia su ojo pálido y velado.
                  </p>
                </div>
                <div className="p-2 border border-secondary rounded bg-white text-dark">
                  <small className="fw-bold text-danger d-block mb-1">👁️ El Ojo de Buitre:</small>
                  <small style={{ fontSize: '0.78rem' }}>Representa la mirada juzgadora e hipnótica que el protagonista no puede soportar, desencadenando su fijación obsesiva.</small>
                </div>
              </Page>

              {/* --- PÁGINA 5: EL CORAZÓN DELATOR - EL LATIDO Y CONFESIÓN --- */}
              <Page bgColor="#f4ede2" textColor="#1a1a1a">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-dark pb-2 mb-3">
                    <span className="badge bg-dark text-warning font-monospace">Pág. 5</span>
                    <small className="font-monospace text-muted">ANÁLISIS</small>
                  </div>
                  <h4 className="fw-bold text-dark mb-3" style={{ fontFamily: 'serif' }}>El Latido Incesante</h4>
                  <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Tras descuartizar al anciano y esconder las partes bajo las tablas del suelo, la policía llega. El asesino, confiado, coloca su silla sobre el punto exacto. Sin embargo, el sonido sordo de un reloj envuelto en algodón (el latido de su propio corazón) lo lleva al colapso.
                  </p>
                </div>
                <div className="p-2 bg-dark text-white rounded">
                  <small className="text-warning font-monospace" style={{ fontSize: '0.78rem' }}>💓 Clave Didáctica:</small>
                  <p className="mb-0 opacity-75" style={{ fontSize: '0.75rem' }}>El latido incesante es el ritmo acelerado de su propio corazón devorado por la alucinación y la paranoia.</p>
                </div>
              </Page>

              {/* --- PÁGINA 6: TABLA COMPARATIVA --- */}
              <Page bgColor="#f4ede2" textColor="#1a1a1a">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-dark pb-2 mb-3">
                    <span className="badge bg-dark text-warning font-monospace">Pág. 6</span>
                    <small className="font-monospace text-muted">PARALELISMOS</small>
                  </div>
                  <h5 className="fw-bold text-dark mb-2" style={{ fontFamily: 'serif' }}>Paralelismos entre ambas obras</h5>
                  <ul className="list-unstyled small font-monospace" style={{ fontSize: '0.78rem' }}>
                    <li className="mb-2"><strong>🏠 Escenario:</strong> Casas claustrofóbicas y espacios cerrados.</li>
                    <li className="mb-2"><strong>🪵 Escondite:</strong> Muros de ladrillo y tablas del piso.</li>
                    <li className="mb-2"><strong>👁️ Detonante:</strong> Defectos físicos/animales (ojo tuerto/de buitre).</li>
                    <li className="mb-2"><strong>🗣️ Confesión:</strong> Autosabotaje provocado por el orgullo frente a la autoridad.</li>
                  </ul>
                </div>
                <div className="p-2 bg-danger text-white rounded text-center">
                  <small className="fw-bold">Proyecto Apoe! • Cuervos Lectores</small>
                </div>
              </Page>

              {/* --- CONTRAPORTADA --- */}
              <Page bgColor="#0d0d0d" textColor="#ffffff">
                <div className="w-100 border border-warning p-4 h-100 d-flex flex-column justify-content-center align-items-center text-center rounded-3">
                  <span className="text-warning fs-1 mb-2">🖤</span>
                  <h3 className="fontTitu text-white mb-2">FIN DEL LIBRO</h3>
                  <p className="text-white-50 small mb-4">"No hay misterio más profundo que la mente de quien oculta su propia culpa."</p>
                  <div className="border-top border-warning pt-3 w-75">
                    <small className="text-warning font-monospace d-block">Apoe! Digital Project</small>
                    <small className="text-muted">SENA CESGE • 2026</small>
                  </div>
                </div>
              </Page>

            </HTMLFlipBook>
          </div>
        </section>

        

        {/* SECCIÓN 3: TEXTO SECUNDARIO */}
        <section className="row justify-content-center my-5 py-4 w-75">
          <div className="col-12 bg-dark p-5 rounded-5 border border-secondary shadow text-center">
            <h4 className="text-white fontTitu mb-3" style={{ letterSpacing: '2px' }}>EL MISTERIO DE SU FINAL</h4>
            <p className="text-white-50 px-md-5 mx-auto" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
              La muerte de Edgar Allan Poe en Baltimore en 1849 continúa siendo uno de los grandes enigmas de la literatura universal. Encontrado en circunstancias extrañas y con ropa ajena, partió de este mundo dejando tras de sí un vacío imborrable.
            </p>
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