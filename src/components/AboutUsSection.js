import React from "react"
import sittingManImg from "../img/heroImg.png"
import { motion } from "framer-motion"
import { textAnim, imgAnim } from "../animation"
import Wave from "../components/Wave"

const AboutUs = () => {
  return (
    <motion.div className='aboutUs'>
      <div className='intro-text'>
        <div className='hide'>
          <motion.h1 variants={textAnim}>Remember</motion.h1>
        </div>
        <div className='hide'>
          <motion.h1 variants={textAnim}>every single</motion.h1>
        </div>
        <div className='hide'>
          <motion.h1 variants={textAnim} className='highlightedAbout'>
            shot
          </motion.h1>
        </div>
      </div>
      <div className='heroImg'>
        <div className='div luxy-el' data-speed-y='-5' data-offset='-25'>
          <motion.img
            variants={imgAnim}
            src={sittingManImg}
            alt='Man sitting'
          />
        </div>
      </div>

      <Wave />
    </motion.div>
  )
}

export default AboutUs
