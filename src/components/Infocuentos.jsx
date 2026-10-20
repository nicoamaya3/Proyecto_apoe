
import { Link } from "react-router-dom"
import "../stylesheets/General.css"

export const Infocuentos = ({ titi, des, personajesUno, personajesDos, personajesTres, categoria, back, lii, tbt }) => {
    return (
        <>
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="">
                        <div className="rounded-5 fondoTarjeta shadow glow-box">
                            <div className="p-2 m-4 d-flex rounded-5 justify-content-between gat" style={{
                                backgroundImage: back ,
                                height: "300px",
                                backgroundPositionX: -70,
                                backgroundSize: 600,
                            }}>
                                <div className="w-50 p-3">
                                    <p className="text-white bg-success w-75 text-center rounded-4">{categoria}</p>
                                </div>
                            </div>
                            <div>

                                <div><img className="w-100 glow-img" src="https://pixelsafari.neocities.org/dividers/animal/bat3.png"/></div>

                                <div className="ps-4 pe-4 pb-4 mb-2">
                                    <h2 className="fw-bold glow-text2 text-center mb-4 t pt-3"
                                    style={{ color: "var(--vinotinto)" }}
                                    >{titi}</h2>
                                    <p className="text-black">{des}</p>
                                    <div className="d-flex justify-content-center ">
                                        <Link className="btn glow-btn btn-danger rounded-5 w-50 p-2 fw-bold " to={lii} > {tbt} </Link>
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
