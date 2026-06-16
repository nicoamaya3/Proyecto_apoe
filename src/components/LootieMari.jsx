import LottieModule from "lottie-react"
import ejercicioAnimation from "../assets/oso.json"
import pinguinoAnimation from "../assets/pingui.json"
import "../stylesheets/LottieMari.css"
import { useRef } from "react";

const Lottie = LottieModule.default;

export const LootieMari = () => {

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

  const salto = () => {
	lottieRefP.current.stop()
	lottieRefP.current.playSegments([0, 19], true)
  }

  const baile = () => {
	lottieRefP.current.stop([15, 30], true)
	lottieRefP.current.play()
  }



  return (
    
    <>
    
    <div className="lottie-container oso" onClick={reproducir}>
      <Lottie 
      lottieRef={lottieRef}
      animationData={ejercicioAnimation} 
      loop={false}
      autoplay={false}
      />
    </div> 

    <div className="lottie-container pinguino" onClick={reproducirP}>
      <Lottie 
      lottieRef={lottieRefP}
      animationData={pinguinoAnimation} 
      loop={false}
      autoplay={false}
      />
    </div> 


    <div className="screen">
      <img className="fondo" src="fondo.webp" alt=""></img>
      <img className="nube1" src="nube1.webp" alt=""></img>
      <img className="nube2" src="nube2.webp" alt=""></img>
      <img className="pezm" onClick={baile} src="pezMuerto.webp" alt="" />
      <img className="hielo1" onClick={salto} src="hielo1.webp" alt="" />
    </div>

    </>


  )
}
