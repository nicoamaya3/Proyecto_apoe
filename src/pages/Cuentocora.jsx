import { Cuentoc } from "../components/Cuentoc"


export const Cuentocora = () => {
    return (
        <>

            <Cuentoc fon="url(./corazon.jpg)" cat="Horror Japonés" titu="CORAZÓN DELATOR" sinop="En el periodo Edo en Kyoto, Takeshi, un hombre mentalmente inestable de 32 años, narra su asesinato un día antes de ser ejecutado. Obsesionado por el ojo de buitre de Satoshi, su maestro, planea matarlo. Cada noche entra sigilosamente a observarlo. En la octava noche, lo asfixia y desmembra el cuerpo bajo las tablas del suelo. Cuando los shogun investigan, el latido fantasmal del corazón lo delata." img1="./take.png" img2="./anci.png" img3="./sho.png" linkk="/LecturaC" txbtn="Empezar a leer" />

            <div style={{ position: 'fixed', top: '30px', right: '20px', zIndex: '9999', width: '369px' }}>

                <iframe
                    data-testid="embed-iframe"
                    src="https://open.spotify.com/embed/track/5T4pYDDgrEBU6ELku9rqkD?utm_source=generator&si=145b6c6e4dcf4720"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    style={{ borderRadius: '12px' }}
                    title="Spotify Track"
                ></iframe>

                <img
                    src="https://imgbb.host/images/MgfCi.png"
                    alt="Overlay"
                    className="img-fluid"
                    style={{ position: 'absolute', top: '0', left: '0', zIndex: '-1', width: '100%', height: '100%' }}
                />

            </div>
        </>
    )
}
