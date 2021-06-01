import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { lineImageAnim, imgAnim2, imgContainerAnim, fade } from "../animation"
import { useScroll } from "../components/useScroll"

const Work = ({ title, img, className2, toPath }) => {
  const [element, controls] = useScroll()

  return (
    <StyledWork className={className2 ? className2 : ""}>
      <Link to={toPath}>
        <motion.div
          ref={element}
          variants={imgContainerAnim}
          animate={controls}
          initial='hide'
        >
          <motion.img
            variants={imgAnim2}
            src={img}
            alt='girl sitting beside a car'
          />
          <motion.div
            variants={lineImageAnim}
            className='workImg-line'
          ></motion.div>
        </motion.div>
      </Link>
      <motion.div
        ref={element}
        variants={fade}
        initial='hide'
        animate={controls}
        className='work-desc'
      >
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo neque,
          quia molestias unde suscipit omnis eligendi quasi? Recusandae hic
          error cupiditate pariatur, assumenda voluptates non blanditiis
          consequuntur maiores, exercitationem neque? Quidem, ut? Dicta, veniam
          saepe!
        </p>
      </motion.div>
    </StyledWork>
  )
}
const StyledWork = styled.div`
  min-height: 87vh;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    overflow: hidden;
    cursor: pointer;
    height: 80vh;
    flex: 1;
    margin-right: calc(4rem + 1vw);
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 80vh;
    }
    .workImg-line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.6rem;
      width: 100%;
      background: #f7af25;
    }
  }
  .work-desc {
    flex: 1 1 11rem;
    h1 {
      font-size: calc(4.1rem + 1vw);
      padding-bottom: 1.7rem;
    }
    p {
      font-size: calc(0.45rem + 1vw);
      line-height: 160%;
      color: #bdbdbd;
      padding-right: 3.6rem;
    }
  }
`

export default Work
