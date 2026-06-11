import LottieModule from "lottie-react";
import dataNico from "../assets/Osooo.json"
import { useRef } from "react";
import "../stylesheets/LottieNico.css"

const Lottie = LottieModule.default;



export const LotieNicolas = () => {
  
  const lottieRef = useRef()

  const reproducir = () => {
    lottieRef.current.stop()
    lottieRef.current.play()
  }


  return (
    <>
    
    {/* <div onClick={reproducir} className="bg-black d-flex justify-content-center">
        <Lottie
        lottieRef={lottieRef}
        animationData={dataNico}
        loop={false}
        autoplay={false}
        style={{ width: 500, height: 500 }}
        />
    </div> */}

    <div className="screen">
      <img className="fondo" src="fondo.webp" alt="" />
    </div>
    
    </>
  )
}
