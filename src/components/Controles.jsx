import React from 'react'
import "../stylesheets/General.css"

export const Controles = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className="controles d-flex flex-row  rounded-4">
                            <div><h3>El gato negro: Escena 01</h3></div>
                            <div>
                                <img src="retroceder" alt="" />
                            </div>
                            <div>
                                <img src="retroceder cap" alt="" />
                            </div>
                            <div>
                                <img src="play" alt="" />
                            </div>
                            <div>
                                <img src="avanzar video" alt="" />
                            </div>
                            <div>
                                <img src="agrandar pag" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
