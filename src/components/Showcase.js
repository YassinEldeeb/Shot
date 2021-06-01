import React, { useRef, useEffect } from "react"
import bandImg from "../img/bandImg.png"
import girlImg from "../img/girl.png"
import * as ScrollMagic from "scrollmagic"
import { TweenMax, TimelineMax } from "gsap"
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap"
import { motion } from "framer-motion"

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)

const ShowCase = () => {
  const imgRef = useRef(null)
  const showCaseRef = useRef(null)

  useEffect(() => {
    let controller = new ScrollMagic.Controller()

    new ScrollMagic.Scene({
      triggerElement: ".floatingCont",
      duration: "90%",
      offset: imgRef.current.offsetHeight,
      reverse: false,
    })
      .setTween(".text-scroll", {
        translateX: "20%",
      })

      .addTo(controller)
  }, [showCaseRef])

  return (
    <motion.div ref={showCaseRef} className='showcase'>
      <div className='floatingImg1'>
        <div
          className='floatingCont luxy-el'
          data-speed-y='-5'
          data-offset='150'
        >
          <img src={bandImg} alt='Band' />
        </div>
      </div>
      <div className='helperText-scroll'>
        <h1 className='text-scroll scroll-text1'>Photography</h1>
        <h1 className='text-scroll scroll-text2'>Photography</h1>
        <div className='floatingImg2'>
          <div
            className='floatingCont luxy-el'
            data-speed-y='7'
            data-offset='-250'
          >
            <img src={girlImg} alt='Girl' ref={imgRef} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ShowCase
