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
                    <div className="col position-absolute w-75">
                        <ReproductorGa/>
                    </div>
                </div>
            </div>
            <Lect cuento="url(./gatoN.jpg)" llin="/GatoNegro" nombreCap="Capítulo I — " />
        </>
    )
}
