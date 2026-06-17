import { Lect } from "../components/Lect"
import { ReproductorCap2 } from "../components/ReproductorCap2.jsx"
import { Tutorial } from "../components/Tutorial.jsx"

export const Leyendo = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col z-3 position-absolute w-75 top-50 start-50 translate-middle rounded-3">
                        {/* <Tutorial /> */}
                        <ReproductorCap2/>
                    </div>
                </div>
            </div>
            <Lect cuento="url(./corazon.jpg)" llin="/Delator" nombreCap="Capítulo I — La confesión" />
        </>
    )
}
