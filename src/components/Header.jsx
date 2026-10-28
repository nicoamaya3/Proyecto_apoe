import { useState } from "react"
import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { motion, AnimatePresence } from "framer-motion"

// Componente para manejar el hover y la etiqueta flotante de cada icono
const TooltipLink = ({ to, label, iconSrc, altText }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="position-relative d-flex align-items-center justify-content-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={to} className="sidebar-icon glow-effect">
                <img className="iconos glow-img" src={iconSrc} alt={altText} />
            </Link>

            {/* Mensaje flotante con animación */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="custom-tooltip"
                        initial={{ opacity: 0, x: -10, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0.9 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        {label}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="menu sidebar-container position-fixed top-0 start-0 d-flex align-items-center justify-content-center h-100 px-3 z-3 p-home">
            <motion.div 
                className="header custom-sidebar ms-4 d-flex flex-column align-items-center justify-content-between py-5 h-75 pt-4 pb-4 glow-box glow-effect pb-5"
                initial={{ opacity: 0, x: -90 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 10 }}
            >
                <TooltipLink 
                    to="/" 
                    label="Inicio" 
                    iconSrc="iconos/home.svg" 
                    altText="Home" 
                />
                
                <TooltipLink 
                    to="/GatoNegro" 
                    label="El gato negro" 
                    iconSrc="iconos/gato.svg" 
                    altText="Gato Negro" 
                />

                <TooltipLink 
                    to="/Delator" 
                    label="El corazón delator" 
                    iconSrc="iconos/corazon.svg" 
                    altText="Delator" 
                />

                <TooltipLink 
                    to="/Nosotros" 
                    label="Sobre nosotros" 
                    iconSrc="iconos/nosotros.svg" 
                    altText="Nosotros" 
                />

                <TooltipLink 
                    to="/Poe" 
                    label="Edgar Allan Poe" 
                    iconSrc="iconos/cuervo.svg" 
                    altText="Poe" 
                />
            </motion.div>
        </div>
    );
};