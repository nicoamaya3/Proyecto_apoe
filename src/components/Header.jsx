import { Link } from "react-router-dom"
import "../stylesheets/Header.css"


export const Header = () => {
    return (
        <>

            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container">
                    <img className="lo" src="Logo.png" alt="" />
                    <Link className="navbar-brand fw-bold" to='/'>APOE!</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">APOE!</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">                
                                    <Link className="nav-link active" to='/' >Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    
                                    <Link className="nav-link active" to='/Nosotros'>Nosotros</Link>
                                </li>
                                <li className="nav-item">
                                    
                                    <Link className="nav-link active" to='/Perfil'>Perfil</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
