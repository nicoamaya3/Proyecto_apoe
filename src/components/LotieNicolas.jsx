import Lottie from "lottie-react";
import dataNico from "..assets/dataNico.json"


export const LotieNicolas = () => {
  return (
    <>
    
    <div>
        <Lottie
        dataNico={dataNico}
        loop={true}
        style={{ width: 500, height: 500 }}
        />
    </div>
    
    </>
  )
}
