
import { Link } from "react-router-dom"
import "../stylesheets/General.css"

export const Infocuentos = ({ titi, des, personajesUno, personajesDos, personajesTres, categoria, back, lii, tbt }) => {
    return (
        <>
            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="">
                        <div className="rounded-5 fondoTarjeta shadow">
                            <div className="p-2 m-4 d-flex rounded-5 justify-content-between gat" style={{
                                backgroundImage: back ,
                                height: "300px",
                            }}>
                                <div className="w-50 p-3">
                                    <p className="text-white bg-success w-75 text-center rounded-4">{categoria}</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center gap-3">
                                        <img className='img' src="https://64.media.tumblr.com/d65212d0050b2057686a31a3033377a4/9a5e59d4a20102aa-17/s75x75_c1/f537b0a0585d89556f1dfac7a609449e0dcd6813.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/6625acfa135f373639d42c4c2afa265c/9a5e59d4a20102aa-4d/s75x75_c1/25095466d0f9bed2e5f9c034c38d543b922ca8da.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/4da5613524cf08c02a1e948372de3c58/9a5e59d4a20102aa-8c/s75x75_c1/c12e1e1f72eb764678556e937ffac6c94bd10d57.pnj" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/d0dba451bf4f1a1cc1e6f11df8877f9f/9a5e59d4a20102aa-e9/s75x75_c1/3e8f2ba972afa71346a8b31879c8fcf95cb0eb93.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/76b1c52769848b74f755869e2427177d/9a5e59d4a20102aa-84/s75x75_c1/455e346408285b4892df391028fd0cad95ed22b0.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/abe25dc79a23f2d5a47c19ca5a60fdd2/9a5e59d4a20102aa-26/s75x75_c1/92a119554e254c453ab572f08727d4d225bf7b4b.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/d9b6699df09ba5dade9e78336729ed7b/9a5e59d4a20102aa-47/s75x75_c1/d313c1250a331ff2b826f42aaa231cc474005987.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/d563e0636285b3919ed8b477d9bbdcac/9a5e59d4a20102aa-6d/s75x75_c1/a514a5c93521064070370e2d5e814740c469827f.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/7916e48b4c5e5bec0ea231d5e0b26121/73fadafad671033f-87/s75x75_c1/6f9f9fbb1fd27475a34f7c1acb1ecbc7d276b6a4.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/f349a7cbd231bd04145fd50aab22eaca/4149a1d35ab9816c-5d/s75x75_c1/a8317198e7f68ebafc6418ec63d5aff88c5d54ee.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/e807e881d13cf17d2b4ea722a874ecf7/408b2d36fe8fb6b1-e5/s75x75_c1/0f8b22143647c538a713eb433d98b6a1ed6d2f52.gifv" />
                            
                                        <img className='img' src="https://64.media.tumblr.com/e1af22751f2c11adb8ea7b2eff326ed0/4809e0c5820895fd-c3/s75x75_c1/fc73c5fdc5e08ae4289065b971eac74551edfc54.gifv" />
                                      </div>
                            <div>
                                <div className="ps-4 pe-4 pb-4 mb-2">
                                    <h2 className="fw-bold mb-4 t pt-3"
                                    style={{ color: "var(--vinotinto)" }}
                                    >{titi}</h2>
                                    <p className="text-black">{des}</p>
                                    <div className="d-flex justify-content-center">
                                        <Link className="btn btn-outline-danger rounded-5 w-50 p-2 fw-bold " to={lii} > {tbt} </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
