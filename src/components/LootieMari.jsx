import Lottie from "lottie-react"
import ejercicioAnimation from "../assets/ejercicio.json"

export const LootieMari = () => {
  return (
    <div>
      <Lottie 
      animationData={ejercicioAnimation} 
      loop={true}
      style={{ width: 500, height: 500 }}
      />
    </div>
  )
}
