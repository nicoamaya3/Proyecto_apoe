import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { Controles } from "./Controles"

export const Lect = ({ cuento, llin, nombreCap }) => {
    return (
        <>
            <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-center bg-black">
                    <div className="bacLec w-75" style={{

                    }}>
                        <div className="p-5">
                            <div className="p-3 ">

                            </div>
                        </div>
                    </div>
                </div>

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
                                    <div className="position-relative">
                                        <div className="position-absolute reiniciar">
                                            <img src="src/assets/svg/volver.svg" alt="Reiniciar" style={{ width: '30px', cursor: 'pointer' }} />
                                        </div>
                                        
                                        <div className="position-absolute play">
                                            <img src="src/assets/svg/play.svg" alt="Play" style={{ width: '25px', cursor: 'pointer' }} />
                                        </div>
                                        
                                        <div className="position-absolute expandir">
                                            <img src="src/assets/svg/expandir.svg" alt="Pantalla completa" style={{ width: '30px', cursor: 'pointer' }} />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>



            {/*  <div className="fon bg-transparent  d-flex justify-content-center">
                {/* <div className="img">
                <img className="w-75 d-flex justify-conte" src="/controles.png" alt=""/>
                </div> 

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
            </div> */}

        </>
    )
}
