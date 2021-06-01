import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Wave = () => {
  return (
    <StyledWave
      viewBox='0 0 1918 477'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        d='M1 469.5C32.5 412.5 264.762 397.293 431.022 460.604C459.9 472.222 531.379 488.487 586.264 460.604C604.126 453.633 650.765 420.009 694.433 341.28C742.509 245.403 849 81.3972 879.723 55.7004C924.126 14.4222 1060.1 -43.3673 1248.8 55.7004C1290.87 77.843 1388.12 132.461 1440.6 173.794C1507.54 221.497 1666.85 320.674 1768.61 335.763C1804 342.598 1903.22 343.636 2017 293.118'
        stroke='#894B28'
        strokeWidth='7'
      />
    </StyledWave>
  )
}
const StyledWave = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 96vh;
  pointer-events: none;
`

export default Wave
