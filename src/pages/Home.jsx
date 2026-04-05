import { Cuentos } from "../components/Cuentos"
import { Problemas } from "../components/Problemas"
import "../stylesheets/Home.css"

export const Home = () => {
  return (
    <>
      <div className="foo" style={{backgroundImage: "url(./cuervo.jpg)",
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

      <Problemas/>

      <Cuentos/>

    </>
  )
}
