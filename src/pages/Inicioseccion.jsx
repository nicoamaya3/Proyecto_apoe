

export const Inicioseccion = () => {
    return (
        <>
        <div className="p-5 bg-black">
        <div className="d-flex justify-content-center p-5 flex-column align-items-center text-white ">
            <div className="text-center p-3">
            <h2 className="fw-bold">INICIAR SESIÓN</h2>
            </div>
            <form className="p-5 w-50">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">tu@correo.com</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
        </div>



        </>
    )
}
