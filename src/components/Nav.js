import React, { useState, useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
const Nav = () => {
  const [nav, setNav] = useState(false)
  const { pathname } = useHistory().location
  useEffect(() => {
    setNav(false)
    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "power2.inOut" },
    })
    tl.to(".navLinks", { x: "100%" })
    tl.to("body", { overflow: "unset" })
    tl.to(".burger span", { background: "#f38a00" }, "-=0.8")
    try {
      tl.to("#luxy", { opacity: 1 }, "-=0.8")
    } catch {}
    try {
      tl.to(".WorkCont", { opacity: 1 }, "-=0.8")
    } catch {}
    try {
      tl.to(".ContactPage", { opacity: 1 }, "-=0.8")
    } catch {}
  }, [pathname])

  const navHandler = () => {
    const tl = gsap.timeline({
      defaults: { ease: "Power4.easeOut", duration: 0.8 },
    })
    nav
      ? tl.fromTo(".navLinks", { x: "0%" }, { x: "100%" })
      : tl.fromTo(".navLinks", { x: "100%" }, { x: "0%" })
    nav
      ? tl.to("body", { overflow: "unset" }, "-=0.8")
      : tl.to("body", { overflow: "hidden" }, "-=0.8")
    nav
      ? gsap.to(".burger span", { background: "#f38a00" }, "-=0.8", {
          duration: 0.5,
        })
      : gsap.to(".burger span", { background: "white" }, "-=0.8")
    try {
      nav
        ? tl.to("#luxy", { opacity: 1 }, "-=0.8")
        : tl.to("#luxy", { opacity: 0.5 }, "-=0.8")
    } catch {}
    try {
      nav
        ? tl.to(".WorkCont", { opacity: 1 }, "-=0.8")
        : tl.to(".WorkCont", { opacity: 0.5 }, "-=0.8")
    } catch {}
    try {
      nav
        ? tl.to(".ContactPage", { opacity: 1 }, "-=0.8")
        : tl.to(".ContactPage", { opacity: 0.5 }, "-=0.8")
    } catch {}

    setNav(!nav)
  }

  return (
    <div className='bigNav'>
      <StyledNav>
        <h1>
          <Link to='/'>Shot</Link>
        </h1>
        <div onClick={navHandler} className='burger'>
          <span className={nav ? `burgerSpan1` : ""}></span>
          <span className={nav ? `burgerSpan2` : ""}></span>
        </div>
      </StyledNav>
    </div>
  )
}
const StyledNav = styled.nav`
  min-height: 13vh;
  padding-bottom: 0.5rem;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 86%;
  h1 {
    font-size: calc(1.8rem + 1vw);
  }
  .burger {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    padding-right: 0rem;
    padding-top: 0rem;
    cursor: pointer;
    span {
      display: block;
      height: 0.2rem;
      background: #f38a00;
      width: 3.6rem;
      margin: 0.3rem 0;
      transition: 0.3s ease;
    }
  }
  .burgerSpan1 {
    transform: rotate(40deg) translateY(200%);
    width: 3.3rem !important;
  }
  .burgerSpan2 {
    width: 3.3rem !important;
    transform: rotate(-40deg) translateY(-270%) translateX(2%);
  }
`

export default Nav
