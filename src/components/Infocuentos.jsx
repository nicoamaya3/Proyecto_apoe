import "../stylesheets/Infocuentos.css"

export const Infocuentos = () => {
    return (
        <>

            <div className="container">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-10">
                        <div className="rounded fon">
                            <div className="p-2 d-flex rounded justify-content-between gat" style={{
                                backgroundImage: "url(./gato.jpg)",
                            }}>
                                <div className="w-50 p-3">
                                    <p className="bg-success w-75 text-center rounded-4">Terror Psicológico</p>
                                </div>
                                <div className="p-3">
                                    <img className="tama" src="cora.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="p-3 text-white">
                                    <h5 className="fw-bold">El Gato Negro</h5>
                                    <p>Un hombre bondadoso se transforma en un ser monstruoso bajo el influjo del alcohol. Su crueldad hacia su gato Plutón desencadena una espiral de horror y culpa que culmina en...</p>
                                    <div className="d-flex gap-2">
                                        <p className="osq w-25 text-center rounded-4">Frank</p>
                                        <p className="osq w-25 text-center rounded-4">Katherine</p>
                                        <p className="osq w-25 text-center rounded-4">Plutón</p>
                                    </div>
                                    <button className="btn btn-success text-black w-100 p-2 fw-bold">EMPEZAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
