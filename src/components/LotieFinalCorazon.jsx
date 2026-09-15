import { useRef } from "react";
import LottieModule from "lottie-react";


import dataMesaa from "../assets/dataMesaa.json";
import dataSilla from "../assets/dataSilla.json";
import dataMazeta from "../assets/dataMazeta.json";



import "../stylesheets/AnimacionCorazon.css";



const Lottie = LottieModule.default;

export const LotieFinalCorazon = () => {

    const lottieRefMesa = useRef();
    const lottieRefSilla = useRef();
    const lottieRefMazeta = useRef();


     const reproducirMesaa = () => {
    lottieRefMesa.current.stop();
    lottieRefMesa.current.play();
  };

     const reproducirSilla = () => {
    lottieRefSilla.current.stop();
    lottieRefSilla.current.play();
  };

     const reproducirMazeta = () => {
    lottieRefMazeta.current.stop();
    lottieRefMazeta.current.play();
  };


    return (
        <>
            <div className="pantalla">
                <img className="FondoS" src="fondoS.webp" alt="" />

                <div onClick={reproducirMazeta} className="Mazeta">
                    <Lottie
                        lottieRef={lottieRefMazeta}
                        animationData={dataMazeta}
                        loop={false}
                        autoplay={false}
                    />
                </div>

                <div onClick={reproducirMesaa} className="Mesaa">
                    <Lottie
                        lottieRef={lottieRefMesa}
                        animationData={dataMesaa}
                        loop={false}
                        autoplay={false}
                    />
                </div>

                <div onClick={reproducirSilla} className="Silla">
                    <Lottie
                        lottieRef={lottieRefSilla}
                        animationData={dataSilla}
                        loop={false}
                        autoplay={false}
                    />
                </div>

                
                

            </div>
        </>
    )
}
