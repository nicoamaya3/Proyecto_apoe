import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { motion } from "motion/react"

export const Header = () => {
    return (
        <>
            <div className="menu sidebar-container position-fixed top-0 start-0 d-flex align-items-center justify-content-center h-100 px-3 z-3">
                <motion.div 
                    className="header custom-sidebar ms-4 d-flex flex-column align-items-center justify-content-between py-5 h-75 pt-4 pb-4 glow-box glow-effect pb-5"
                    initial={{ opacity: 0, x: -90 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 10 }}
                >
                    <Link to='/' className="sidebar-icon glow-effect">
                        <img className="iconos glow-img" src="iconos/home.svg" alt="Home" />
                    </Link>
                    
                    <Link to='/GatoNegro' className="sidebar-icon glow-effect">
                        <img className="iconos glow-img" src="iconos/gato.svg" alt="Gato Negro" />
                    </Link>

                    <Link to='/Delator' className="sidebar-icon glow-effect">
                        <img className="iconos glow-img" src="iconos/corazon.svg" alt="Delator" />
                    </Link>

                    <Link to='/Nosotros' className="sidebar-icon glow-effect">
                        <img className="iconos glow-img" src="iconos/nosotros.svg" alt="Nosotros" />
                    </Link>

                    <Link to='/Poe' className="sidebar-icon glow-effect">
                        <img className="iconos glow-img" src="iconos/cuervo.svg" alt="Poe" />
                    </Link>

                </motion.div>
            </div>
        </>
    )
}