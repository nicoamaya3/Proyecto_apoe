import { Link } from "react-router-dom"
import "../stylesheets/General.css"


export const Header = () => {
    return (
        <>

        <div className="bg-black barra rounded-bottom-5 ">
        <p className="bg-black text-white fontCard fs-5 text-center pt-2">Apoe!</p>
        </div>

            <div className="sidebar-container position-fixed top-0 start-0 d-flex align-items-center justify-content-center h-100 px-3">
                <div className="custom-sidebar d-flex flex-column align-items-center justify-content-between py-4">

                    <a href="#" className="sidebar-icon">
                        
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                        </a>

                        {/* <i className="bi bi-house-door-fill"><img src="iconos/Recurso1.svg" alt="" /></i> */} </a>

                    <a href="#" className="sidebar-icon">
                        <span className="icon-cat">🐈‍⬛</span>
                    </a>

                    <a href="#" className="sidebar-icon">
                        <span className="icon-heart">🫀</span>
                    </a>

                    <a href="#" className="sidebar-icon">
                        <span className="icon-barrel">☠️</span>
                    </a>

                    <a href="#" className="sidebar-icon">
                        <span className="icon-handcuffs">⛓️</span>
                    </a>

                </div>
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
