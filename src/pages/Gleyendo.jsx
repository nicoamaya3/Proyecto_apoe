
import { Esc1Gatonegro } from "../components/Esc1Gatonegro.jsx"
import { Esc2gatonegro } from "../components/Esc2gatonegro.jsx"
import { Esc3gatonegro } from "../components/Esc3gatonegro.jsx"
import { Esc4gatonegro } from "../components/Esc4gatonegro.jsx"
import { Lect } from "../components/Lect"
import { ReproductorGa } from "../components/ReproductorGa.jsx"
import { Tutorial } from "../components/Tutorial.jsx"


export const Gleyendo = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {/* <div className="col z-3 position-absolute w-75 top-50 start-50 translate-middle rounded-3">
                        <Tutorial />
                    </div> */}
                    <div className="col position-absolute w-75 gatonegro">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                
                                <div className="carousel-item active">
                                    <ReproductorGa />
                                </div>

                                <div className="carousel-item">
                                    <Esc1Gatonegro />
                                </div>

                                <div className="carousel-item">
                                    <Esc2gatonegro />
                                </div>

                                <div className="carousel-item">
                                    <Esc3gatonegro />
                                </div>

                                <div className="carousel-item">
                                    <Esc4gatonegro />
                                </div>

                            </div>
                            <div className="botonesSaa">
                                <div className="botonesSa11">
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span>back</span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                </div>

                                <div className="botonesSa22">
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span>next</span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Lect cuento="url(./gatoN.jpg)" llin="/GatoNegro" nombreCap="Capítulo I — " />
        </>
    )
}
