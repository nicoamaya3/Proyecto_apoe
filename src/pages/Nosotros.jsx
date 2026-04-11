import { Link } from "react-router-dom"
import "../stylesheets/Home.css"
import "../stylesheets/Text.css"

export const Nosotros = () => {
    return (
        <>

            <div className="bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm col-md p-5">
                            <div className="p-5">
        
                                <Link className=" text-white link-offset-2 link-underline link-underline-opacity-0 " to='/'>← Volver al inicio</Link>
                            </div>
                            <div className="p-5 d-flex flex-column justify-content-center gap-3 text-center">
                                <div className="p-5 d-flex justify-content-center">
                                    <img className="bg p-3 rounded-5 apoel" src="Logooo.png" alt="" />
                                </div>

                                <div className="text-success">
                                    <h1 className="fw-bold ttxx ">NOSOTROS</h1>
                                </div>
                                <div className="text-white">
                                    <p>Este proyecto busca transformar la forma en que los jóvenes adultos y adultos redescubren la lectura, a través de un libro digital interactivo e ilustrado que presenta una selección de cuentos clásicos de Edgar Allan Poe. Fue desarrollado en el SENA — Centro de Servicios y Gestión Empresarial, bajo la orientación de la instructora Sully Munera.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="row">
                            <div className="col col-sm col-md text-white">
                                <div className="text-center">
                                    <h2 className="fw-bold ">NUESTRO EQUIPO</h2>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <div className="w-25 text-center p-5 ">
                                        <div className=" p-2 bg-success rounded">
                                            <img className="dd  w-50 " src="./usuario.png" alt="" />
                                        </div>
                                        <h5>Nicolás Atehortúa</h5>
                                        <p>Desarrollo Web</p>
                                    </div>
                                    <div className="w-25 text-center p-5 ">
                                        <div className=" p-2 bg-success rounded">
                                            <img className="dd  w-50 " src="./usuario.png" alt="" />
                                        </div>
                                        <h5>Mariana Martínez</h5>
                                        <p>Diseño & Contenido</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
