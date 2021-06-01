import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const NavLinks = () => {
  const { pathname } = useHistory().location
  return (
    <div className='navLinks'>
      <header>
        <div className='links-cont'>
          <div className='hide-link'>
            <h1
              className={`aboutUsLink ${pathname === '/' ? 'activeLink' : ''}`}
            >
              <Link to='/'>About us</Link>
              <div className='linkSlide'></div>
            </h1>
          </div>
          <div className='hide-link'>
            <h1
              className={`ourWorkLink ${
                pathname.includes('/work') ? 'activeLink' : ''
              }`}
            >
              <Link to='/work'>Our Work</Link>
              <div className='linkSlide'></div>
            </h1>
          </div>
          <div className='hide-link'>
            <h1
              className={`contactUsLink ${
                pathname === '/contact' ? 'activeLink' : ''
              }`}
            >
              <Link to='/contact'>Contact Us</Link>
              <div className='linkSlide'></div>
            </h1>
          </div>
        </div>
      </header>
    </div>
  )
}
export default NavLinks
