import { useRef } from "react";
import LottieModule from "lottie-react";
import dataTakeshi from "../assets/dataTakeshi.json";
import dataPuerta from "../assets/dataPuerta.json";
import dataDragon from "../assets/dataDragon.json";
import dataSamurai from "../assets/dataSamurai.json";
import dataLamparas from "../assets/dataLamparas.json";
import dataMaceta from "../assets/dataMaceta.json";
import "../stylesheets/AnimacionCorazon.css";
import soundfile from "../../public/audios/Capitulo2Corazon.mp3";

/* ajksxnjksnx */

const Lottie = LottieModule.default;

export const ReproductorCap2 = () => {
  const lottieRefTake = useRef();
  const lottieRefPuerta = useRef();
  const lottieRefDragon = useRef();
  const lottieRefSamurai = useRef();
  const lottieRefLamparas = useRef();
  const lottieRefMaceta = useRef();
  const refAudio = useRef(new Audio(soundfile));
  const [animar, setAnimar] = useState(false);

  const iniciarAnimacion = () => {
    setAnimar(true);
  };

  const reproducirTa = () => {
    lottieRefTake.current.stop();
    lottieRefTake.current.play();
  };
  const reproducirP = () => {
    lottieRefPuerta.current.stop();
    lottieRefPuerta.current.play();
  };
  const reproducirDra = () => {
    lottieRefDragon.current.stop();
    lottieRefDragon.current.play();
  };
  const reproducirSa = () => {
    lottieRefSamurai.current.stop();
    lottieRefSamurai.current.play();
  };
  const reproducirLa = () => {
    lottieRefLamparas.current.stop();
    lottieRefLamparas.current.play();
  };
  const reproducirMa = () => {
    lottieRefMaceta.current.stop();
    lottieRefMaceta.current.play();
  };
  const reproducirAudio = () => {
    refAudio.current.play();
  };
  const pausarAudio = () => {
    refAudio.current.pause();
  };
  return (
    <>
      <div onClick={reproducirAudio} className="pantalla">
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
            onClick={iniciarAnimacion}
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
      </div>
      {/* cuando de play cambie a stop, para que solo funcione una vez*/}
      <button onClick={pausarAudio}>Detener</button>
    </>
  );
};
