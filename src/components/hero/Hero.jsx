import React from 'react';
import './Hero.css';

const Hero = () => {
  
  return (
    <section >
      <div className='hero__info'>
        <div className='hero_info-description'>
          <h1>Hey there, <br/> I'm Mateusz</h1>
          <p>I'm Frontened Developer, SEO Specialist and UX Designer</p>
        </div>
        <div className='hero_info-my-photo'>
          <div className='hero_info-left-dots'></div>
          <div className='hero_info-dev'></div>
          <div className='hero_info-right-dots'></div>
        </div>
      </div>
      <a href="mailto:mateusz1836@gmail.com">
          <button className='button__primary'>Let's talk</button>
      </a>
      <div className="hero__media">
        <span>Check Out My:</span>
        <div className="hero__media__github"></div>
        <div className="hero__media__linkedin"></div>
      </div>
    </section>
  )
}

export default Hero