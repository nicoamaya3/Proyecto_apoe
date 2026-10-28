import React from 'react'
import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { Footer } from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "motion/react"
import HTMLFlipBook from 'react-pageflip'
import { Banda } from '../components/Banda';

// Componente necesario para que react-pageflip asigne las referencias correctas del DOM
const Page = React.forwardRef((props, ref) => {
  return (
    <div
      className="page-wrapper"
      ref={ref}
      style={{
        backgroundColor: props.bgColor || 'var(--rosa)',
        color: props.textColor || '#edddd5',
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

      <Banda />

      <div className="container mt-5 py-5 w-100 d-flex flex-column align-items-center">

        {/* SECCIÓN 1: AUTOR */}
        <section className="row justify-content-center align-items-center mb-5 w-75">
          <div className=" glow-box col-12 col-lg-10 rounded-5 p-4 position-relative overflow-hidden bg-black border border-secondary shadow">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 text-center text-md-start ps-md-5 mb-4 mb-md-0">
                <h2 className="fontTitu glow-text text-white text-center" style={{ fontSize: '3rem' }}>AUTOR</h2>
                <img
                  src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
                  alt="Animación"
                  className="img-fluid mb-5"
                />
                <h3 className=" glow-text text-white text-center mb-4 p-home">Edgar Allan Poe</h3>
                <p className='text-white text-center'>
                  Edgar Allan Poe (1809/1849) fue un maestro indiscutible del cuento corto, la poesía y el relato de terror psicológico. Considerado uno de los grandes innovadores del género fantástico y precursor de la literatura detectivesca moderna.
                </p>
                <div className="mt-4 d-flex justify-content-center">
                  <a
                    href="https://mariana218.github.io/Revista-Apoe-/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger btn-sm rounded-pill px-4 py-2 glow-btn glow-effect text-decoration-none d-inline-block"
                  >
                    Leer revista
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-6 text-center position-relative">
                <img
                  src="./edgar.jpg"
                  alt="Edgar Allan Poe"
                  style={{ maxHeight: '420px', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"; }}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="mb-3">
          <img
            className="w-100 glow-img glow-effect z-3"
            src="https://pixelsafari.neocities.org/dividers/animal/bat3.png"
            alt="Divisor murciélagos"
          />
        </div>

        {/* SECCIÓN 2: LIBRO INTERACTIVO AMPLIADO (FLIPBOOK) */}
        <section className="row justify-content-center align-items-center my-1 py-4 w-100">
          <div className="col-12 text-center mb-4">
            <h2 className="p-home text-white fs-1">
              Datos curiosos de los cuentos de Poe
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
                <div className="glow-box w-100 border bg-black p-4 h-100 d-flex flex-column justify-content-center align-items-center text-center rounded-3">
                  <span className=" text-white fs-2 mb-2"></span>
                  <h1 className="fontTitu display-4 mb-2">APOE!</h1>
                  <h6 className="text-white-50 fs-3 tracking-wide mb-4 p-home">Cuervos Lectores</h6>
                  <div className="my-3 border-top border-bottom py-2 px-3">
                    <p className="mb-0 text-white fontCa small font-monospace">ANÁLISIS DE OBRAS</p>
                    <p className="mb-0 p-home text-white ">El gato negro & el corazón delator</p>
                  </div>
                  <small className=" text-white mt-4">Haz clic en la esquina para abrir →</small>
                </div>
              </Page>

              {/* --- PÁGINA 1: PRÓLOGO --- */}
              <Page className="glow-box" bgColor="var(--rosa)" textColor="#ffffff">
                <div>
                  <div className="glow-box d-flex justify-content-between align-items-center border-bottom border-light pb-2 mb-3">
                    <span className="badge bg-dark  font-monospace">Pág. 1</span>
                    <small className="font-monospace text-white-50">PRÓLOGO</small>
                  </div>
                  <h4 className="text-white mb-3 p-home">La Mente Psicológica de Poe</h4>
                  <p className='text-white' style={{ fontFamily: 'Georgia, serif', fontSize: '0.88rem', lineHeight: '1.5' }}>
                    Edgar Allan Poe no buscaba asustar con monstruos lejanos, sino con los fantasmas que habitan en la mente humana. Tanto en <em>El gato negro</em> como en <em>El corazón delator</em>, los protagonistas caen víctimas de su propio autoengaño, la culpa incontrolable y la perversidad inherente al ser humano.
                  </p>
                </div>
                <div className="p-2 bg-black text-light rounded-3 text-center border border-secondary">
                  <small className="font-monospace  " style={{ fontSize: '0.78rem' }}>"La perversidad es uno de los impulsos primitivos del corazón humano."</small>
                </div>
              </Page>

              {/* --- PÁGINA 2: EL GATO NEGRO - ORIGEN Y SIMBOLOGÍA --- */}
              <Page bgColor="var(--rosa)" textColor="#ffffff">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-light pb-2 mb-3">
                    <span className="badge bg-dark  font-monospace">Pág. 2</span>
                    <small className="font-monospace text-white-50">OBRA 01</small>
                  </div>
                  <h4 className="text-white mb-3 p-home">El Gato Negro</h4>
                  <p className="text-white small font-monospace mb-2">Simbología y Descenso a la Locura</p>
                  <p className='text-white'z style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Publicado en <em>The Saturday Evening Post</em>. Muestra cómo un hombre dócil y amante de los animales es consumido por el alcoholismo y la ira, arrancándole el ojo a su gato Plutón y posteriormente ahorcándolo.
                  </p>
                </div>
                <div className="p-2 border border-secondary rounded bg-black text-white">
                  <small className="fw-bold  d-block mb-1">🐈‍⬛ Plutón / El Segundo Gato:</small>
                  <small style={{ fontSize: '0.78rem' }}>Plutón alude al dios del inframundo. El parche blanco en el pecho del segundo gato se transforma progresivamente en la figura de la horca.</small>
                </div>
              </Page>

              {/* --- PÁGINA 3: EL GATO NEGRO - CULPA Y EMPAREDAMIENTO --- */}
              <Page bgColor="var(--rosa)" textColor="#ffffff">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-light pb-2 mb-3">
                    <span className="badge bg-dark  font-monospace">Pág. 3</span>
                    <small className="font-monospace text-white-50">ANÁLISIS</small>
                  </div>
                  <h4 className="text-white mb-3 p-home">El Muro de la Conciencia</h4>
                  <p className='text-white' style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Al asesinar a su esposa en un arrebato de rabia, el protagonista empareda su cuerpo en la bodega. Creyéndose a salvo, su orgullo lo lleva a golpear exactamente la pared secreta ante los policías, desencadenando el aullido del gato atrapado.
                  </p>
                </div>
                <div className="p-2 bg-black text-white rounded border border-secondary">
                  <small className=" font-monospace" style={{ fontSize: '0.78rem' }}>🧱 Clave Didáctica:</small>
                  <p className="mb-0 opacity-75" style={{ fontSize: '0.75rem' }}>El muro no escondía un cadáver, sino la culpa que el asesino no podía callar.</p>
                </div>
              </Page>

              {/* --- PÁGINA 4: EL CORAZÓN DELATOR - LA PARANOIA --- */}
              <Page bgColor="var(--rosa)" textColor="#ffffff">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-light pb-2 mb-3">
                    <span className="badge bg-dark  font-monospace">Pág. 4</span>
                    <small className="font-monospace text-white-50">OBRA 02</small>
                  </div>
                  <h4 className="text-white mb-3 p-home">El Corazón Delator</h4>
                  <p className="text-white small font-monospace mb-2">La Paranoia del Ojo de Buitre</p>
                  <p className='text-white' style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Un narrador insistente en negar su locura planea metódicamente durante siete noches el asesinato de un anciano con el que convive, motivado únicamente por el rechazo hacia su ojo pálido y velado.
                  </p>
                </div>
                <div className="p-2 border border-secondary rounded bg-black text-white">
                  <small className="fw-bold  d-block mb-1">👁️ El Ojo de Buitre:</small>
                  <small style={{ fontSize: '0.78rem' }}>Representa la mirada juzgadora e hipnótica que el protagonista no puede soportar, desencadenando su fijación obsesiva.</small>
                </div>
              </Page>

              {/* --- PÁGINA 5: EL CORAZÓN DELATOR - EL LATIDO Y CONFESIÓN --- */}
              <Page bgColor="var(--rosa)" textColor="#ffffff">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-light pb-2 mb-3">
                    <span className="badge bg-dark  font-monospace">Pág. 5</span>
                    <small className="font-monospace text-white-50">ANÁLISIS</small>
                  </div>
                  <h4 className="text-white mb-3 p-home">El Latido Incesante</h4>
                  <p className="text-white" style={{ fontFamily: 'Georgia, serif', fontSize: '0.85rem', lineHeight: '1.5' }}>
                    Tras descuartizar al anciano y esconder las partes bajo las tablas del suelo, la policía llega. El asesino, confiado, coloca su silla sobre el punto exacto. Sin embargo, el sonido sordo de un reloj envuelto en algodón (el latido de su propio corazón) lo lleva al colapso.
                  </p>
                </div>
                <div className="p-2 bg-black text-white rounded border border-secondary">
                  <small className=" font-monospace" style={{ fontSize: '0.78rem' }}>💓 Clave Didáctica:</small>
                  <p className="mb-0 opacity-75" style={{ fontSize: '0.75rem' }}>El latido incesante es el ritmo acelerado de su propio corazón devorado por la alucinación y la paranoia.</p>
                </div>
              </Page>

              {/* --- PÁGINA 6: TABLA COMPARATIVA --- */}
              <Page bgColor="var(--rosa)" textColor="#ffffff">
                <div>
                  <div className="d-flex justify-content-between align-items-center border-bottom border-light pb-2 mb-3">
                    <span className="badge bg-dark  font-monospace">Pág. 6</span>
                    <small className="font-monospace text-white-50">PARALELISMOS</small>
                  </div>
                  <h5 className="text-white mb-3 p-home"> Paralelismos entre ambas obras</h5>
                  <ul className=" text-white list-unstyled small font-monospace" style={{ fontSize: '0.78rem' }}>
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
                <div className="w-100 border p-4 h-100 d-flex flex-column justify-content-center align-items-center text-center rounded-3">
                  <span className=" fs-1 mb-2">🖤</span>
                  <h3 className="fontTitu text-white mb-2">FIN DEL LIBRO</h3>
                  <p className="text-white-50 small mb-4">"No hay misterio más profundo que la mente de quien oculta su propia culpa."</p>
                  <div className="text-white border-top pt-3 w-75">
                    <small className=" font-monospace d-block">Apoe! Producción de multimedia</small>
                    <small className="text-white-50">SENA CESGE • 2026</small>
                  </div>
                </div>
              </Page>

            </HTMLFlipBook>
          </div>
        </section>



        {/* SECCIÓN 3: TEXTO SECUNDARIO (Estilo idéntico a las tarjetas principales) */}
        <section className="row justify-content-center mb-1 py-4 w-75">
          <div className="text-center">
            <img
              src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
              alt="Animación"
              className="img-fluid rounded-4 glow-img glow-effect"
            />
          </div>
          <div className="edgarborracho w-100 d-flex justify-content-center align-items-center position-relative mb-4">
            <img className="glow-img" src="public/edgarborracho.png" alt="" />
          </div>
          <div className="glow-box z-3 col-12 col-lg-10 rounded-5 p-5 position-relative overflow-hidden bg-black border border-secondary shadow text-center">
            <h4 className="text-white fontTitu mb-3 glow-text" style={{ letterSpacing: '2px', fontSize: '2.5rem' }}>EL MISTERIO DE SU FINAL</h4>
            <p className="text-white-50 px-md-5 mx-auto fs-5" style={{ maxWidth: '800px', lineHeight: '1.8' }}>
              La muerte de Edgar Allan Poe en Baltimore en 1849 continúa siendo uno de los grandes enigmas de la literatura universal. Encontrado en circunstancias extrañas y con ropa ajena, partió de este mundo dejando tras de sí un vacío imborrable.
            </p>
          </div>
          <div className="text-center mt-5">
            <img
              src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
              alt="Animación"
              className="img-fluid rounded-4 glow-img glow-effect"
            />
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="w-100 d-flex justify-content-center align-items-end">
        <Footer />
      </div>

    </div>
  )
}