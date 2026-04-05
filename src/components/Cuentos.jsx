
import "../stylesheets/Cuentos.css"
import { Infocuentos } from "../components/Infocuentos"

export const Cuentos = () => {
    return (
        <>


            <div className="fondoo p-5 d-flex flex-column gap-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-white text-center d-flex flex-column align-items-center gap-2">
                                <h1 className="fw-bold" >CUENTOS</h1>
                                <p className="w-50">Dos obras maestras de Edgar Allan Poe reimaginadas como experiencias visuales interactivas</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="row">
                        <div className="col">
                             <Infocuentos />
                        </div>
                        <div className="col">
                             <Infocuentos />
                        </div>
                    </div>
                </div>




               
                
            

            </div>


        </>
    )
}
