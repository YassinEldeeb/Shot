import React from "react"
import Work from "../components/Work"
import racer1 from "../img/theracer-small.png"
import athlete1 from "../img/athlete-small.png"
import goodtimes1 from "../img/goodtimes-small.png"
import styled from "styled-components"
//animtions
import { motion } from "framer-motion"
import {
  WorkpageAnimation,
  workPageTransition,
  workPageStaggerDiv,
} from "../animation"
import { ScrollTop } from "../components/ScrollTop"

const OurWork = () => {
  return (
    <>
      <StyledMotion variants={workPageStaggerDiv} animate='show' initial='hide'>
        <Frame1 variants={workPageTransition}></Frame1>
        <Frame2 variants={workPageTransition}></Frame2>
        <Frame3 variants={workPageTransition}></Frame3>
      </StyledMotion>
      <motion.div
        exit='exit'
        variants={WorkpageAnimation}
        animate='show'
        initial='hide'
        className='WorkCont'
      >
        <Work title='The Racer' img={racer1} toPath='/work/the-racer' />
        <Work
          title='The Athlete'
          img={athlete1}
          toPath='/work/the-athlete'
          className2='reverseDir'
        />
        <Work title='Good Times' img={goodtimes1} toPath='/work/good-times' />
        <ScrollTop />
      </motion.div>
    </>
  )
}
const Frame1 = styled(motion.div)`
  height: 90vh;
  width: 100%;
  position: fixed;
  top: 0%;
  margin-top: calc(6vh + 3.2rem);
  background: #f2f2f2;
`
const Frame2 = styled(Frame1)`
  background: #f2f2f2;
`
const Frame3 = styled(Frame1)`
  background: orange;
`
const StyledMotion = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  pointer-events: none;
  z-index: 10;
`
export default OurWork
