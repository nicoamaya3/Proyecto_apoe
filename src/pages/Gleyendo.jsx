import { Lect } from "../components/Lect"
import { Tutorial } from "../components/Tutorial.jsx"


export const Gleyendo = () => {
    return (
        <>
            <Lect cuento="url(./gatoN.jpg)" llin="/GatoNegro" nombreCap="Capítulo I — " />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Tutorial />
                    </div>
                </div>
            </div>
        </>
    )
}
