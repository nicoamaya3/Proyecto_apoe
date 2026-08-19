
import "../stylesheets/General.css"

import { Infocuentos } from "../components/Infocuentos"

export const Cuentos = () => {
    return (
        <>

            <div className="container-fluid p-5">

                {/* TÍTULO */}
                <div className="row mb-4">
                    <div className="col text-center">
                        <div className="text-white d-flex flex-column align-items-center gap-2">
                            <h1 className="fw-bold ttxx">CUENTOS</h1>
                        </div>
                    </div>
                </div>

                {/* TARJETAS EN FILA */}
                <div className="container">
                    <div className="row justify-content-center align-items-center gap-4">

                        {/* Tarjeta 1: El Gato Negro */}
                        <div className="col-md-5 col-10">
                            <Infocuentos
                                titi="El Gato Negro"
                                des="Un hombre bondadoso se transforma en un ser monstruoso bajo el influjo del alcohol. Su crueldad hacia su gato Plutón desencadena una espiral de horror y culpa que culmina en..."
                                categoria="Terror Psicológico"
                                back="url(./gato.jpg)"
                                lii="/GatoNegro"
                                tbt="Más Info"
                            />
                        </div>

                        {/* Tarjeta 2: El Corazón Delator */}
                        <div className="col-md-5 col-10">
                            <Infocuentos
                                titi="El Corazón Delator"
                                des="En el Japón feudal, Takeshi asesina al anciano Satoshi, atormentado por su ojo de buitre. Tras ocultar el cuerpo bajo las tablas del suelo, el latido fantasmal del corazón..."
                                categoria="Terror Japonés"
                                back="url(./coraa.jpg)"
                                lii="/Delator"
                                tbt="Más Info"
                            />
                        </div>

                    </div>
                </div>

            </div>




        </>
    )
}
