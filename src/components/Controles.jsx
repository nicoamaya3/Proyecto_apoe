import React from 'react'
import "../stylesheets/General.css"

export const Controles = () => {
    return (
        <>
            <div className="position-absolute bottom-0 start-50 translate-middle-x w-75 mb-4">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className="col-12">

                            <div className="controles w-75 d-flex flex-row justify-content-between align-items-center px-4 py-3 rounded-pill shadow">
                                
                                {/* Texto de la escena */}
                                <div className="text-white fw-bold">
                                    <span>El gato negro: Escena 01</span>
                                </div>

                                {/* Contenedor de los iconos / botones */}
                                <div className="d-flex align-items-center gap-4">
                                    <div>
                                        <img src="retroceder" alt="Reiniciar" style={{ width: '20px', cursor: 'pointer' }} />
                                    </div>
                                    <div>
                                        <img src="retroceder cap" alt="Retroceder" style={{ width: '20px', cursor: 'pointer' }} />
                                    </div>
                                    <div>
                                        <img src="play" alt="Play" style={{ width: '20px', cursor: 'pointer' }} />
                                    </div>
                                    <div>
                                        <img src="avanzar video" alt="Avanzar" style={{ width: '20px', cursor: 'pointer' }} />
                                    </div>
                                    <div>
                                        <img src="agrandar pag" alt="Pantalla completa" style={{ width: '20px', cursor: 'pointer' }} />
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