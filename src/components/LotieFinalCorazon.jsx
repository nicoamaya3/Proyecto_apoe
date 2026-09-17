import { useRef, useState } from "react";
import LottieModule from "lottie-react";


import dataMesaa from "../assets/dataMesaa.json";
import dataSilla from "../assets/dataSilla.json";
import dataMazeta from "../assets/dataMazeta.json";
import dataOla from "../assets/dataOla.json";
import dataCuerpo from "../assets/dataCuerpo.json";
import dataShogun from "../assets/dataShogun.json";
import dataT from "../assets/dataT.json";
import soundFinal from "../../public/audios/Cap5_sec_Final.mp3";



import "../stylesheets/AnimacionCorazon.css";



const Lottie = LottieModule.default;

export const LotieFinalCorazon = () => {

    const lottieRefMesa = useRef();
    const lottieRefSilla = useRef();
    const lottieRefMazeta = useRef();
    const lottieRefOla = useRef();
    const lottieRefCuerpo = useRef();
    const lottieRefShogun = useRef();
    const lottieRefT = useRef();

    const refAudio = useRef(new Audio(soundFinal));
    const [anima, setAnima] = useState(false);


    const iniciarCa = () => {
        setAnima(true);
    };

    const reproducirAudio = () => {
        refAudio.current.play();
    };
    const pausarAudio = () => {
        refAudio.current.pause();
    };

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

    const reproducirOla = () => {
        lottieRefOla.current.stop();
        lottieRefOla.current.play();
    };

    const reproducirCuerpo = () => {
        lottieRefCuerpo.current.stop();
        lottieRefCuerpo.current.play();
    };

    const reproducirShogun = () => {
        lottieRefShogun.current.stop();
        lottieRefShogun.current.play();
        lottieRefT.current.stop();
        lottieRefT.current.play();
    };



    return (
        <>
            <div onClick={reproducirAudio} className="pantalla">
                <img className="FondoS" src="fondoS.webp" alt="" />

                <div onClick={reproducirMazeta} className="Mazeta">
                    <Lottie
                        lottieRef={lottieRefMazeta}
                        animationData={dataMazeta}
                        loop={false}
                        autoplay={false}
                    />
                </div>

                <div onClick={reproducirOla} className="Ola">
                    <Lottie
                        lottieRef={lottieRefOla}
                        animationData={dataOla}
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

                <div onClick={reproducirCuerpo} className="Cuerpo">
                    <Lottie
                        lottieRef={lottieRefCuerpo}
                        animationData={dataCuerpo}
                        loop={false}
                        autoplay={false}
                    />
                </div>

                <div className="T">
                    <Lottie
                        className={`T ${anima ? 'activar-Camina' : ''}`}
                        lottieRef={lottieRefT}
                        animationData={dataT}
                        loop={false}
                        autoplay={false}
                    />
                </div>

                <div onClick={reproducirShogun} className="Shogun">
                    <Lottie
                        onClick={iniciarCa}
                        lottieRef={lottieRefShogun}
                        animationData={dataShogun}
                        loop={false}
                        autoplay={false}
                    />
                </div>

                <div className="position-absolute pausa">
                    <button onClick={pausarAudio}>Detener</button>
                </div>


                {/* a */}





            </div>
        </>
    )
}
