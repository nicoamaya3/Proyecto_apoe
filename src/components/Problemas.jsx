import "../stylesheets/Problemas.css"
import { Problema } from "./Problema"

export const Problemas = () => {
    return (

        <>

            <div className="fondo">

                <div className="container">
                    <div className="row">
                        <div className="col p-5">
                            <div className="text-center d-flex flex-column gap-4 align-items-center">
                                <h1 className="text-danger">EL PROBLEMA</h1>
                                <p className="w-75 text-center text-white">El 75% de los jóvenes han dejado de leer por falta de tiempo, cansancio mental o dificultad para encontrar libros que conecten con sus intereses.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Problema />

            </div>

        </>


    )
}
