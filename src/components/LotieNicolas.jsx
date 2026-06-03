import LottieModule from "lottie-react";
import dataNico from "../assets/dataNico.json"
import { useRef } from "react";

const Lottie = LottieModule.default;



export const LotieNicolas = () => {
  
  const lottieRef = useRef()

  const reproducir = () => {
    lottieRef.current.stop()
    lottieRef.current.play()
  }
  

  return (
    <>
    
    <div onClick={reproducir} className="bg-black">
        <Lottie
        lottieRef={lottieRef}
        animationData={dataNico}
        loop={true}
        autoplay={false}
        style={{ width: 500, height: 500 }}
        />
    </div>
    
    </>
  )
}
