import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arraow_icon from '../Assets/arrow.png'
import hero_imae from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New arrivals only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p> 
                <img src={hand_icon} alt='hand'/>
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-lastest-btn">
            <div>Latest Collection</div>
            <img src={arraow_icon} alt="arraow"/>
        </div>
     </div>
        <div className="hero-right">
            <img src={hero_imae} alt="hero" />      
        </div>
    </div>
  )
}

export default Hero
