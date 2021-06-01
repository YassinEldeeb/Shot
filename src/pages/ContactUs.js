import React from "react"
import styled from "styled-components"
//animtions
import { motion } from "framer-motion"
import { pageAnimation, textAnim } from "../animation"
import { ScrollTop } from "../components/ScrollTop"

const ContactUs = () => {
  return (
    <Contact
      className='ContactPage'
      variants={pageAnimation}
      animate='show'
      initial='hide'
      exit='exit'
    >
      <h1>Get in touch.</h1>
      <Hide>
        <motion.div variants={textAnim} className='link'>
          <div className='dot'></div>
          <h1>Send us a Message</h1>
        </motion.div>
      </Hide>
      <Hide>
        <motion.div variants={textAnim} className='link'>
          <div className='dot'></div>
          <h1>Send an email</h1>
        </motion.div>
      </Hide>
      <Hide>
        <motion.div variants={textAnim} className='link'>
          <div className='dot'></div>
          <h1>Social Media</h1>
        </motion.div>
      </Hide>
      <ScrollTop />
    </Contact>
  )
}
const Contact = styled(motion.div)`
  min-height: 80vh;
  h1 {
    font-size: 5rem;
    padding: 2rem 0rem;
  }
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 86%;
  margin: auto;
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0rem;
    h1 {
      font-size: 3.2rem;
      padding: 0 0.5rem;
    }
    .dot {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: white;
    }
  }
`
const Hide = styled.div`
  overflow: hidden;
`
export default ContactUs
