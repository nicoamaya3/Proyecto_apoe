import "../stylesheets/Seccion.css"
import { Link } from "react-router-dom"

export const Inicioseccion = () => {
    return (
        <>
            <div className="p-5 bg-black ">
                <div className="p-5">
                <a className=" text-white link-offset-2 link-underline link-underline-opacity-0" href=""> ← Volver al inicio</a>
                </div>
                <div className="d-flex justify-content-center p-5 flex-column align-items-center text-white ">
                    <div className="text-center p-3">
                        <img className="tat bg-success rounded-circle" src="usuario.png" alt="" />
                        <h2 className="fw-bold">INICIAR SESIÓN</h2>
                    </div>
                    <form className="p-5 w-50">
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
