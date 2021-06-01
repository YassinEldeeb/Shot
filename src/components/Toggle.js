import React, { useState } from "react"
import { motion } from "framer-motion"

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
      <motion.h1 layout>{title}</motion.h1>
      {toggle ? children : ""}
      <div className='faq-line'></div>
    </motion.div>
  )
}
export default Toggle
