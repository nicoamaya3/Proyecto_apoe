import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { motion } from "motion/react"

export const Header = () => {
    return (
        <>
            
            <div className="menu sidebar-container position-fixed top-0 start-0 d-flex align-items-center justify-content-center h-100 px-3">
                <motion.div className="header custom-sidebar ms-4 d-flex flex-column align-items-center justify-content-between py-5 h-75 pt-4 pb-4"
                initial={{ opacity: 0, x:-90 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, duration: 1.2, type: "spring", stiffness: 100, damping: 10}}>

                    <Link to='/' className="sidebar-icon">
                        <img className="iconos" src="iconos/home.svg" alt="" />
                    </Link>
                    
                    <Link to='/GatoNegro' href="#" className="sidebar-icon">
                        <img className="iconos" src="iconos/gato.svg" alt="" />
                    </Link>

                    <Link to='/Delator' href="#" className="sidebar-icon">
                        <img className="iconos" src="iconos/corazon.svg" alt="" />
                    </Link>

                    <Link to='/Nosotros' href="#" className="sidebar-icon">
                        <img className="iconos" src="iconos/nosotros.svg" alt="" />
                    </Link>

                    <a href="#" className="sidebar-icon">
                        <img className="iconos" src="iconos/cuervo.svg" alt="" />
                    </a>

                </motion.div>
            </div>

        </>
    )
}
