
import { useRef } from "react"
import LottieModule from "lottie-react";
import dataTakeshi from "../assets/dataTakeshi.json"
import "../stylesheets/General.css"

const Lottie = LottieModule.default;

export const ReproductorCap2 = () => {

    const lottieRefTake = useRef()

    const reproducirF = () => {
        lottieRefTake.current.stop()
        lottieRefTake.current.play()
    }

    return (

        <>
            <div className="pantalla">
                <div onClick={reproducirF} className="takeshi">
                <Lottie
                    lottieRef={lottieRefTake}
                    animationData={dataTakeshi}
                    loop={false}
                    autoplay={false}
                />
                </div>
            </div>
        </>
    )
}
