import React from "react"
import AboutUsSection from "../components/AboutUsSection"
import ShowCase from "../components/Showcase"
import Services from "../components/Services"
import Faq from "../components/Faq"
//animtions
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
import { ScrollTop } from "../components/ScrollTop"

const AboutUs = () => {
  return (
    <motion.div
      exit='exit'
      variants={pageAnimation}
      initial='hide'
      animate='show'
    >
      <AboutUsSection />
      <ShowCase />
      <Services />
      <Faq />
      <ScrollTop />
    </motion.div>
  )
}
export default AboutUs
