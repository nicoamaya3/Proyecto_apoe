import { Cuentos } from "../components/Cuentos"
import { Problemas } from "../components/Problemas"
import "../stylesheets/General.css"
import { motion } from "motion/react"

export const Home = () => {
  return (
    <>
      <section className="bg-black">

      <div className="container-fluid foo">
        <section className="bg-transparent d-flex flex-row-reverse">
          <motion.div className="bg-black me-5 barra rounded-bottom-5 "
            initial={{ opacity: 0, y:-100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", duration: 1 }}>
            <p className="bg-black p-home text-white fs-6  text-center pt-3">Apoe!</p>
          </motion.div>
        </section>
        <div className="row" >
          <div className="col p-5 d-flex align-items-center justify-content-center ">
            <div className="degradado d-flex flex-row-reverse w-75 bg-black gap-5 p-5 mt-5 rounded-5">
              <div className="d-flex align-items-center justify-content-center flex-column">
              <div className="">
                <img className="p-2 apoel" src="iconos/logo.png" alt="" />
              </div>
              <p className="w-50 fs-5 text-center text-white p-2 ">Reconecta con el placer de la lectura a través de cuentos ilustrados e interactivos basados en las obras maestras de Edgar Allan Poe</p>
            </div>
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
        <div className="col text-center">
          <h2 className="fontCard footer fs-4 fw-bold">
            APOE! · SENA · Producción Multimedia · 2025
          </h2>
        </div>
      </section>
      </div>

      </section>


    </>
  )
}

/*  */