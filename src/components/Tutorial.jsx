import React from 'react'
import "../stylesheets/General.css"

export const Tutorial = () => {
    return (
        <>

            <div classNameName="container z-3 d-flex jsutofy-content-center" style={{ background: 'linear-gradient(135deg, #1d0b0b 0%, #0d0d0d 100%)', borderRadius: '15px' }}>
                <div classNameName="row">
                    <div classNameName="col">
                        <div classNameName='bg-black '>
                            <div id="carouselExampleCaptions" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active tuto">
                                        <img src="/controles.png" className="d-block w-100" alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className='fw-bold'>CONTROLES</h5>
                                                <p>Estos son los controles diseñados para gestionar la interactividad dentro del cuento, pantalla completa para una experiencia inmersiva.</p>
                                            </div>
                                    </div>
                                    <div className="carousel-item tuto">
                                        <img src="/Subtitulos.png" className="d-block w-100" alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className='fw-bold'>NAVEGACIÓN</h5>
                                                <p>La navegación permite moverse entre las diferentes páginas del cuento, facilitando la exploración de la historia.</p>
                                            </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="..." className="d-block w-100" alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Third slide label</h5>
                                                <p>Some representative placeholder content for the third slide.</p>
                                            </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
