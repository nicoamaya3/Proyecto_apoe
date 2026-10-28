import "../stylesheets/General.css"
import { motion } from "motion/react"

export const Problema = ({ tituloo, descripcion, icon }) => {
    return (
        <>


            <motion.div className="container"
             whileHover={{
                scale: [null, 1.0, 1.1],
                transition: {
                    duration: 0.5,
                    times: [0, 0.6, 1],
                    ease: ["easeInOut", "easeOut"],
                },
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}>
                <div className="row d-flex flex-column align-items-center">
                    <div className="bg-dark  rounded-4">


                        <div className="d-flex flex-column text-white p-3 text-center gap-1">
                            <div>
                                <img className="ico" src={icon} alt="" />
                            </div>
                            <h5 className="fontCard">{tituloo}</h5>
                            <p>{descripcion}</p>
                        </div>


                    </div>
                </div>
            </motion.div>

        </>
    )
}
