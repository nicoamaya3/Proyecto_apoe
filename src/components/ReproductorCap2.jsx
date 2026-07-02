
import { useRef } from "react"
import LottieModule from "lottie-react";
import dataTakeshi from "../assets/dataTakeshi.json"
import dataPuerta from "../assets/dataPuerta.json"
import dataDragon from "../assets/dataDragon.json"
import dataSamurai from "../assets/dataSamurai.json"
import dataLamparas from "../assets/dataLamparas.json"
import dataMaceta from "../assets/dataMaceta.json"
import "../stylesheets/AnimacionCorazon.css"

/* ajksxnjksnx */

const Lottie = LottieModule.default;

export const ReproductorCap2 = () => {

    const lottieRefTake = useRef()
    const lottieRefPuerta = useRef()
    const lottieRefDragon = useRef()
    const lottieRefSamurai = useRef()
    const lottieRefLamparas = useRef()
    const lottieRefMaceta = useRef()

    const reproducirTa = () => {
        lottieRefTake.current.stop()
        lottieRefTake.current.play()
    }
    const reproducirP = () => {
        lottieRefPuerta.current.stop()
        lottieRefPuerta.current.play()
    }
    const reproducirDra = () => {
        lottieRefDragon.current.stop()
        lottieRefDragon.current.play()
    }
    const reproducirSa = () => {
        lottieRefSamurai.current.stop()
        lottieRefSamurai.current.play()
    }
    const reproducirLa = () => {
        lottieRefLamparas.current.stop()
        lottieRefLamparas.current.play()
    }
    const reproducirMa = () => {
        lottieRefMaceta.current.stop()
        lottieRefMaceta.current.play()
    }

    return (

        <>
            <div className="pantalla">
                <img className="cuartoTakeshi" src="CuartoTakeshi.webp" alt="" />
                
                 <div onClick={reproducirP} className="puerta">
                    <Lottie
                        lottieRef={lottieRefPuerta}
                        animationData={dataPuerta}
                        loop={false}
                        autoplay={false}
                    />
                </div> 
                 <div onClick={reproducirDra} className="cuadroDragon">
                    <Lottie
                        lottieRef={lottieRefDragon}
                        animationData={dataDragon}
                        loop={false}
                        autoplay={false}
                    />
                </div>
                <div onClick={reproducirMa} className="maceta">
                    <Lottie
                        lottieRef={lottieRefMaceta}
                        animationData={dataMaceta}
                        loop={false}
                        autoplay={false}
                    />
                </div> 
                 <div onClick={reproducirSa} className="cuadroSamurai">
                    <Lottie
                        lottieRef={lottieRefSamurai}
                        animationData={dataSamurai}
                        loop={false}
                        autoplay={false}
                    />
                </div> 
                <div onClick={reproducirTa} className="takeshi">
                    <Lottie
                        lottieRef={lottieRefTake}
                        animationData={dataTakeshi}
                        loop={false}
                        autoplay={false}
                    />
                </div>
                <div onClick={reproducirLa} className="lampara">
                    <Lottie
                        lottieRef={lottieRefLamparas}
                        animationData={dataLamparas}
                        loop={false}
                        autoplay={false}
                    />
                </div>
                
            </div >
        </>
    )
}
