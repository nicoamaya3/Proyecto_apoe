import React from 'react'
import "../stylesheets/General.css"
import { motion } from "motion/react"

export const Footer = () => {
  return (
    <>
      <motion.div className=" footer bg-black px-5 py-3 w-25 rounded-top-5 d-flex flex-column align-items-center gap-1 shadow pt-4"
      initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", duration: 1 }}>
        <h4 className="footer fw-bold t m-0">
          Producción de Multimedia
        </h4>
        <h5 className="fontCa m-0 text-white-50">
          Sena 2026
        </h5>
      </motion.div>
    </>
  )
}
