import { Lect } from "../components/Lect"
import { Tutorial } from "../components/Tutorial.jsx"

export const Leyendo = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col z-3 position-absolute w-75 top-50 start-50 translate-middle rounded-3">
                        <Tutorial />
                    </div>
                </div>
            </div>
            <Lect cuento="url(./corazon.jpg)" llin="/Delator" nombreCap="Capítulo I — La confesión" />
        </>
    )
}
