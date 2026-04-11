import "../stylesheets/Problemas.css"
import { Problema } from "./Problema"

export const Problemas = () => {
    return (

        <>

            <div className="fondo p-5">

                <div className="container">
                    <div className="row">
                        <div className="col col-sm col-md">
                            <div className="text-center d-flex flex-column gap-4 align-items-center">
                                <h1 className="text-danger">EL PROBLEMA</h1>
                                <p className="w-75 text-center text-white">El 75% de los jóvenes han dejado de leer por falta de tiempo, cansancio mental o dificultad para encontrar libros que conecten con sus intereses.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="row">
                        <div className="col col-sm col-md">
                            <Problema icon="Libro.png" tituloo="FALTA DE TIEMPO" descripcion="El 31% identifica la falta de tiempo como la principal barrera para leer" />
                        </div>
                        <div className="col col-sm col-md">
                            <Problema icon="Rayo.png" tituloo="LA SOLUCIÓN" descripcion="Lectura visual, interactiva y ágil adaptada al ritmo de vida actual" />
                        </div>
                        <div className="col col-sm col-md">
                            <Problema icon="Ojo.png" tituloo="EXPERIENCIA INMERSIVA" descripcion="Ilustraciones, audio y elementos interactivos que enriquecen cada cuento" />
                        </div>
                    </div>
                </div>

            </div>

        </>


    )
}
