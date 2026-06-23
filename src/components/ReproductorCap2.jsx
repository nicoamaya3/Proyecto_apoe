
import { useRef } from "react"
import LottieModule from "lottie-react";
import dataTakeshi from "../assets/dataTakeshi.json"
import dataPuerta from "../assets/dataPuerta.json"
import "../stylesheets/AnimacionCorazon.css"

/* ajksxnjksnx */

const Lottie = LottieModule.default;

export const ReproductorCap2 = () => {

    const lottieRefTake = useRef()
    const lottieRefPuerta = useRef()

    const reproducirTa = () => {
        lottieRefTake.current.stop()
        lottieRefTake.current.play()
    }
    const reproducirP = () => {
        lottieRefPuerta.current.stop()
        lottieRefPuerta.current.play()
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
                <div onClick={reproducirTa} className="takeshi">
                    <Lottie
                        lottieRef={lottieRefTake}
                        animationData={dataTakeshi}
                        loop={false}
                        autoplay={false}
                    />
                </div>
            </div >
        </>
    )
}
