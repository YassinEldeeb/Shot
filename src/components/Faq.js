import React from "react"
import Toggle from "./Toggle"
import { AnimateSharedLayout, motion } from "framer-motion"
const Faq = () => {
  return (
    <div className='faq'>
      <div className='faq-cont'>
        <AnimateSharedLayout>
          <motion.div layout className='faq-desc'>
            <h1 className='faq-title'>Any Questions</h1>
            <h1 className='faq-sub'>FAQ</h1>
          </motion.div>
          <Toggle title='How do I start'>
            <div className='answer'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                nulla adipisci voluptate nam quos.
              </p>
            </div>
          </Toggle>

          <Toggle title='Daily Schedule'>
            <div className='answer'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                repellat.
              </p>
            </div>
          </Toggle>
          <Toggle title='Different Payment Methods'>
            <div className='answer'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                quasi molestiae incidunt impedit.
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </div>
    </div>
  )
}
export default Faq
