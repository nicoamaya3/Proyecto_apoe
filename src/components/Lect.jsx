import { Link } from "react-router-dom"
import "../stylesheets/General.css"

export const Lect = ({ cuento, llin , nombreCap }) => {
    return (
        <>
            <div className="d-flex justify-content-center bg-black">
                <div className="bacLec w-75" style={{
                    backgroundImage: cuento,
                }}>
                    <div className="p-5">
                        <div className="p-3 ">
                            <Link className className="p-5 text-white text-black  fs-4 link-offset-2 link-underline link-underline-opacity-0" to={llin}>X</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fon">
                <div className="container">
                    <div className="row">
                        <div className="col col-sm col-md">
                            <div className="d-flex justify-content-between m-2">
                                <div className="d-flex gap-3" >

                                    <p className="text-white fontCard">{nombreCap}</p>
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
