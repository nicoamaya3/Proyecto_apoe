import { Link } from "react-router-dom"
import "../stylesheets/Seccion.css"

export const Inicioseccion = () => {
    return (
        <>
            <div className="p-5 bg-black ">
                <div className="p-5">
               
                <Link className=" text-white link-offset-2 link-underline link-underline-opacity-0 " to='/'>← Volver al inicio</Link>
                </div>
                <div className="container d-flex justify-content-center flex-column align-items-center text-white ">
                    <div className="text-center p-3">
                        <img className="tat bg-success rounded-circle" src="usuario.png" alt="" />
                        <h2 className="fw-bold">INICIAR SESIÓN</h2>
                    </div>
                    <form className="p-5 w-100 maax">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                            <input type="email" className="form-control bg-transparent " id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text text-white">tu@correo.com</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                            <input type="password" className="form-control bg-transparent" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 p-2 rounded-4 bg-success">INICIAR SESIÓN</button>
                    </form>

                </div>
            </div>



        </>
    )
}
