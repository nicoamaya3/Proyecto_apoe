import { Cap1corazon } from "../components/Cap1corazon.jsx";
import { Lect } from "../components/Lect"
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
                                    <Cap1corazon />
                                </div>
                                <div className="carousel-item">
                                    <ReproductorCap2 />
                                </div>
                                <div className="carousel-item">

                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Lect cuento="url(./corazon.jpg)" llin="/Delator" nombreCap="Capítulo I — La confesión" />
        </>
    )
}
