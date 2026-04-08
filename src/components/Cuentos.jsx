
import "../stylesheets/Cuentos.css"
import "../stylesheets/Text.css"

import { Infocuentos } from "../components/Infocuentos"

export const Cuentos = () => {
    return (
        <>
        
            <div className="fondoo p-5 d-flex flex-column gap-4">

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-white text-center d-flex flex-column align-items-center gap-2">
                                <h1 className="fw-bold ttxx" >CUENTOS</h1>
                                <p className="w-50">Dos obras maestras de Edgar Allan Poe reimaginadas como experiencias visuales interactivas</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="section">
                    <div className="row">
                        <div className="col">
                             <Infocuentos titi= " El Gato Negro " des= " Un hombre bondadoso se transforma en un ser monstruoso bajo el influjo del alcohol. Su crueldad hacia su gato Plutón desencadena una espiral de horror y culpa que culmina en... " personajesUno= " Frank " personajesDos= " Katherine " personajesTres= " Plutón " categoria= " Terror Psicológico " back= " gato.jpg " />
                        </div>
                        <div className="col">
                             <Infocuentos titi= " El Corazón Delator " des= " En el Japón feudal, Takeshi asesina al anciano Satoshi, atormentado por su ojo de buitre. Tras ocultar el cuerpo bajo las tablas del suelo, el latido fantasmal del corazón... " categoria= " Horror Japonés " back= " " personajesUno= " Takeshi " personajesDos= " Satoshi " personajesTres= " Shogun " />
                        </div>
                    </div>
                </div>
                                           

            </div>


        </>
    )
}
