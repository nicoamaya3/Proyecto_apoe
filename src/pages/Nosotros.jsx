import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { motion } from "motion/react"
import { Footer } from "../components/Footer"

export const Nosotros = () => {
    return (
        <>

            <motion.div className="w-25 position-absolute top-0 start-50 translate-middle-x"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", duration: 1 }}>
                <div className="banda bg-black rounded-bottom-5 w-100">
                    <p className="p-home text-white fs-6  text-center">Apoe!</p>
                </div>
            </motion.div>

            <div className="fondo2 py-5">
                <img className="deco position-absolute top-0 start-0" src="recursos/deco2.png" alt="" />


                <div className="container mt-5 pt-5">

                    {/* TÍTULO PRINCIPAL */}
                    <div className="d-flex justify-content-center mb-5 w-100">
                        <div className="text-center ">
                            <h1 className="ttxx">NOSOTROS</h1>
                        </div>
                    </div>

                    {/* SECCIÓN SUPERIOR: Caja grande de descripción (Izquierda) + Misión/Visión (Derecha) */}
                    <div className="row align-items-center g-4 mb-5 justify-content-center text-white">

                        {/* Columna Izquierda: Tarjeta principal con cuervos y texto */}
                        <div className="col-lg-7 w-50">
                            <div className="info-home p-4 rounded-5 shadow text-">
                                <div className="text-center mb-3">
                                    <img className="imgnosotros rounded-5" src="./src/assets/svg/nosotros.png" alt="Cuervos" />
                                </div>
                                <p className="fs-5 text-center">
                                    Somos aprendices del programa de Producción Multimedia del SENA, apasionados por la narrativa visual y el arte del cómic. Este proyecto nace del deseo de acercar la literatura clásica de Edgar Allan Poe a nuevas audiencias a través de un formato gráfico e interactivo.
                                </p>
                            </div>
                        </div>

                        {/* Columna Derecha: Tarjetas apiladas de Misión y Visión */}
                        <div className="tarjetas col-lg-5 d-flex flex-column gap-5">

                            {/* Misión */}
                            <div className="bg-black text-white p-5 rounded-5 shadow">
                                <h3 className="t text-center mb-2">Misión</h3>
                                <p className="small text-white-50 m-0 text-center">
                                    Fomentar el hábito de la lectura en jóvenes mediante adaptaciones visuales atractivas de obras literarias clásicas.
                                </p>
                            </div>

                            {/* Visión */}
                            <div className="bg-black text-white p-5 rounded-5 shadow">
                                <h3 className="t text-center mb-2">Visión</h3>
                                <p className="fontCa small text-white-50 m-0 text-center">
                                    Convertirnos en un referente de producción multimedia educativa que inspire a nuevas generaciones de lectores.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* SECCIÓN INFERIOR: PROCESO */}
                    <div className="section mt-5 pt-4">
                        <div className="row text-center mb-4">
                            <div className="col-12">
                                <h1 className="fontTitu">PROCESO</h1>
                                <h2 className="text-white-50 t">¿Cómo se crea el proyecto Apoe?</h2>
                            </div>
                        </div>

                        {/* Fila del Proceso: Texto y Documentos (Izq) + Cuadro de Carrusel/Imagen (Der) */}
                        <div className="row align-items-center g-4 w-75 d-flex justify-content-center mx-auto">

                            {/* Columna Izquierda del Proceso */}
                            <div className="col-lg-6">
                                <p className="fs-5 mb-4 text-white">
                                    El desarrollo se estructuró bajo metodologías ágiles de diseño multimedia, integrando ilustración digital, animación vectorial y maquetación web responsiva en React con Bootstrap y GSAP.
                                </p>
                                <div className="d-flex flex-column gap-2 align-items-center">
                                    <span className="t text-white-50 fs-2 ">Documentos</span>
                                    <div>
                                        <button className="btn btn-outline-danger btn-sm rounded-pill px-3 py-1">Manual de marca</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-danger btn-sm rounded-pill px-3 py-1">Infografías</button>
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha del Proceso (Cuadro con la X / Carrusel) */}
                            <div className="col-lg-6">
                                <div className="border border-secondary rounded-4 p-4 bg-black text-center" style={{ minHeight: '220px' }}>
                                    <span className="text-secondary fs-1">📖</span>
                                    {/* Aquí puedes poner tu carrusel o imagen del proceso */}
                                </div>
                                <div className="d-flex justify-content-center gap-2 mt-3">
                                    <span className="badge rounded-circle bg-secondary p-2"></span>
                                    <span className="badge rounded-circle bg-white p-2"></span>
                                    <span className="badge rounded-circle bg-secondary p-2"></span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="mt-5 d-flex justify-content-center">
                          <Footer/>
                        </div>

            </div>
        </>
    )
}