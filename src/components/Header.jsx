import { Link } from "react-router-dom"
import "../stylesheets/General.css"
import { motion } from "motion/react"

export const Header = () => {
    return (
        <>
            
            <div className="sidebar-container position-fixed top-0 start-0 d-flex align-items-center justify-content-center h-100 px-3">
                <motion.div className="custom-sidebar d-flex flex-column align-items-center justify-content-between py-4"
                initial={{ opacity: 0, x:-100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", duration: 1 }}>

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



            {/* <nav classNameName="navbar navbar-dark bg-black fixed-top shadow-sm">
                <div classNameName="container d-flex justify-content-between justify-content-md-start gap-md-5">
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <Link to='/' classNameName="parrafo navbar-brand fontCard" href="#">Apoe!</Link>

                    <div style={{
                        background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)', borderRadius: '15px'
                    }} classNameName="offcanvas offcanvas-start text-bg-dark text-center" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div style={{ background: 'transparent' }} classNameName="offcanvas-header justify-content-end">

                            <button type="button" classNameName="btn-close btn-close-white mb-5 me-1" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                        </div>
                        <div classNameName='logo bg-white rounded-circle p-2 p-md-3 mx-auto'>
                            <img src="/public/Logo.png" alt="" />
                        </div>
                        <div style={{ background: 'transparent' }} classNameName="offcanvas-body">
                            <ul classNameName="navbar-nav flex-grow-1 fs-5">
                                <li classNameName="nav-item mb-2">
                                    <Link to='/' classNameName="nav-link active" aria-current="page" href="#">✪ Inicio</Link>
                                </li>
                                <li classNameName="nav-item dropdown mb-2">
                                    <Link to='/Cuentos' classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ✒ Cuentos
                                    </Link>
                                    <ul classNameName="dropdown-menu dropdown-menu-dark bg-black border-secondary">
                                        <li><Link to='/Gatonegro' classNameName="dropdown-item" href="#">🐈‍⬛ Gato Negro</Link></li>
                                        <li><Link to='Delator' classNameName="dropdown-item"
                                            href="#">🫀 Corazón Delator</Link></li>
                                    </ul>
                                </li>
                                <li classNameName="nav-item">
                                    <Link to='Nosotros' classNameName="nav-link" href="#">⍟ Nosotros</Link>
                                </li>
                            </ul>

                        </div>
                        <p classNameName="parrafo mt-auto small opacity-50 px-3">© 2026 Apoe! - Todos los derechos reservados.</p>
                    </div>
                </div>
            </nav> */}

        </>
    )
}
