import { useRef } from "react"
import LottieModule from "lottie-react";
import arbustosdel from "../assets/arbustosdel.json"
import "../stylesheets/AnimacionGato.css"

const Lottie = LottieModule.default;


export const ReproductorGa = () => {

  const lottieRefarbustosdel = useRef()

  const reproducirarbustosdel = () => {
        lottieRefarbustosdel.current.stop()
        lottieRefarbustosdel.current.play()
  }


  return (
    <>
    <div className="escenario py-5">
      <img className='exterior' src="escenario.webp" alt="" />
      <div>
        <Lottie onClick={reproducirarbustosdel} className="arbustosdel"
          lottieRef={lottieRefarbustosdel}
          animationData={luz}
          loop={false}
          autoplay={false}
        />
      </div>

    </div>
    
    
    </>
  )
}


