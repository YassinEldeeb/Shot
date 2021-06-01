import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MovieState } from "../movieState"
import styled from "styled-components"
//animtions
import { motion } from "framer-motion"
import { pageAnimation } from "../animation"
import { ScrollTop } from "../components/ScrollTop"

const MovieDetails = () => {
  const history = useHistory()
  const url = history.location.pathname
  const [movies, setMovies] = useState(MovieState)
  const [currentMovie, setCurrentMovie] = useState(null)
  useEffect(() => {
    const current = movies.filter((movie) => movie.url === url)
    setCurrentMovie(current[0])
  }, [url, movies])
  return (
    <>
      {currentMovie && (
        <motion.div
          exit='exit'
          variants={pageAnimation}
          animate='show'
          initial='hide'
          className='movie-container'
          style={{ width: "100%" }}
        >
          <Styledmovie>
            <h1 className='title'>{currentMovie.title}</h1>
            <div className='movie-img-cont'>
              <ImgDiv className='imgDiv' img={currentMovie.mainImg}></ImgDiv>
            </div>
            {currentMovie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Styledmovie>
          <img src={currentMovie.secondaryImg} alt='racer-cover' />
          <ScrollTop />
        </motion.div>
      )}
    </>
  )
}
const Styledmovie = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 86%;
  margin: 0 auto;

  .title {
    font-size: calc(3.5rem + 1vw);
    padding: 1.5rem 0;
    padding-top: 2.3rem 0;
  }
  .award {
    align-self: flex-start;
    h1 {
      font-size: 2rem;
    }
  }
`
const ImgDiv = styled.div`
  background: url(${(props) => props.img});
  background-position: 0 20%;
  background-size: cover;
  width: 100%;
  height: 65vh;
`

const Award = ({ title, description }) => {
  return (
    <div className='award'>
      <div className='titleDiv'>
        <h1>
          {title}
          <div className='title-line'></div>
        </h1>
      </div>
      <p>{description}</p>
    </div>
  )
}
export default MovieDetails
