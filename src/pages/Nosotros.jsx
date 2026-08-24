import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { motion } from "motion/react"
import { Footer } from "../components/Footer"

export const Nosotros = () => {
    return (
        <>

            <div className="snowflakes">
                <div className="snowflake"><img src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif" alt="bat" className="img-fluid" /></div>
                <div className="snowflake"><img src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif" alt="bat" className="img-fluid" /></div>
                <div className="snowflake"><img src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif" alt="bat" className="img-fluid" /></div>
                <div className="snowflake"><img src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif" alt="bat" className="img-fluid" /></div>
                <div className="snowflake"><img src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif" alt="bat" className="img-fluid" /></div>
                <div className="snowflake"><img src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif" alt="bat" className="img-fluid" /></div>
                <div className="snowflake"><img src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif" alt="bat" className="img-fluid" /></div>
                <div className="snowflake"><img src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif" alt="bat" className="img-fluid" /></div>
            </div>

            <motion.div className="w-25 position-absolute top-0 start-50 translate-middle-x"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", duration: 1 }}>
                <div className="banda bg-black rounded-bottom-5 w-100">
                    <p className="p-home text-white fs-6  text-center">Apoe!</p>
                </div>
            </motion.div>

            <div className="fondo2 pt-5">
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
                            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                                <h1 className="fontTitu mt-5" style={{ fontSize: '4rem' }}>PROCESO</h1>
                                <h2 className="text-white t">¿Cómo se crea el proyecto Apoe?</h2>
                                <div className="d-flex justify-content-center gap-4 w-50">
                                        <img className='img' src="https://64.media.tumblr.com/d65212d0050b2057686a31a3033377a4/9a5e59d4a20102aa-17/s75x75_c1/f537b0a0585d89556f1dfac7a609449e0dcd6813.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/6625acfa135f373639d42c4c2afa265c/9a5e59d4a20102aa-4d/s75x75_c1/25095466d0f9bed2e5f9c034c38d543b922ca8da.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/4da5613524cf08c02a1e948372de3c58/9a5e59d4a20102aa-8c/s75x75_c1/c12e1e1f72eb764678556e937ffac6c94bd10d57.pnj" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/d0dba451bf4f1a1cc1e6f11df8877f9f/9a5e59d4a20102aa-e9/s75x75_c1/3e8f2ba972afa71346a8b31879c8fcf95cb0eb93.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/76b1c52769848b74f755869e2427177d/9a5e59d4a20102aa-84/s75x75_c1/455e346408285b4892df391028fd0cad95ed22b0.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/abe25dc79a23f2d5a47c19ca5a60fdd2/9a5e59d4a20102aa-26/s75x75_c1/92a119554e254c453ab572f08727d4d225bf7b4b.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/d9b6699df09ba5dade9e78336729ed7b/9a5e59d4a20102aa-47/s75x75_c1/d313c1250a331ff2b826f42aaa231cc474005987.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/d563e0636285b3919ed8b477d9bbdcac/9a5e59d4a20102aa-6d/s75x75_c1/a514a5c93521064070370e2d5e814740c469827f.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/7916e48b4c5e5bec0ea231d5e0b26121/73fadafad671033f-87/s75x75_c1/6f9f9fbb1fd27475a34f7c1acb1ecbc7d276b6a4.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/f349a7cbd231bd04145fd50aab22eaca/4149a1d35ab9816c-5d/s75x75_c1/a8317198e7f68ebafc6418ec63d5aff88c5d54ee.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/e807e881d13cf17d2b4ea722a874ecf7/408b2d36fe8fb6b1-e5/s75x75_c1/0f8b22143647c538a713eb433d98b6a1ed6d2f52.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/e1af22751f2c11adb8ea7b2eff326ed0/4809e0c5820895fd-c3/s75x75_c1/fc73c5fdc5e08ae4289065b971eac74551edfc54.gifv" />
                                      </div>
                            </div>
                        </div>

                        {/* Fila del Proceso: Texto y Documentos (Izq) + Cuadro de Carrusel/Imagen (Der) */}
                        <div className="row align-items-center g-4 w-75 d-flex justify-content-center mx-auto my-3">

                            {/* Columna Izquierda del Proceso */}
                            <div className="col-lg-6">
                                <p className="fs-5 mb-4 text-white">
                                    El desarrollo se estructuró bajo metodologías ágiles de diseño multimedia, integrando ilustración digital, animación vectorial y maquetación web responsiva en React con Bootstrap y GSAP.
                                </p>
                                <div className="d-flex flex-column gap-2 align-items-center">
                                    <span className="t text-white fs-2 ">Documentos</span>
                                    <div>
                                        <button className="btn btn-danger btn-sm rounded-pill px-3 py-1">Manual de marca</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-danger btn-sm rounded-pill px-3 py-1">Infografías</button>
                                    </div>
                                </div>
                            </div>

                            {/* Columna Derecha del Proceso (Cuadro con la X / Carrusel) */}
                                <div className='col-lg-6 col-md-12 d-flex justify-content-center'>
                                    <div id="carouselExampleControls" className="carousel slide w-100 mb-5 p" data-ride="carousel" style={{ maxWidth: '450px', boxShadow: '0 4px 40px rgba(0, 0, 0, 0.2)' }}>
                                        <div className="carousel-inner rounded-4 overflow-hidden">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100 img-fluid" src="./public/cap2.jpg" alt="First slide" />
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
                                            <span className="sr-only"></span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only"></span>
                                        </a>
                                    </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="mt-5 d-flex justify-content-center align-items-end">
                    <Footer />
                </div>
            </div>
        </>
    )
}