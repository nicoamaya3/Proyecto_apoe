import "../stylesheets/Problemas.css"

export const Problema = ({ tituloo, descripcion, icon }) => {
    return (
        <>


            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="bg-dark  rounded-4">


                        <div className="d-flex flex-column text-white p-3 text-center gap-1">
                            <div>
                                <img className="ico" src={icon} alt="" />
                            </div>
                            <h5>{tituloo}</h5>
                            <p>{descripcion}</p>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}
