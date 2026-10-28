import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { Footer } from "../components/Footer"
import { Banda } from "../components/Banda"

export const Nosotros = () => {
    return (
        <>
            {/* Murciélagos animados */}
            <div className="snowflakes">
                {[...Array(8)].map((_, i) => (
                    <div className="snowflake" key={i}>
                        <img
                            src="https://media.tenor.com/fU-lYcf2_UQAAAAi/bat.gif"
                            alt="bat"
                            className="img-fluid"
                        />
                    </div>
                ))}
            </div>

            {/* Banda superior */}
            <Banda />

            <div className="fondo2 pt-5">
                <img
                    className="deco position-absolute top-0 start-0"
                    src="recursos/deco2.png"
                    alt="Decoración"
                />

                <div className="container mt-5 pt-5">

                    {/* TÍTULO PRINCIPAL */}
                    <div className="d-flex justify-content-center mb-5 w-100">
                        <div className="text-center glow-text glow-effect z-3">
                            <h1 className="ttxx">NOSOTROS</h1>
                        </div>
                    </div>

                    {/* SECCIÓN SUPERIOR: Caja de descripción + Misión/Visión */}
                    <div className="row align-items-center g-4 mb-5 justify-content-center text-white">

                        {/* Columna Izquierda: Tarjeta principal con cuervos y texto */}
                        <div className="col-lg-7 w-50">
                            <div className="info-home p-4 rounded-5 shadow glow-box glow-effect">
                                <div className="text-center mb-3">
                                    <img
                                        className="imgnosotros rounded-5 img-fluid glow-img glow-effect"
                                        src="/src/assets/svg/nosotros.png"
                                        alt="Cuervos"
                                    />
                                </div>
                                <p className="fs-5 text-center">
                                    Somos aprendices del programa de Producción Multimedia del SENA, apasionados por la narrativa visual y el arte del cómic. Este proyecto nace del deseo de acercar la literatura clásica de Edgar Allan Poe a nuevas audiencias a través de un formato gráfico e interactivo.
                                </p>
                            </div>
                        </div>

                        {/* Columna Derecha: Misión y Visión */}
                        <div className="tarjetas col-lg-5 d-flex flex-column gap-4">

                            {/* Misión */}
                            <div className="bg-black text-white p-4 rounded-5 shadow glow-box glow-effect">
                                <h3 className="t text-center mb-2 glow-text">Misión</h3>
                                <p className="small text-white-50 m-0 text-center">
                                    Fomentar el hábito de la lectura en jóvenes mediante adaptaciones visuales atractivas de obras literarias clásicas.
                                </p>
                            </div>

                            {/* GIF Animación */}
                            <div className="text-center">
                                <img
                                    src="https://64.media.tumblr.com/93495eaaa52b4b5a788e5b952a327a94/54342fb5ebe553f2-11/s500x750/b260af9619e68f4db4d6252b43a4fbd836e49f28.gifv"
                                    alt="Animación"
                                    className="img-fluid rounded-4 glow-img glow-effect"
                                />
                            </div>

                            {/* Visión */}
                            <div className="bg-black text-white p-4 rounded-5 shadow glow-box glow-effect">
                                <h3 className="t text-center mb-2 glow-text">Visión</h3>
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
                                <div className="mb-3">
                                    <img
                                        className="w-100 glow-img glow-effect"
                                        src="https://pixelsafari.neocities.org/dividers/animal/bat3.png"
                                        alt="Divisor murciélagos"
                                    />
                                </div>
                                <h1 className="fontTitu mt-3 glow-text glow-effect" style={{ fontSize: '4rem' }}>
                                    PROCESO
                                </h1>
                                <h2 className="text-white t glow-text glow-effect">
                                    ¿Cómo se crea el proyecto Apoe?
                                </h2>
                            </div>
                        </div>

                        {/* Fila del Proceso */}
                        <div className="row align-items-center g-4 w-75 d-flex justify-content-center mx-auto my-3">

                            {/* Texto y Documentos */}
                            <div className="col-lg-6">
                                <p className="fs-5 mb-4 text-white">
                                    El desarrollo se estructuró bajo metodologías ágiles de diseño multimedia, integrando ilustración digital, animación vectorial y maquetación web responsiva en React con Bootstrap y GSAP.
                                </p>
                                <div className="d-flex flex-column gap-3 align-items-center">
                                    <span className="t text-white fs-2 glow-text">Documentos</span>

                                    {/* Botón Manual de marca */}
                                    <div>
                                        <a
                                            href="/ManualMarca-Apoe!.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-danger btn-sm rounded-pill px-4 py-2 glow-btn glow-effect text-decoration-none d-inline-block"
                                        >
                                            Manual de marca
                                        </a>
                                    </div>

                                    {/* Botón Infografías */}
                                    <div>
                                        <a
                                            href="/Infografias.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-danger btn-sm rounded-pill px-4 py-2 glow-btn glow-effect text-decoration-none d-inline-block"
                                        >
                                            Infografías
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Carrusel */}
                            <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                                <div
                                    id="carouselExampleControls"
                                    className="carousel slide w-100 mb-5 p glow-box glow-effect"
                                    data-bs-ride="carousel"
                                    style={{ maxWidth: '450px' }}
                                >
                                    <div className="w-100 carousel-inner rounded-4 overflow-hidden" style={{ height: '350px' }}>
                                        <div className="carousel-item active h-100">
                                            <img
                                                className="d-block w-100 h-100 img-fluid"
                                                src="/cap2.jpg"
                                                alt="First slide"
                                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                            />
                                        </div>
                                        <div className="carousel-item h-100">
                                            <img
                                                className="d-block w-100 h-100 img-fluid"
                                                src="/cap3.jpeg"
                                                alt="Second slide"
                                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                            />
                                        </div>
                                        <div className="carousel-item h-100">
                                            <img
                                                className="d-block w-100 h-100 img-fluid"
                                                src="/cap4.jpeg"
                                                alt="Third slide"
                                                style={{ objectFit: 'cover', objectPosition: 'center' }}
                                            />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Anterior</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Siguiente</span>
                                    </button>
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