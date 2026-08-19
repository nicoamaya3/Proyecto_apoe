import { Link } from "react-router-dom"
import "../stylesheets/General.css"

export const Nosotros = () => {
    return (
        <>
            <div className="fondo2 text-white py-5">
                <div className="container">
                    
                    {/* TÍTULO PRINCIPAL */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <h1 className="fw-bold ttxx">NOSOTROS</h1>
                        </div>
                    </div>

                    {/* SECCIÓN SUPERIOR: Caja grande de descripción (Izquierda) + Misión/Visión (Derecha) */}
                    <div className="row align-items-center g-4 mb-5">
                        
                        {/* Columna Izquierda: Tarjeta principal con cuervos y texto */}
                        <div className="col-lg-7">
                            <div className="p-4 rounded-4 shadow" style={{ backgroundColor: '#21131e' }}>
                                <div className="text-center mb-3">
                                    <img className="img-fluid rounded-4" src="iconos/logo.png" alt="Cuervos" style={{ maxHeight: '180px' }} />
                                </div>
                                <p className="font-monospace fs-6 text-center">
                                    Este proyecto busca transformar la forma en que los jóvenes adultos y adultos redescubren la lectura, a través de un libro digital interactivo e ilustrado que presenta una selección de cuentos clásicos de Edgar Allan Poe. Fue desarrollado en el SENA — Centro de Servicios y Gestión Empresarial, bajo la orientación de la instructora Sully Munera.
                                </p>
                            </div>
                        </div>

                        {/* Columna Derecha: Tarjetas apiladas de Misión y Visión */}
                        <div className="col-lg-5 d-flex flex-column gap-4">
                            
                            {/* Misión */}
                            <div className="bg-black text-white p-4 rounded-4 shadow">
                                <h3 className="fontCa text-center mb-2">Misión</h3>
                                <p className="small text-white-50 m-0 text-center">
                                    Incentivar el hábito de la lectura clásica a través de herramientas multimedia e interactivas innovadoras.
                                </p>
                            </div>

                            {/* Visión */}
                            <div className="bg-black text-white p-4 rounded-4 shadow">
                                <h3 className="fontCa text-center mb-2">Visión</h3>
                                <p className="small text-white-50 m-0 text-center">
                                    Convertirnos en un referente educativo digital de adaptaciones literarias góticas en la región.
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* SECCIÓN INFERIOR: PROCESO */}
                    <div className="section mt-5 pt-4">
                        <div className="row text-center mb-4">
                            <div className="col-12">
                                <h2 className="fw-bold fontTitu">PROCESO</h2>
                                <h5 className="fontCa text-white-50">¿Cómo se crea el proyecto Apoe?</h5>
                            </div>
                        </div>

                        {/* Fila del Proceso: Texto y Documentos (Izq) + Cuadro de Carrusel/Imagen (Der) */}
                        <div className="row align-items-center g-4">
                            
                            {/* Columna Izquierda del Proceso */}
                            <div className="col-lg-6">
                                <p className="font-monospace mb-4">
                                    El desarrollo se estructuró bajo metodologías ágiles de diseño multimedia, integrando ilustración digital, animación vectorial y maquetación web responsiva en React con Bootstrap y GSAP.
                                </p>
                                <div className="d-flex flex-column gap-2">
                                    <span className="fontCa fs-5">Documentos</span>
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
            </div>
        </>
    )
}