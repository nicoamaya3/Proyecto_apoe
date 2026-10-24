import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../stylesheets/General.css";

export const ContactosFijos = () => {
    const [activeQR, setActiveQR] = useState(null);

    const toggleQR = (red) => {
        setActiveQR(activeQR === red ? null : red);
    };

    return (
        <>
            {/* Botón de Instagram (Ubicado abajo) */}
            <div className="position-fixed end-0 me-4 z-3" style={{ bottom: "180px" }}>
                <motion.div 
                    className="custom-sidebar d-flex align-items-center justify-content-center p-2 glow-box glow-effect"
                    style={{ width: "70px", height: "70px", borderRadius: "100%" }}
                    initial={{ opacity: 0, x: 90 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 10 }}
                >
                    <button 
                        onClick={() => toggleQR('instagram')}
                        className="sidebar-icon glow-effect border-0 bg-transparent p-0 d-flex align-items-center justify-content-center"
                        title="Instagram"
                        style={{ cursor: 'pointer', width: '100%', height: '100%' }}
                    >
                        <img className="iconos glow-img" src="iconos/instagram.png" alt="Instagram" style={{ width: '45px', height: '45px' }} />
                    </button>
                </motion.div>

                {/* Tarjeta QR de Instagram con el estilo del tooltip del menú */}
                <AnimatePresence>
                    {activeQR === 'instagram' && (
                        <motion.div 
                            className="position-absolute p-3 text-center custom-tooltip-qr glow-box"
                            style={{ 
                                right: "80px", 
                                top: "60%", 
                                transform: "translateY(-50%)", 
                                width: "150px", 
                                backgroundColor: "#120508", 
                                border: "1px solid rgba(159, 44, 44, 0.4)", 
                                borderRadius: "12px",
                                zIndex: 10 
                            }}
                            initial={{ opacity: 0, x: -10, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -10, scale: 0.9 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <p className="text-light mb-2 p-home" style={{ fontSize: "1rem", fontWeight: "500" }}>Instagram</p>
                            <img src="iconos/igqr.png" alt="QR Instagram" className="img-fluid rounded" style={{ width: "120px", height: "120px", objectFit: "contain" }} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Botón de Facebook (Ubicado más abajo todavía) */}
            <div className="position-fixed end-0 me-4 z-3" style={{ bottom: "100px" }}>
                <motion.div 
                    className="custom-sidebar d-flex align-items-center justify-content-center p-2 glow-box glow-effect"
                    style={{ width: "70px", height: "70px", borderRadius: "100%" }}
                    initial={{ opacity: 0, x: 90 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 100, damping: 10, delay: 0.1 }}
                >
                    <button 
                        onClick={() => toggleQR('facebook')}
                        className="sidebar-icon glow-effect border-0 bg-transparent p-0 d-flex align-items-center justify-content-center"
                        title="Facebook"
                        style={{ cursor: 'pointer', width: '100%', height: '100%' }}
                    >
                        <img className="iconos glow-img" src="iconos/faacebook.png" alt="Facebook" style={{ width: '25px', height: '48px' }} />
                    </button>
                </motion.div>

                {/* Tarjeta QR de Facebook con el estilo del tooltip del menú */}
                <AnimatePresence>
                    {activeQR === 'facebook' && (
                        <motion.div 
                            className="position-absolute p-3 text-center custom-tooltip-qr glow-box"
                            style={{ 
                                right: "80px", 
                                top: "-60%", 
                                transform: "translateY(-50%)", 
                                width: "150px", 
                                backgroundColor: "#120508", 
                                border: "1px solid rgba(159, 44, 44, 0.4)", 
                                borderRadius: "12px",
                                zIndex: 10 
                            }}
                            initial={{ opacity: 0, x: -10, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -10, scale: 0.9 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <p className="text-light mb-2 p-home" style={{ fontSize: "1rem", fontWeight: "500" }}>Facebook</p>
                            <img src="iconos/qrfacebook.png" alt="QR Facebook" className="img-fluid rounded" style={{ width: "120px", height: "120px", objectFit: "contain" }} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};