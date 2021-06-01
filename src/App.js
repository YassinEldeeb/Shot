import React, { useRef, useEffect, Component } from 'react'
import AboutUs from './pages/AboutUs'
import './styles/App.scss'
import Nav from './components/Nav'
import NavLinks from './components/NavLinks'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import MovieDetails from './pages/MovieDetails'
import { Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import luxy from 'luxy.js'

function App() {
  const cursorRef = useRef(null)
  const luxyRef = useRef(null)
  const largeDiv = useRef(null)

  const run = () => {
    luxy.init({ wrapperSpeed: 0.02 })
  }

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      cursorRef.current.style.left = `${e.clientX}px`
      cursorRef.current.style.top = `${e.clientY}px`
    })
  }, [largeDiv])

  const location = useLocation()

  return (
    <div className='App' ref={largeDiv}>
      <div className='helper'>
        <Nav />
        <NavLinks />

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path='/' exact>
              <div onLoad={run} ref={luxyRef} className='all' id='luxy'>
                <AboutUs />
              </div>
            </Route>
            <Route path='/contact'>
              <ContactUs />
            </Route>
            <Route path='/work' exact>
              <OurWork />
            </Route>
            <Route path='/work/:id'>
              <MovieDetails />
            </Route>
          </Switch>
        </AnimatePresence>
        <div className='cursor' ref={cursorRef}>
          <div className='point'></div>
        </div>
      </div>
    </div>
  )
}

export default App
