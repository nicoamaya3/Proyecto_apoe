import { Cuentos } from "../components/Cuentos"
import { Problemas } from "../components/Problemas"
import "../stylesheets/General.css"

export const Home = () => {
  return (
    <>
      <div className="container-fluid foo" style={{
        backgroundColor: "var(--vinotinto)"
      }}>
        <section className="bg-transparent">
          <div className="bg-black barra rounded-bottom-5 ">
            <p className="bg-black text-white fontCard fs-5 text-center pt-2">Apoe!</p>
          </div>
        </section>
        <div className="row" >
          <div className="col-8 p-5">
            <div className="degradado d-flex flex-column align-items-center w-75  gap-5 p-5">
              <div className="">
                <img className="p-2 apoel" src="iconos/logo.png" alt="" />
              </div>
              <p className="w-50 fs-5 text-center text-white">Reconecta con el placer de la lectura a través de cuentos ilustrados e interactivos basados en las obras maestras de Edgar Allan Poe</p>
            </div>
          </div>
          <div className="col-4 p-5">
            <div className="d-flex flex-column align-items-center  gap-5 p-5">
              <h1>dakhdb</h1>
            </div>
          </div>
        </div>
      </div>

      <Problemas />



      <Cuentos />

      <div className="bg-black">

        <div className="container p-5">
          <div className="row">
            <div className="text-white">
              <div className="text-center">
                <h2 className="fw-bold fontTitu">NOSOTROS</h2>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <div className="col-12 col-md-12 mt-4 w-25 text-center p-5 ">
                  <div className="cc p-2 bg-success rounded">
                    <img className="dd  w-50 " src="./usuario.png" alt="" />
                  </div>
                  <h5 className="fontCard">Nicolás Atehortúa</h5>
                  <p>Desarrollo Web</p>
                </div>
                <div className="col-12 col-md-12 mt-4  w-25 text-center p-5 ">
                  <div className="cc p-2 bg-success rounded">
                    <img className="dd  w-50 " src="./usuario.png" alt="" />
                  </div>
                  <h5 className="fontCard">Mariana Martínez</h5>
                  <p>Diseño & Contenido</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      <section className="navbar rounded-top-5 position-relative bg-black ">
        <div class="col text-center">
          <h2 className="fontCard footer fs-4 fw-bold">
            APOE! · SENA · Producción Multimedia · 2025
          </h2>
        </div>
      </section>
      </div>

    </>
  )
}

/*  */