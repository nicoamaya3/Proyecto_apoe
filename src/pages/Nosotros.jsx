import "../stylesheets/Home.css"

export const Nosotros = () => {
    return (
        <>

            <div className="bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-5">
                            <div className="p-5 d-flex flex-column justify-content-center gap-3 text-center">
                                <div className="p-5 d-flex justify-content-center">
                                    <img className="bg p-3 rounded-5 apoel" src="Logooo.png" alt="" />
                                </div>

                                <div className="text-success">
                                    <h1 className="fw-bold">NOSOTROS</h1>
                                </div>
                                <div className="text-white">
                                    <p>Este proyecto busca transformar la forma en que los jóvenes adultos y adultos redescubren la lectura, a través de un libro digital interactivo e ilustrado que presenta una selección de cuentos clásicos de Edgar Allan Poe. Fue desarrollado en el SENA — Centro de Servicios y Gestión Empresarial, bajo la orientación de la instructora Sully Munera.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
