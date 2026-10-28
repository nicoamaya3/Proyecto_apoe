
import LottieModule from "lottie-react";
import dataNico from "../assets/Osooo.json"
import dataPin from "../assets/pingui.json"
import { useRef } from "react";
import "../stylesheets/LottieNico.css"

const Lottie = LottieModule.default;



export const LotieNicolas = () => {

  const lottieRef = useRef()
  const lottieRefP = useRef()

  const reproducir = () => {
    lottieRef.current.stop()
    lottieRef.current.play()
  }
  const reproducirP = () => {
    lottieRefP.current.stop()
    lottieRefP.current.play()
  }
  const lanzarHielo = () => {
    lottieRefP.current.stop()
    lottieRefP.current.playSegments([0,20], true)
  }
  
  const lanzarPez = () => {
    lottieRefP.current.stop()
    lottieRefP.current.playSegments([30,70], true)
  }


  return (
    <>


      <div className="screen">
        <img className="fondo" src="fondo.webp" alt="" />
        <img className="nube1" src="nube2.webp" alt="" />
        <img className="nube2" src="nube1.webp" alt="" />
        <img className="pezM"
        onClick={lanzarPez}
        src="pezMuerto.webp" alt="" />
        <img className="hielo"
        onClick={lanzarHielo}
        src="hielo1.webp" alt="" />
        <div onClick={reproducir} className="osoN">
          <Lottie
            lottieRef={lottieRef}
            animationData={dataNico}
            loop={false}
            autoplay={false}

          />
        </div>
        <div onClick={reproducirP} className="pinguinoN">
          <Lottie
            lottieRef={lottieRefP}
            animationData={dataPin}
            loop={false}
            autoplay={false}

          />
        </div>
      </div>
    </>
  )
}
