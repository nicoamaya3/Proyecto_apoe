import { Link } from "react-router-dom"
import "../stylesheets/Cuentos.css"

export const Lect = ({cuento , llin}) => {
    return (
        <>
            <div className="bacLec" style={{
                backgroundImage: cuento,
            }}>
            </div>

            <div className="fon">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-between m-2">
                                <div className="d-flex gap-3" >
                                    
                                    <Link className= " text-black fw-bold fs-4 link-offset-2 link-underline link-underline-opacity-0" to={llin}>X</Link>
                                    <p className="text-white">Capítulo I — La confesión</p>
                                </div>

                                <div className="d-flex gap-3">
                                    <div>
                                        <img src="./izqi.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="otra.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="dere.svg" alt="" />
                                    </div>
                                </div>

                                <div>
                                    <img src="pause.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
