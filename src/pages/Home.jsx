import { Cuentos } from "../components/Cuentos"
import { Problemas } from "../components/Problemas"
import "../stylesheets/Home.css"

export const Home = () => {
  return (
    <>
      <div className="foo" style={{
        backgroundImage: "url(./cuervo.jpg)",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container">
          <div className="row">
            <div className="col p-5">
              <div className="d-flex flex-column align-items-center gap-5 p-5">
                <div className="bg rounded">
                  <img className="p-2 apoel" src="Logooo.png" alt="" />
                </div>
                <p className="w-50 fs-5 text-center text-white">Reconecta con el placer de la lectura a través de cuentos ilustrados e interactivos basados en las obras maestras de Edgar Allan Poe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Problemas />

      <Cuentos />

      <div className="bg-black">

        <div className="container">
          <div className="row">
            <div className="col text-white">
              <div className="text-center">
                <h2 className="fw-bold">ACERCA DE NOSOTROS</h2>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <div className="w-25 text-center p-5 ">
                  <div className=" p-2 bg-success rounded">
                    <img className="dd  w-50 " src="./usuario.png" alt="" />
                  </div>
                  <h5>Nicolás Atehortúa</h5>
                  <p>Desarrollo Web</p>
                </div>
                <div className="w-25 text-center p-5 ">
                  <div className=" p-2 bg-success rounded">
                    <img className="dd  w-50 " src="./usuario.png" alt="" />
                  </div>
                  <h5>Mariana Martínez</h5>
                  <p>Diseño & Contenido</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
