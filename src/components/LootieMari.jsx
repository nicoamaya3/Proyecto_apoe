import LottieModule from "lottie-react"
import ejercicioAnimation from "../assets/oso.json"
import pinguinoAnimation from "../assets/pinguino.json"
import { useRef } from "react";

const Lottie = LottieModule.default;

export const LootieMari = () => {

  const lottieRef = useRef()

  const reproducir = () => {
    lottieRef.current.stop()
    lottieRef.current.play()
  }

  return (
    <div className="lottie-container" onClick={reproducir}>
      <Lottie 
      lottieRef={lottieRef}
      animationData={ejercicioAnimation} 
      loop={false}
      autoplay={false}
      style={{ width: 500, height: 500 }}
      />
    </div>
  )
}
