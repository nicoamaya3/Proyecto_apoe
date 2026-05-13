import { Lect } from "../components/Lect"
import { Tutorial } from "../components/Tutorial.jsx"

export const Leyendo = () => {
    return (
        <>

            <Lect cuento="url(./corazon.jpg)" 
            llin="/Delator" nombreCap="Capítulo I — La confesión" />
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
