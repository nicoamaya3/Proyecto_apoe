
import { useRef } from "react"
import LottieModule from "lottie-react";
import dataFondo from "../assets/Fondo.json"

const Lottie = LottieModule.defaul ;

export const ReproductorCap2 = () => {

    const lottieRef = useRef()

    const reproducirF = () => {
        lottieRef.current.stop()
        lottieRef.current.play()
    }

    return (


        <>
            
        </>
    )
}
