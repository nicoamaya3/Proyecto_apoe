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

    // Estado para los emojis con localStorage
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

    // Estado para los comentarios anónimos guardados en localStorage
    const [comentarios, setComentarios] = useState(() => {
        const guardados = localStorage.getItem('comentarios_corazon_delator');
        if (guardados) {
            return JSON.parse(guardados);
        }
        return [
            { id: 1, nombre: "Cuervo Oscuro", mensaje: "¡Qué atmósfera tan tétrica y fascinante lograron en esta obra!", fecha: "2026-06-01" }
        ];
    });

    const [nuevoMensaje, setNuevoMensaje] = useState('');
    const [nuevoNombre, setNuevoNombre] = useState('');

    useEffect(() => {
        localStorage.setItem('comentarios_corazon_delator', JSON.stringify(comentarios));
    }, [comentarios]);

    const agregarComentario = (e) => {
        e.preventDefault();
        if (!nuevoMensaje.trim()) return;

        const comentarioItem = {
            id: Date.now(),
            nombre: nuevoNombre.trim() === '' ? 'Anónimo' : nuevoNombre.trim(),
            mensaje: nuevoMensaje.trim(),
            fecha: new Date().toLocaleDateString()
        };

        setComentarios([comentarioItem, ...comentarios]);
        setNuevoMensaje('');
        setNuevoNombre('');
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

                <div className="position-relative container mt-4 py-4">

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
                                        objectFit: 'contain'
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

                    <div className="row w-100 justify-content-center mb-5 pb-5 mt-5">
                        <div className="col-12 col-lg-9 position-relative" style={{ width: '100vh', height: '50vh', minWidth: '45px' }}>

                            {/* Mensaje centrado en la parte superior del video */}
                            <div
                                className="position-absolute start-50 translate-middle-x px-4 py-2 rounded-pill text-white fw-light shadow text-center fontCa"
                                style={{
                                    top: '25px',
                                    backgroundColor: 'rgba(20, 20, 20, 0.8)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    zIndex: 10,
                                    fontSize: '0.95rem',
                                    backdropFilter: 'blur(4px)',
                                    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)'
                                }}
                            >
                                Visualiza el escenario 3d de la casa de Takeshi, esta es la habitación.
                            </div>

                            <div>
                                <video className="h-100 rounded-4 w-100 border border-secondary bg-black text-center shadow d-flex align-items-center justify-content-center mb-5 glow-box" src="/Videos/Casa3D.mkv" controls />
                            </div>
                        </div>
                    </div>

                </div>

            <section className='sectioncuervo'>
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
            </section>

                <div className='comentario2 p-3 text-white fontCa fs-6 m-4 mx-5 rounded-5 d-flex glow-box mt-5'>Escucha con atención, cuervo lector... El eco delator está resonando bajo el suelo</div>

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

                {/* NUEVA SECCIÓN DE COMENTARIOS ANÓNIMOS LOCALES */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 fondo mb-5 col-lg-8 p-4 rounded-4 border border-secondary glow-box text-white">
                            <h3 className="mb-4 fw-bold p-home fs-1 glow-text">Foro de la comunidad</h3>

                            {/* Formulario de Comentarios */}
                            <form onSubmit={agregarComentario} className="mb-4">
                                <div className="mb-3" >
                                    <input 
                                        type="text" 
                                        className="form-control fontCa text-black border-secondary" style={{ backgroundColor: 'var(--rosa)' }}
                                        placeholder="Tu nombre o alias (opcional, si lo dejas vacío será Anónimo)"
                                        value={nuevoNombre}
                                        onChange={(e) => setNuevoNombre(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea 
                                        className="form-control text-black border-secondary fontCa" style={{ backgroundColor: 'var(--rosa)' }}
                                        rows="3"
                                        placeholder="Escribe tus impresiones o teorías sobre el cuento..."
                                        value={nuevoMensaje}
                                        onChange={(e) => setNuevoMensaje(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger rounded-pill px-4 glow-btn2">
                                    Publicar comentario anónimo
                                </button>
                            </form>

                            {/* Lista de comentarios dinámicos */}
                            <div className="d-flex flex-column gap-3">
                                {comentarios.length === 0 ? (
                                    <p className="text-white-50 text-center">Sé el primero en dejar un rastro oscuro...</p>
                                ) : (
                                    comentarios.map((c) => (
                                        <div key={c.id} className="p-3 rounded-3 bg-black border border-secondary shadow-sm">
                                            <div className="d-flex justify-content-between align-items-center mb-1">
                                                <strong className="text-danger">{c.nombre}</strong>
                                                <small className="text-white-50" style={{ fontSize: '0.8rem' }}>
                                                    {c.fecha}
                                                </small>
                                            </div>
                                            <p className="m-0 text-light" style={{ wordBreak: 'break-word' }}>
                                                {c.mensaje}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>

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