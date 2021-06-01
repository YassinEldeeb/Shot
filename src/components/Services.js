import React from "react"
import timer from "../img/timer.svg"
import money from "../img/moneysvg.svg"
const Services = () => {
  return (
    <div className='services'>
      <h1>High quality services</h1>
      <div className='servicesIcon'>
        <div className='efficient'>
          <img src={timer} alt='' />
          <h2>Efficient</h2>
        </div>
        <div className='affordable'>
          <img src={money} alt='' />
          <h2>Affordable</h2>
        </div>
      </div>
    </div>
  )
}
export default Services
