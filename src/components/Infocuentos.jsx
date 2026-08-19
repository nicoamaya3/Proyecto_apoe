
import { Link } from "react-router-dom"
import "../stylesheets/General.css"

export const Infocuentos = ({ titi, des, personajesUno, personajesDos, personajesTres, categoria, back, lii, tbt }) => {
    return (
        <>
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="">
                        <div className="rounded-5 fondoTarjeta shadow">
                            <div className="p-2 m-4 d-flex rounded-5 justify-content-between gat" style={{
                                backgroundImage: back ,
                                height: "300px",
                            }}>
                                <div className="w-50 p-3">
                                    <p className="bg-success w-75 text-center rounded-4">{categoria}</p>
                                </div>
                                <div className="p-3">
                                    <img className="tama" src="cora.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="p-3 mb-2 ">
                                    <h2 className="fw-bold mb-4 t"
                                    style={{ color: "var(--vinotinto)" }}
                                    >{titi}</h2>
                                    <p className="text-black">{des}</p>
                                    <div className="d-flex justify-content-center">
                                        <Link className="btn btn-outline-danger rounded-5 w-50 p-2 fw-bold " to={lii} > {tbt} </Link>
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
