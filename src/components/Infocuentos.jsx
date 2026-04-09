
import "../stylesheets/Infocuentos.css"

export const Infocuentos = ({ titi, des, personajesUno, personajesDos, personajesTres, categoria, back }) => {
    return (
        <>
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-10">
                        <div className="rounded fon">
                            <div className="p-2 d-flex rounded justify-content-between gat" style={{
                                backgroundImage: back 
                            }}>
                                <div className="w-50 p-3">
                                    <p className="bg-success w-75 text-center rounded-4">{categoria}</p>
                                </div>
                                <div className="p-3">
                                    <img className="tama" src="cora.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="p-3 text-white">
                                    <h5 className="fw-bold">{titi}</h5>
                                    <p>{des}</p>
                                    <div className="d-flex gap-2">
                                        <p className="osq w-25 text-center rounded-4">{personajesUno}</p>
                                        <p className="osq w-25 text-center rounded-4">{personajesDos}</p>
                                        <p className="osq w-25 text-center rounded-4">{personajesTres}</p>
                                    </div>
                                    <button className="btn btn-success text-black w-100 p-2 fw-bold">EMPEZAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
