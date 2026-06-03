import LottieModule from "lottie-react"
import ejercicioAnimation from "../assets/ejercicio.json"
import { useRef } from "react";

const Lottie = LottieModule.default;

export const LootieMari = () => {

  const lottieRef = useRef()

  const reproducir = () => {
    lottieRef.current.stop()
    lottieRef.current.play()
  }

  return (
    <div onClick={reproducir}>
      <Lottie 
      lottieRef={lottieRef}
      animationData={ejercicioAnimation} 
      loop={true}
      autoplay={false}
      style={{ width: 500, height: 500 }}
      />
    </div>
  )
}
