import "../stylesheets/Cuentocora.css"
import "../stylesheets/Text.css"

export const Cuentocora = () => {
    return (
        <>
            <div className="gatt p-5" style={{
                backgroundImage: "url(./corazon.jpg)"
            }}>
                <div className="container p-5">
                    <div className="row">
                        <div className="col">
                            <div>
                                <button className="btn btn-outline-secondary text-white">← Volver</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black">
                <div className="section p-5">
                    <div className="row">
                        <div className="col">
                            <div>
                                <div className="w-25">
                                    <p className="bg-success w-50 text-center rounded-4 text-white">Horror Japonés</p>
                                </div>
                                <h1 className="text-white fw-bold">CORAZÓN DELATOR</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section p-5">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex flex-column gap-3">
                                <h5 className="fw-bold ttxx">SINOPSIS</h5>
                                <p className="text-white">En el periodo Edo en Kyoto, Takeshi, un hombre mentalmente inestable de 32 años, narra su asesinato un día antes de ser ejecutado. Obsesionado por el ojo de buitre de Satoshi, su maestro, planea matarlo. Cada noche entra sigilosamente a observarlo. En la octava noche, lo asfixia y desmembra el cuerpo bajo las tablas del suelo. Cuando los shogun investigan, el latido fantasmal del corazón lo delata.
                                </p>
                                <div className="d-flex gap-3">
                                    <button className="btn btn-success">Empezar a leer</button>
                                    <button className="btn btn-outline-danger">Favorito</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <h5 className="fw-bold ttxx">PERSONAJES</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
