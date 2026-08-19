import { Cap1corazon } from "../components/Cap1corazon.jsx";
import { Cap2corazon } from "../components/Cap2corazon.jsx";
import { Cap3corazon } from "../components/Cap3corazon.jsx";
import { Cap4corazon } from "../components/Cap4corazon.jsx";
import { Lect } from "../components/Lect"
import { PortadaCorazon } from "../components/PortadaCorazon.jsx";
import { Portadacorazon1 } from "../components/Portadacorazon1.jsx";
import { Portadacorazon2 } from "../components/Portadacorazon2.jsx";
import { Portadacorazon3 } from "../components/Portadacorazon3.jsx";
import { ReproductorCap2 } from "../components/ReproductorCap2.jsx"
import { Tutorial } from "../components/Tutorial.jsx"
import "../stylesheets/AnimacionCorazon.css";

export const Leyendo = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col z-3 position-absolute w-75 top-50 start-50 translate-middle rounded-3">
                        {/* <Tutorial /> */}
                    </div>
                    <div className="col cap2Corazon position-absolute w-75">
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <Portadacorazon1 />
                                </div>

                                <div className="carousel-item">
                                    <Cap1corazon />
                                </div>

                                <div className="carousel-item">
                                    <PortadaCorazon />
                                </div>

                                <div className="carousel-item">
                                    <ReproductorCap2 />
                                </div>

                                <div className="carousel-item">
                                    <Cap2corazon />
                                </div>

                                <div className="carousel-item">
                                    <Portadacorazon2/>
                                </div>

                                <div className="carousel-item">
                                    <Cap3corazon/>
                                </div>

                                <div className="carousel-item">
                                    <Portadacorazon3/>
                                </div>

                                <div className="carousel-item">
                                    <Cap4corazon/>
                                </div>

                            </div>
                            <div className="botonesSa">
                                <div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                </div>

                                <div>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Lect cuento="url(./corazon.jpg)" llin="/Delator" nombreCap="Capítulo I — La confesión" />
        </>
    )
}
