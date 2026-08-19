import { useRef, useState } from "react"
import { motion } from "motion/react"
import LottieModule from "lottie-react";
import arbustosdel from "../assets/arbustosdel.json"
import nubes from "../assets/nubes.json"
import arbustostra from "../assets/arbustostra.json"
import "../stylesheets/AnimacionGato.css"
import audio from '../assets/audio/ambiente.mp3'
import suelo from '../assets/suelo.png'
import valla from '../assets/valla.png'
import casa from '../assets/casa.png'
import luz from '../assets/luz.png'


const Lottie = LottieModule.default;


export const ReproductorGa = () => {

  const lottieRefarbustosdel = useRef()
  const lottieRefnubes = useRef()
  const lottieRefarbustostra = useRef()
  const refAudiogato = useRef(new Audio(audio));
  const [animacionActiva, setAnimacionActiva] = useState(false);



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
  const reproducirAudiogato = () => {
    refAudiogato.current.play();
  };
  const pausarAudiogato = () => {
    refAudiogato.current.pause();
  };



  return (
    <>
      <div className="escenario py-5 ">
        <img onClick={reproducirAudiogato} className='exterior' src="escenario.webp" alt="" />

        <div>
          <Lottie onClick={reproducirnubes} className="nubes"
            lottieRef={lottieRefnubes}
            animationData={nubes}
            loop={false}
            autoplay={false}
          />
        </div>


        <div>
          <Lottie onClick={reproducirarbustostra} className="arbustostra"
            lottieRef={lottieRefarbustostra}
            animationData={arbustostra}
            loop={false}
            autoplay={false}
          />
        </div>

        <img className="suelo" src={suelo} alt="" />
        <img className="casa" src={casa} alt="" />

        <img onClick={reproducirarbustostra} className="valla" className="valla" src={valla} alt="" />

        <div>
          <Lottie onClick={reproducirarbustosdel} className="arbustosdel"
            lottieRef={lottieRefarbustosdel}
            animationData={arbustosdel}
            loop={false}
            autoplay={false}
          />
        </div>

        <div>
          <img
            src={luz}
            alt="Haz de luz"
            className={`luz ${animacionActiva ? 'animada' : ''}`}
            onClick={() => setAnimacionActiva(true)}
          />
        </div>
      </div>
      <button onClick={pausarAudiogato}>Pausar</button>

    </>
  )
}


