import React from 'react'
import { motion } from "motion/react"
import "../stylesheets/General.css"


export const Banda = () => {
  return (
    <>
    <motion.div 
                className="w-25 position-absolute top-0 start-50 translate-middle-x z-3"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="banda bg-black rounded-bottom-5 w-100 glow-box glow-effect">
                    <p className="p-home text-white fs-6 text-center m-0 py-2 glow-text">Apoe!</p>
                </div>
            </motion.div>
    
    </>
  )
}
