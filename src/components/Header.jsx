import { Link } from "react-router-dom"
import "../stylesheets/Header.css"


export const Header = () => {
    return (
        <>

            <nav className="navbar navbar-dark bg-black fixed-top shadow-sm">
                <div className="container d-flex justify-content-between justify-content-md-start gap-md-5">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to='/' className="parrafo navbar-brand" href="#">Apoe!</Link>

                    <div style={{
                        background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)', borderRadius: '15px'
                    }} className="offcanvas offcanvas-start text-bg-dark text-center" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div style={{ background: 'transparent' }} className="offcanvas-header justify-content-end">

                            <button type="button" className="btn-close btn-close-white mb-5 me-1" data-bs-dismiss="offcanvas" aria-label="Close"></button>

                        </div>
                        <div className='logo bg-white rounded-circle p-2 p-md-3 mx-auto'>
                            <img src="/apoe.png" alt="" />
                        </div>
                        <div style={{ background: 'transparent' }} className="offcanvas-body">
                            <ul className="navbar-nav flex-grow-1 fs-5">
                                <li className="nav-item mb-2">
                                    <Link to='/' className="nav-link active" aria-current="page" href="#">✪ Inicio</Link>
                                </li>
                                <li className="nav-item dropdown mb-2">
                                    <Link to='/Cuentos' className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ✒ Cuentos
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-dark bg-black border-secondary">
                                        <li><Link to='/Gatonegro' className="dropdown-item" href="#">🐈‍⬛ Gato Negro</Link></li>
                                        <li><Link to='Delator' className="dropdown-item"
                                            href="#">🫀 Corazón Delator</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to='Nosotros' className="nav-link" href="#">⍟ Nosotros</Link>
                                </li>
                            </ul>

                        </div>
                        <p className="parrafo mt-auto small opacity-50 px-3">© 2026 Apoe! - Todos los derechos reservados.</p>
                    </div>
                </div>
            </nav>

        </>
    )
}
