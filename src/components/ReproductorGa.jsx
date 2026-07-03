import { useRef } from "react"
import { motion } from "motion/react"
import LottieModule from "lottie-react";
import arbustosdel from "../assets/arbustosdel.json"
import nubes from "../assets/nubes.json"
import arbustostra from "../assets/arbustostra.json"
import "../stylesheets/AnimacionGato.css"
import audio from '../assets/audio/ambiente.mp3'

const Lottie = LottieModule.default;


export const ReproductorGa = () => {

  const lottieRefarbustosdel = useRef()
  const lottieRefnubes = useRef()
  const lottieRefarbustostra = useRef()


  const reproducirarbustosdel = () => {
        lottieRefarbustosdel.current.stop()
        lottieRefarbustosdel.current.play()
  }
  const reproducirnubes = () => {
        lottieRefnubes.current.stop()
        lottieRefnubes.current.play()
  }
  const reproducirarbustostra = () => {
        lottieRefarbustostra.current.stop()
        lottieRefarbustostra.current.play()
  }

  return (
    <>
    <div className="escenario py-5">
      <img className='exterior' src="escenario.webp" alt="" />
    </div>
      <div>
        <Lottie onClick={reproducirarbustosdel} className="arbustosdel"
          lottieRef={lottieRefarbustosdel}
          animationData={arbustosdel}
          loop={false}
          autoplay={false}
        />
      </div>
      <div>
        <Lottie onClick={reproducirnubes} className="nubes"
          lottieRef={lottieRefnubes}
          animationData={nubes}
          loop={false}
          autoplay={false}
        />
      </div>
      <div>
        <img className="casa" src="src/assets/casa.png" alt="" />
      </div>
      <div>
        <img onClick={reproducirarbustostra} className="arbustostra" className="valla" src="src/assets/valla.png" alt="" />
      </div>
      <div>
        <img className="suelo" src="src/assets/suelo.png" alt="" />
      </div>

      <motion.div 
                initial={{ opacity: 0, }}
                animate={{ opacity: 1,}}
                exit={{ opacity: 0, scale: 0.8 }}>
        <img className="luz" src="src/assets/luz.png" alt="" />
      </motion.div>
    <div>
        <Lottie onClick={reproducirarbustostra} className="arbustostra"
          lottieRef={lottieRefarbustostra}
          animationData={arbustostra}
          loop={false}
          autoplay={false}
        />
    </div>
    
    
    </>
  )
}


