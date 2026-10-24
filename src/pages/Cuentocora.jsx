import React, { useEffect, useState, useRef } from 'react'
import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { Footer } from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import dataCrow from "../assets/dataCrow.json"
import LottieModule from "lottie-react";
import { motion } from "motion/react"
import dataTakeshic from "../assets/dataTakeshic.json"
import { Banda } from '../components/Banda';

const Lottie = LottieModule.default;

export const Cuentocora = () => {

    const lottieRef = useRef()
    const lottieRefC = useRef()
    const lottieReftc = useRef()

    const manejarMouseEntertc = () => {
        if (lottieReftc.current) {
            lottieReftc.current.stop();
            lottieReftc.current.play();
        }
    };

    const manejarMouseEnter = () => {
        if (lottieRefC.current) {
            lottieRefC.current.stop();
            lottieRefC.current.play();
        }
    };

    useEffect(() => {
        // Función para inicializar o recargar Cusdis cuando el componente esté listo
        const loadCusdis = () => {
            if (window.CUSDIS) {
                window.CUSDIS.initial();
            } else {
                const script = document.createElement('script');
                script.src = "https://cusdis.com/js/cusdis.es.js";
                script.async = true;
                script.defer = true;
                document.body.appendChild(script);
            }
        };

        const timer = setTimeout(loadCusdis, 200);
        return () => clearTimeout(timer);
    }, []);

    const [conteo, setConteo] = useState(() => {
        const guardado = localStorage.getItem('emojis_corazon_delator');
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

    useEffect(() => {
        localStorage.setItem('emojis_corazon_delator', JSON.stringify(conteo));
    }, [conteo]);

    const incrementar = (emocion) => {
        setConteo({
            ...conteo,
            [emocion]: conteo[emocion] + 1
        });
    };

    // Personajes con sus respectivas expresiones dinámicas
    const personajes = [
        {
            nombre: "Takeshi",
            imagen: "./take.png",
            descripcion: "Takeshi, un hombre mentalmente inestable de 32 años en el periodo Edo en Kyoto, consumido por una obsesión enfermiza.",
            expresiones: [
                "./eTakeshi.png"
            ]
        },
        {
            nombre: "Satoshi",
            imagen: "./anci.png",
            descripcion: "El anciano maestro de Takeshi, cuya mirada penetrante, semejante al ojo de buitre, despierta la paranoia mortal de su discípulo.",
            expresiones: [
                "./eSatoshi.png"
            ]
        },
        {
            nombre: "Shogun / Guardias",
            imagen: "./sho.png",
            descripcion: "Autoridades del orden que investigan la desaparición, desafiados por el eco implacable de un latido fantasmal.",
            expresiones: [
                "./eShogun.png"
            ]
        }
    ];

    // Estado para llevar el índice del personaje actual
    const [indiceActual, setIndiceActual] = useState(0);

    // Funciones para navegar entre personajes
    const siguientePersonaje = () => {
        setIndiceActual((prev) => (prev === personajes.length - 1 ? 0 : prev + 1));
    };

    const anteriorPersonaje = () => {
        setIndiceActual((prev) => (prev === 0 ? personajes.length - 1 : prev - 1));
    };

    // Obtenemos el personaje activo actual
    const personajeActual = personajes[indiceActual];

    return (
        <div className="fondo3 d-flex flex-column justify-content-center align-items-center">

            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: '9999',
                width: '350px',
                height: '152px',
                borderRadius: '12px',
                overflow: 'hidden'
            }}>
                <iframe
                    className="h-75 w-100"
                    data-testid="embed-iframe"
                    src="https://open.spotify.com/embed/track/5T4pYDDgrEBU6ELku9rqkD?utm_source=generator&si=145b6c6e4dcf4720"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    style={{ borderRadius: '12px', border: 'none' }}
                    title="Spotify Track"
                ></iframe>

                <img
                    src="https://imgbb.host/images/MgfCi.png"
                    alt="Overlay"
                    className="img-fluid"
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        zIndex: '-1',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>

            <img className="deco position-absolute top-0 start-0" src="recursos/deco3.png" alt="" />

            <Banda />

            <div className="volver container pt-4">
                <div className="row ps-3 justify-content-start">
                    <div className="col-12 ms-5 ps-5 mb-5 mt-4">
                        <Link className="btn glow-btn2 btn-success rounded-pill px-4 fw-bold" to='/'>🡸 Volver</Link>
                    </div>
                </div>
            </div>

            <section className='glow-box bg-black section3 rounded-5 d-flex flex-column justify-content-center align-items-center'>

                <div className="container mt-4 py-4">

                    <div className="row justify-content-center mb-5">
                        <div className="col-12 fondoTarjeta rounded-5 p-3 col-lg-10">
                            <div className="p-5 rounded-5 border border-secondary shadow bg-dark text-center position-relative overflow-hidden"
                                style={{ backgroundImage: 'url(./portadacora.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: 450, }}>

                                <div className="glow-box position-relative w-50 mt-5 pt-5 pb-4 rounded-5 mx-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', zIndex: '2' }}>
                                    <h1 className="fw-bold text-white t mb-4 px-2 glow-text" style={{ fontSize: 50 }}>Corazón Delator</h1>
                                    <p className="text-light mb-4 px-2">
                                        En el periodo Edo en Kyoto, Takeshi narra su asesinato un día antes de ser ejecutado. Obsesionado por el ojo de buitre de su maestro...
                                    </p>
                                    <Link className="btn btn-danger rounded-pill px-4 py-2 glow-btn2" to="/LecturaC">Empezar a leer</Link>
                                </div>

                            </div>
                        </div>
                        <div onMouseEnter={manejarMouseEntertc}>
                            <Lottie
                                className="takeshic position-absolute w-75"
                                lottieRef={lottieReftc}
                                animationData={dataTakeshic}
                                loop={false}
                                autoplay={false}
                            />
                        </div>
                    </div>

                    <div className="text-center">
                        <img className="w-50 glow-img" src="https://pixelsafari.neocities.org/dividers/animal/bat3.png" alt="Divider" />
                    </div>

                    <div className="row text-center mb-4">
                        <div className="col-12">
                            <h1 className="fw-bold glow-text fontTitu mt-3" style={{ fontSize: 50 }}>PERSONAJES</h1>
                        </div>
                    </div>

                    {/* SECCIÓN DEL CARRUSEL DE PERSONAJES */}
                    <div className="row justify-content-center align-items-center mb-4 g-4">

                        <div className="col-12 d-flex justify-content-center align-items-center gap-3 gap-lg-4 flex-wrap flex-lg-nowrap">

                            {/* Botón Anterior */}
                            <button
                                onClick={anteriorPersonaje}
                                className="btn btn-outline-secondary rounded-circle text-white d-flex align-items-center justify-content-center shadow-sm"
                                style={{ width: '45px', height: '45px', minWidth: '45px' }}
                            >
                                &lt;
                            </button>

                            {/* Imagen del personaje */}
                            <div
                                className="glow-box rounded-pill border border-secondary d-flex align-items-center justify-content-center overflow-hidden shadow"
                                style={{
                                    width: '330px',
                                    height: '480px',
                                    minWidth: '330px',
                                    minHeight: '480px',
                                    backgroundColor: 'var(--vinotinto)'
                                }}
                            >
                                <img className="w-50"
                                    src={personajeActual.imagen}
                                    alt={personajeActual.nombre}
                                    style={{
                                        objectFit: 'contain' // Usa 'contain' si prefieres que la ilustración no se recorte nada
                                    }}
                                />
                            </div>

                            {/* Información y Expresiones del personaje */}
                            <div className="text-start" style={{ width: '350px', minWidth: '280px' }}>

                                <div className="col-12 col-lg-5 d-flex flex-column h-25 justify-content-center align-items-center gap-3 gap-lg-4  p-2 rounded">
                                    {personajeActual.expresiones.map((expr, index) => (
                                        <div key={index}>
                                            <img
                                                className="w-50 glow-img"
                                                src={expr}
                                                alt={`Expresión ${index + 1}`}
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <h3 className="p-home glow-text mb-2 text-white mt-3" style={{ fontSize: '2.5rem' }}>
                                    {personajeActual.nombre}
                                </h3>
                                <p className="text-white-50 fs-6">
                                    {personajeActual.descripcion}
                                </p>
                                <img
                                    src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
                                    alt="Animación"
                                    className="img-fluid mt-5 glow-img"
                                />
                                <div className="text-white-50 small mt-3 d-flex justify-content-center">
                                    Personaje {indiceActual + 1} de {personajes.length}
                                </div>
                            </div>

                            {/* Botón Siguiente */}
                            <button
                                onClick={siguientePersonaje}
                                className="btn btn-outline-secondary rounded-circle text-white d-flex align-items-center justify-content-center shadow-sm"
                                style={{ width: '45px', height: '45px', minWidth: '45px' }}
                            >
                                &gt;
                            </button>
                        </div>

                    </div>

                    <div className="row w-100 justify-content-center mb-5 mt-5">
                        <div className="col-12 col-lg-9" style={{ width: '100vh', height: '50vh', minWidth: '45px' }}>
                            <div>
                                <video className="h-100 rounded-4 w-100 border border-secondary bg-black text-center shadow d-flex align-items-center justify-content-center mb-5 glow-box" src="/Videos/Casa3D.mkv" controls />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='contcirculo2'>
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

                <div className='comentario2 p-3 text-white fontCa fs-6 m-4 mx-5 rounded-5 d-flex glow-box'>Escucha con atención, cuervo lector... El eco delator está resonando bajo el suelo</div>

                <div className='emojis mb-5'>
                    <div className="d-flex justify-content-around align-items-center flex-wrap gap-3">

                        <button
                            onClick={() => incrementar('aterrorizado')}
                            className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm glow-box"
                        >
                            <span style={{ fontSize: '1.5rem' }}>😍</span>
                            <span className="badge bg-danger rounded-pill">{conteo.aterrorizado}</span>
                        </button>

                        <button
                            onClick={() => incrementar('enojado')}
                            className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm glow-box"
                        >
                            <span style={{ fontSize: '1.5rem' }}>😡</span>
                            <span className="badge bg-danger rounded-pill">{conteo.enojado}</span>
                        </button>

                        <button
                            onClick={() => incrementar('triste')}
                            className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm glow-box"
                        >
                            <span style={{ fontSize: '1.5rem' }}>😢</span>
                            <span className="badge bg-danger rounded-pill">{conteo.triste}</span>
                        </button>

                        <button
                            onClick={() => incrementar('asustado')}
                            className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm glow-box"
                        >
                            <span style={{ fontSize: '1.5rem' }}>😨</span>
                            <span className="badge bg-danger rounded-pill">{conteo.asustado}</span>
                        </button>

                        <button
                            onClick={() => incrementar('sorprendido')}
                            className="foo btn btn-dark border border-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2 text-white shadow-sm glow-box"
                        >
                            <span style={{ fontSize: '1.5rem' }}>😲</span>
                            <span className="badge bg-danger rounded-pill">{conteo.sorprendido}</span>
                        </button>

                    </div>
                    <img
                        src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
                        alt="Animación"
                        className="img-fluid mt-4 ms-4 glow-img"
                    />
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 fondo mb-5 col-lg-8 p-4 rounded-4 border border-secondary glow-box">
                            <h3 className="text-white mb-4 fw-bold">Comentarios</h3>

                            <div
                                id="cusdis_thread"
                                className="cusdis-thread"
                                data-host="https://cusdis.com"
                                data-app-id="acc6b049-f587-43b7-b8ba-b05918a2a6ff"
                                data-page-id="cuento-corazon-delator"
                                data-page-url={window.location.href}
                                data-page-title="Corazón Delator"
                                style={{ minHeight: '200px' }}
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